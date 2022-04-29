import { API_URL, PRODUCTS } from "../utils/constants";
import { uniqBy, countBy } from "lodash";

export function addProductCartApi(idProduct) {
  const products = getCartApi();
  products.push(idProduct);

  localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

export function getCartApi() {
  const products = localStorage.getItem(PRODUCTS);

  if (!products) return [];

  return JSON.parse(products);
  //   console.log(products);
}

export async function getProductsCartApi() {
  const idProducts = getCartApi();

  if (idProducts.lenght === 0) return null;

  try {
    const products = [];

    for await (const idProduct of idProducts) {
      const response = await fetch(`${API_URL}/api/productos/${idProduct}`);
      const result = await response.json();
      products.push(result);
    }

    const productsCount = countBy(products, (product) => {
      return product.attributes.Name;
    });

    const combined = uniqBy(products, (product) => {
      const productTemp = products;
      productTemp.quantity = productsCount[product.attributes.Name];

      return productTemp.Name;
    });
    console.log(combined);
  } catch (error) {
    console.log(error);
    return null;
  }
}

//TODO: INVESTIGAR PORQUE NO SE PUEDE CONTAR LOS OBJETOS EN EL CARRITO
