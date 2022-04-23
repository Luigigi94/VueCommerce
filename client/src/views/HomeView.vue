<template>
  <div class="home">
    <BasicLayout>
      <h1>Productos Recientes</h1>
      <div class="ui grid">
        <div
          class="sixten wide mobile eight wide tablet four wide computer column"
          v-for="product in products"
          :key="product.id"
        >
          <Product :Producto="product" />
        </div>
      </div>
    </BasicLayout>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayout from "../Layouts/BasicLayout.vue";
import { getProducts } from "../api/Products";
import Product from "../components/Product.vue";

export default {
  name: "HomeView",
  components: {
    BasicLayout,
    Product,
  },
  setup() {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(8);
      products.value = response.data;
    });

    return {
      products,
    };
  },
};
</script>
