import React, { useState } from "react";
import styles from "../styles/Announcement.module.scss";

import Cookies from "universal-cookie";

import { BiShow, BiHide } from "react-icons/bi";

const Announcement = () => {
  const [hide, setHide] = useState(true);

  const toggleVisability = () => {
    setHide(!hide);
  };

  return (
    <div
      className={`${styles.announcement_wrapper} ${hide ? styles.hide : null}`}
    >
      <p className={styles.title}>
        Nowa wersja modułu wyszukiwania czasopism. Zapraszamy do testowania!
      </p>
      <p className={styles.p_block}>
        Zaktualizowaliśmy moduł wyszukiwania czasopism. Prosimy o aktywne
        testowanie i zgłaszanie uwag, abyśmy mogli poprawić ewentualne błędy.
      </p>
      <p className={styles.p_block}>Dziękujemy za zaufanie!</p>
      <p className={styles.p_block}>
        Jednoosobowy zespół techniczny
        <span className={styles.icon_smile}>:)</span>
      </p>
      <button className={styles.icon_close} onClick={() => toggleVisability()}>
        {hide ? <BiShow /> : <BiHide />}
      </button>
    </div>
  );
};

export { Announcement };
