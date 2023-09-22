import styles from "./Tab.module.css";
import cx from "clsx";
import { useState } from "react";

const TabList = ["Code", "Issues", "Pull Request"];

export default function Tabs() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <ul className={styles.tabList}>
      {TabList.map((tab, idx) => (
        <Tab
          key={`${idx}`}
          selected={idx === selectedTabIndex}
          title={tab}
          onclick={() => setSelectedTabIndex(idx)}
        />
      ))}
    </ul>
  );
}

function Tab({ title, selected, onclick, number }) {
  return (
    <li>
      <button
        onClick={onclick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  );
}
