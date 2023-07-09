import { Link } from "react-router-dom";
import styles from './Drower.module.css'

const Drawer = ({ closeOverlay }: any): JSX.Element => {
  const menus = [
    { name: 'fashion', title: '패션'},
    { name: 'accessory', title: '액세서리'},
    { name: 'digital', title: '디지털'},
  ];

  return(
    <div className={styles.drawerSide}>
      <label htmlFor="side-menu" className={styles.drawerOverlay}></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {menus.map((menu) => {
          return(
            <li key={menu.name}>
              <Link to={`/${menu.name}`} onClick={closeOverlay} className='!text-gray-700 active:!text-white dark:!text-black'>
                {menu.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Drawer;