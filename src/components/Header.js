import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <h2 className={styles.big_title}>
        CHECK.this.Journal
        <span className={styles.version}>BETA</span>
      </h2>
      <h3 className={styles.small_title}>
        WYSZUKIWARKA CZASOPISM PUNKTOWANYCH
      </h3>
      <h3 className={styles.small_title}>od wykazu z dnia 31 lipca 2019 r.</h3>
    </div>
  );
};

export { Header };
