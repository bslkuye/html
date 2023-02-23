// import ItemList from '../components/ItemList';
// import BreadCrumb from '../components/Breadcrumb';

import styles from './Login.module.css'

const Longin = (): JSX.Element => {
  return (
    <section className={styles.loginBox}>
      <a className={styles.siteTitle}>Site Title</a>
      <div className={styles.login}>
        LOG-IN
        <div className={styles.gap}></div>
        <table className={styles.table}>
          <tr>
            <td className={styles.tdBox}>
              <span className={styles.loginText}>아이디</span>
            </td>
            <td>
              <input className={styles.input}></input>
            </td>
            <td rowSpan={2}>
              <button  className={styles.loginBtn}>로그인</button>
            </td>
          </tr>
          <tr>
            <td className={styles.tdBox}>
              <span className={styles.loginText}>비밀번호</span>
            </td>
            <td>
              <input className={styles.input}></input>
            </td>
          </tr>
        </table>
        <table className={styles.table}>
          <tr>
            <td>
              <input type="checkbox" />
              <label>ID 저장</label>
            </td>
            <td>
              <input type="checkbox" />
              <label>로그인 상태유지</label>
            </td>
          </tr>

          <div className={styles.gap}></div>

          <tr>
            <td>
              <button className={styles.btn}>회원가입</button>
            </td>
            <td>
              <button className={styles.btn}>아이디/비밀번호 찾기</button>
            </td>
          </tr>
        </table>
        <div className={styles.gap}></div>
      </div>
    </section>
  );
};

export default Longin;
