import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
        <Nav></Nav>
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
        <Footer />
      </section>
      <Drawer closeOverlay={closeOverlay} />
    </BrowserRouter>
  );
};

export default App;
