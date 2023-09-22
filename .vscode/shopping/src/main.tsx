import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil'
import App from './App';

const container: any = document.getElementById('root')
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
