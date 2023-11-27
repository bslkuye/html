import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil'
import App from './App';

const container: any = document.getElementById('root')
const root = createRoot(container);
// const initialValue = JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

root.render(
  <React.StrictMode>
    {/* <RecoilRoot initializeState={() => Object.assign(cartState, initialValue)}> */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
