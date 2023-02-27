import { selector } from "recoil";

// const productsURL = '/products.json';
const productsURL = "https://fakestoreapi.com/products";

// interface Rating {
//   readonly rate?: 0;
//   readonly count?: 0;
// }
// export interface Product {
//   readonly id: number;
//   readonly title: string;
//   readonly description: string;
//   readonly category: string;
//   readonly price: number;
//   readonly image: string;
//   readonly rating: Rating;
// }

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
