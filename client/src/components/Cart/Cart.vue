<template>
  <div class="cart-dimmer" :class="{ open: showCart }" @click="closeCart" />
  <div class="cart" :class="{ open: showCart }">
    <div>
      <CartHeader :closeCart="closeCart" />
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from "vue";
import { useStore } from "vuex";
import CartHeader from "./CartHeader";
import { getProductsCartApi } from "../../api/cart";

export default {
  components: { CartHeader },
  name: "Cart",
  setup() {
    const store = useStore();
    const showCart = computed(() => store.state.showCart);

    const closeCart = () => {
      store.commit("setShowCart", false);
    };

    const getProductsCart = async () => {
      await getProductsCartApi();
    };

    watchEffect(() => {
      showCart.value;
      getProductsCart();
    });
    return { showCart, closeCart };
  },
};
</script>

<style lang="scss" scoped>
.cart-dimmer {
  opacity: 0;
  transition: opacity 0.5s ease;

  &.open {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }
}
.cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: white;
  box-shadow: 0 0 26px 5px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: transform 0.9s ease;
  transform: translateX(150%);

  &.open {
    transform: translateX(0);
  }
}
</style>
