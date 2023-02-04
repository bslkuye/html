import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/tailwind.css'

// import Nav
import Footer from './components/Footer'
import Drawer from './components/Drower'
import Error from './views/Error'
import Index from './views/Index'
import Products from './views/Products'
import Cart from './views/Cart'
import Fashion from './views/Fashion'
import Accessory from './views/Accessory'
import Digital from './views/Digital'
import { ScrollToTop } from './helpers/helpers'
import { useRef } from 'react'
import { useCartLoad } from './composables/useCartLoad'


const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  const $hamburger = useRef<HTMLIFrameElement>(null);
  const closeOverlay = () => {
    $hamburger?.current?.click();
  };
  useCartLoad();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <input type='checkbox' id='side-menu' className='drawer-toggle' ref={$hamburger} />
      <section className='drawer-content'>
        <Nav />
      </section>
    </BrowserRouter>
  )
}

export default App;
