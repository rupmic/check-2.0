import React from "react";
import styles from "../styles/Announcement.module.scss";

const Announcement = () => {
  return (
    <div className={styles.announcement_wrapper}>
      <p className={styles.title}>
        Nowa wersja modułu wyszukiwania czasopism. Zapraszamy do testowania!
      </p>
      <p className={styles.p_block}>
        Zaktualizowaliśmy moduł wyszukiwania czasopism. Prosimy o aktywne
        testowanie i zgłaszanie uwag, abyśmy mogli poprawić ewentualne błędy.
      </p>
      <p className={styles.p_block}>Dziękujemy za zaufanie!</p>
      <p className={styles.p_block}>
        Jednoosobowy zespół techniczny<span className={styles.icon}>:)</span>
      </p>
    </div>
  );
};

export { Announcement };
