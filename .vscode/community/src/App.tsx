import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/tailwind.css';
import './assets/css/style.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import Error from './views/Error';
import Index from './views/Index';
import Products from './views/Products';
import Cart from './views/Cart';
import Fashion from './views/Fashion';
import Accessory from './views/Accessory';
import Digital from './views/Digital';
import { ScrollToTop } from './helpers/helpers';
import { useRef } from 'react';
import { useCartLoad } from './composables/useCartLoad';

import Longin from './views/Login';
import MainPage from './views/MainPage';
import MyPage from './views/MyPage';
import Category1 from './views/Category';
import Page from './views/Page';

const App = (): JSX.Element => {
  const $hamburger = useRef<HTMLInputElement>(null);
  const closeOverlay = () => {
    $hamburger?.current?.click();
  };
  useCartLoad();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <input type='checkbox' id='side-menu' className='drawer-toggle' ref={$hamburger} />
      <section className='drawer-content w-[900px]'>
        <Nav />
        <section className='main flex'>
          <Routes>
            <Route path='*' element={<Error />} />
            <Route path='/login' element={<Longin />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/my' element={<MyPage />} />
            <Route path='/category1' element={<Category1 />} />
            <Route path='/page' element={<Page />} />
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
