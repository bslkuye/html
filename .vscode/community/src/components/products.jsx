import { selector } from "recoil";

const productsURL = "https://fakestoreapi.com/products";

export const productsList = selector({
  key: "productsList",
  get: async () => {
    try {
      const response = await fetch(productsURL);
      console.log("res", response);
      return (await response.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});
