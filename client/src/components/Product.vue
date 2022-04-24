<template>
  <div class="ui card product">
    <div class="image">
      <template v-if="haveCategory === undefined">
        <img
          :src="API_URL + Producto.attributes.image.data.attributes.url"
          :alt="Producto.attributes.Name"
        />
      </template>
      <template v-else>
        {{ Producto }}
      </template>
    </div>
    <div class="content">
      <template v-if="haveCategory === undefined">
        <div class="header">{{ Producto.attributes.Name }}</div>
        <div class="description">${{ Producto.attributes.Price }}</div>
      </template>
      <template v-else>
        <!-- {{ Producto.attributes.Price }} -->
      </template>
    </div>
    <div class="ui button primary">comprar</div>
  </div>
</template>

<script>
import { API_URL } from "../utils/constants.js";
import { getProductsCategory } from "../api/Products";
import { onMounted, ref, useTransitionState } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Product",
  props: {
    Producto: Object,
  },
  watch: {
    $route(to, from) {},
  },
  setup() {
    let haveCategory = ref(null);
    const { params } = useRoute();
    haveCategory = JSON.stringify(params.category);
    // console.log(haveCategory);

    return {
      API_URL,
      haveCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    .ui.button {
      min-height: 36px;
    }
  }

  .ui.button {
    max-height: 0;
    min-height: 0;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: min-height 0.6s ease;
  }
}
</style>
