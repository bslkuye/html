import { Nav, NewsList } from './components/index.js'

const $newsContainer = document.querySelector('#root');

Nav($newsContainer);
NewsList($newsContainer);

import { category } from './components/index.js';

export const categoryProxy = new Proxy(category, {
  get: (obj, prop) => {
    console.log(`${prop}의 값은 ${obj[prop]}입니다.`);
    return obj[prop];
  },
  set: (obj, prop, value) => {
    console.log(`${prop}의 값이 ${obj[prop]}에서 ${value}로 바뀜`);
    obj[prop] = value;
    NewsList($newsContainer);
    return true;
  }
});