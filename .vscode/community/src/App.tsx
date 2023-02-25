import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/tailwind.css';
import './assets/css/style.css';

import Nav from './components/Nav';
import Error from './views/Error';
import { useRef } from 'react';

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
  return (
    <BrowserRouter>
      <input type='checkbox' id='side-menu' className='drawer-toggle' ref={$hamburger} />
      <section className='drawer-content w-[900px]'>
        <Nav />
        <section className='main flex'>
          <Routes>
            <Route path='*' element={<Error />} />
            <Route path='/login' element={<Longin />} />
            <Route path='/' element={<MainPage />} />
            <Route path='/my' element={<MyPage />} />
            <Route path='/category1' element={<Category1 />} />
            <Route path='/page' element={<Page />} />
          </Routes>
        </section>
      </section>
    </BrowserRouter>
  );
};

export default App;
