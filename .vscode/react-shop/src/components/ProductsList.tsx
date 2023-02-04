import { Link } from "react-router-dom";
import { toCurrencyFormat } from '../helpers/helpers';
import type { Product } from "../store/products";
import ProductsLoad from './ProductsLoad';

const ProductsList = ({ products, limit }: { products: Product[]; limit: number }): JSX.Element => {
  return (
    <>
      {0 < products.length ? (
        products.slice(0, limit).map((products: Product) => {
          return (
            <Link to={`/product/${products.id}`} key={products.id} className='card card-bordered border-gray200'>
              <figure className="flex h-80 bg-white overflow-hidden">
                <img src={products.image} alt='상품 이미지' className='transition-transform duration-300' />
              </figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">{products.title}</p>
                <p className="text-base">{toCurrencyFormat(products.price)}</p>
              </div>
            </Link>
          )
        })
      ) : (
        <ProductsLoad limit={limit} />
      )}
    </>
  );
};

export default ProductsList;