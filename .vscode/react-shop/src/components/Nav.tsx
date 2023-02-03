import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartCount } from '../store/cart';
import { Search } from "react-router-dom";

const Nav = () => {
  const menus = [
    { name: 'fashion', title: '패션'},
    { name: 'accessory', title: '액세서리'},
    { name: 'digital', title: '디지털'},
  ];

  const count = useRecoilValue(cartCount);
  const $html = document.querySelector('html');
  const themeLight = 'light';
  const themeDark = 'dark';

  const themeChange = (event: any) => {
    if(event.target.checked){
      // setLight();
    }
  }

}