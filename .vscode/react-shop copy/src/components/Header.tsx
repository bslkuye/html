import styles from './Header.module.css'

const Header = (): JSX.Element => {

  return(
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <a
            className={styles.titleText}
            href="/"
          >
            React Shop
          </a>
        </h1>
        <div className={styles.categoryContainer}>
          <a
            className={styles.category}
            href="/fashion"
          >
            패션
          </a>
          <a
            className={styles.category}
            href="/accessory"
          >
            액세서리
          </a>
          <a
            className={styles.category}
            href="/digital"
          >
            디지털
          </a>
          <input type='text'className={styles.search}></input>
          <a className={styles.cart} href='/cart'>cart</a>
        </div>
        header
      </div>
    </>
  )
}

export default Header; 