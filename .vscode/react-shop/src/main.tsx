import React from 'react'
import ReactDOM from 'react-dom/client';
import createRoot from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { CART_ITEM } from './composables/useCartLoad';
import { cartState } from './store/cart';
import App from './App';

// const container: any = document.getElementById('app')
// const root = createRoot(container);
const initialValue = JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot initializeState={() => Object.assign(cartState, initialValue)}>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);