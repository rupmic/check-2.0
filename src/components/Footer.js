import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_wrap}>
        <p className={styles.footer_info}>
            Wyszukiwarka punktowanych czasopism naukowych [2010-2019]:{" "}
            <a
              href="http://punktacjaczasopism.pl/"
              target="_blank"
              rel="noreferrer"
            >
              kliknij tutaj
            </a>
            .
        </p>
        <p className={styles.footer_update}>Ostatnia aktualizacja: 23 lipca 2023 r.</p>
    </div>
  );
};

export { Footer };