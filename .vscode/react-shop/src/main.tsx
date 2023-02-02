import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { CART_ITEM } from './composables/useCartLoad';
import {cartState} from './store/cart';
import App from './App'
import './index.css'

const container: any = document.getElementById('app')
const root = createRoot(container);
const initialValue = JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot initializeState={() => Object.assign(cartState, initialValue)}>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
