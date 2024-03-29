import React, { Suspense, use } from 'react'
import { useParams } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil'
import { Product, productsList } from '../store/products'
import ProductsLoad from './ProductsLoad';
import BreadCrumb from './Breadcrumb';
import styles from './ProductsView.module.css'
import Rating from './Rating';
import CartList from './CartList';
import { Link } from 'react-router-dom'
import { CartItems, CartState, cartState, removeFromCart } from '../store/cart';
import { toCurrencyFormat } from '../helpers/helpers';
import { useRecoilState } from 'recoil';

type Items = {
  id?: number;
  title?: string;
  limit?: number;
  data?: Array<Product>;
  scroll?: boolean;
} & typeof defaultProps;

const defaultProps = {
  id: 1,
  idstring: '',
  title: '',
  limit: 4,
  data: [],
  scroll: false,
};

type recipeParams = {
  recipeId: string;
};

const ProductsView = () => {
  const ProductsList = React.lazy(() => import('./ProductsList'));
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList);

  let idd = 1;

  let params = useParams().id;

  let products: Product[] = 'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : [];
  products = products.filter((item) => item.id.toString() === params);
  let category = ''
  switch (products[0].category){
    case "men's clothing":
      category = '패션';
      break;
    case "women's clothing":
      category = '패션';
      break;
    case "jewelery":
      category = '액세서리';
    break;
    case 'electronics':
      category = '디지털';
    break;
    default:
    break;
  }
  
  const [cart, setCart] = useRecoilState<CartState>(cartState);

  const removeFromCartHandler = (id: number) => {
    setCart(removeFromCart(cart, id));
  }

  const addToCartHandler = (id: number) => {
    setCart({...cart, [id]: { id: id, count : (cart[id].count || 0) + 1 }})
  }

  const cartBtn = (id : any) => {
    addToCartHandler(id)
    console.log('cart btn clicked', products[0])
  }

  return(
    <>
      <BreadCrumb category={category} crumb={products[0].title}/>
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure className={styles.itemImgFigure}>
          <img className={styles.itemImg} src={products[0].image} alt={products[0].title} />
        </figure>
        <div className={styles.cardBody}>
          <h2 className={styles.cardTitle}>
            {products[0].title}
            <span className={styles.badge}>NEW</span>            
          </h2>
          <p>{products[0].description}</p>
          <div className={styles.ratingBox}>
            <Rating rate={products[0].rating.rate} count={products[0].rating.count}/>
          </div>
          <p className={styles.price}>${products[0].price}</p>
          <div>
          <button className={styles.cartIn} onClick={() => cartBtn(products[0].id)}>장바구니에 담기</button>
            <a className={styles.cartBtn} href="/cart">장바구니로 이동</a> 
          </div>
        </div>

      </div>
    </>
  );
};

ProductsView.defaultProps = defaultProps;

export default ProductsView;