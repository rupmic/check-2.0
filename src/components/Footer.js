import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_wrap}>
      <p className={styles.footer_info}>
        Wyszukiwarka punktowanych czasopism naukowych [2010-2019]:{" "}
        <a
          href="https://punktacjaczasopism.pl/"
          target="_blank"
          rel="noreferrer"
          title="PCsearch"
        >
          PCsearch
        </a>
        .
      </p>
      <p className={styles.footer_update}>
        CHECK.this.Journal - aktualizacja: 16 listopada 2023 r.
      </p>
    </div>
  );
};

export { Footer };
