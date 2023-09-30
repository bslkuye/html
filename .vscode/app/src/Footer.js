import styles from "./Footer.module.css";

const footerItems = [
  {
    title: "Terms",
    link: "/a",
  },
  {
    title: "Privacy",
    link: "/a",
  },
  {
    title: "Security",
    link: "/a",
  },
  {
    title: "Status",
    link: "/a",
  },
  {
    title: "Docs",
    link: "/a",
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
