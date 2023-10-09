import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/tailwind.css'

import Error from './views/Error'
import Index from './views/Index'
import Products from './views/Products'
import Cart from './views/Cart'
import Fashion from './views/Fashion'
import Accessory from './views/Accessory'
import Digital from './views/Digital'
import { ScrollToTop } from './helpers/helpers'
import { useRef } from 'react'


const App = (): JSX.Element => {
  const $hamburger = useRef<HTMLInputElement>(null);
  const closeOverlay = () => {
    $hamburger?.current?.click();
  };
  // useCartLoad();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <input type='checkbox' id='side-menu' className='drawer-toggle' ref={$hamburger} />
      <section className='drawer-content'>
        <section className='main pt-16'>
          <Routes>
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Index />} />
            <Route path='/product/:id' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/accessory' element={<Accessory />} />
            <Route path='/digital' element={<Digital />} />
          </Routes>
        </section>
      </section>
    </BrowserRouter>
  );
};

export default App;
