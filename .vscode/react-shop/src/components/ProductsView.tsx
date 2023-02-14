import { Link } from "react-router-dom";
import { toCurrencyFormat } from '../helpers/helpers';
import type { Product } from "../store/products";
import ProductsLoad from './ProductsLoad';
import styles from './ProductsView.module.css'
import BreadCrumb from "./Breadcrumb";

const ProductsView  = ({ products, id }: { products: Product[]; id: number }): JSX.Element => {
  console.log(products, "products");
  return (
    <>
      <BreadCrumb category="홈" crumb="디지털" />

    </>
  );
};

export default ProductsView