import styles from "./Footer.module.css";

const footerItems = [
  {
    title: "Terms",
    link: "",
  },
  {
    title: "Privacy",
    link: "",
  },
  {
    title: "Security",
    link: "",
  },
  {
    title: "Status",
    link: "",
  },
];

export default function Footer() {
  return (
    <ul className={styles.footer}>
      {footerItems.map(({ link, title }) => (
        <li className={styles.item} key={title}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
