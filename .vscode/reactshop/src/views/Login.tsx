// import ItemList from '../components/ItemList';
// import BreadCrumb from '../components/Breadcrumb';

import styles from './Login.module.css'

const Longin = (): JSX.Element => {
  return (
    <section className={styles.loginBox}>
      <a className={styles.siteTitle}>Site Title</a>
      <div className={styles.login}>LOG-IN
        <div className={styles.gap}></div>
        <div className={styles.loginTextBox}>
          <span className={styles.loginText}>
            아이디
          </span>
          <input className={styles.input}></input>
        </div>
        <div >
          <span className={styles.loginText}>
            비밀번호
          </span>
          <input className={styles.input}></input>
        </div>
        <div className={styles.gap}></div>

        <div className={styles.loginCheckBox}>
          <input type="checkbox"/><label >ID 저장</label>
          <input type="checkbox"/> <label >로그인 상태유지</label>
        </div>
      </div>
        
    </section>
  );
};

export default Longin;
