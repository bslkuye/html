import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = () => {
  const $html = document.querySelector('html');
  const themeLight = 'light';
  const themeDark = 'dark';

  const themeChange = (event: any) => {
    if (event.target.checked) {
      setLight();
    } else {
      setDark();
    }
  };

  const setLight = () => {
    $html?.classList.remove(themeDark);
    $html?.setAttribute('data-theme', themeLight);
    localStorage.setItem('theme', themeLight);
  };

  const setDark = () => {
    $html?.classList.add(themeDark);
    $html?.setAttribute('data-theme', themeDark);
    localStorage.setItem('theme', themeDark);
  };

  useEffect(() => {
    if (themeLight === localStorage.getItem('theme')) {
      setLight();
      document.querySelector('.js-theme')?.setAttribute('checked', 'checked');
    } else {
      setDark();
    }
  }, []);

  return (
    <div className='border-b-2 z-10 w-full navbar border-solid bg-white dark:bg-neutral text-neutral-content'>
      <div className='flex w-full xl:container xl:m-auto'>
        <label htmlFor='side-menu' className='flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-gray-700 dark:stroke-current'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </label>
        <h1 className='shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2'>
          <Link to='/' className='text-4xl text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap'>
            Site Title
          </Link>
        </h1>
        
        <Link to='category1' className='text-gray-700 ml-4'>인기 카테고리1</Link>
        <Link to='category2' className='text-gray-700 ml-4'>인기 카테고리2</Link>
        <Link to='category3' className='text-gray-700 ml-4'>인기 카테고리3</Link>
      </div>
        <div className={styles.login}>
            <Link to='/login'>로그아웃
            </Link>
          <div></div>
          <Link to='/my'>마이페이지</Link>
        </div>
    </div>
  );
};

export default Nav;
