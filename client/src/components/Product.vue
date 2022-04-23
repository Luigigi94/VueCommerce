<template>
  <div class="ui card product">
    <div class="image">
      <img
        :src="API_URL + Producto.attributes.image.data.attributes.url"
        :alt="Producto.attributes.Name"
      />
    </div>
    <div class="content">
      <div class="header">{{ Producto.attributes.Name }}</div>
      <div class="description">${{ Producto.attributes.Price }}</div>
    </div>
    <div class="ui button primary">comprar</div>
  </div>
</template>

<script>
import { API_URL } from "../utils/constants.js";

export default {
  name: "Product",
  props: {
    Producto: Object,
  },
  setup(props) {
    return {
      API_URL,
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
