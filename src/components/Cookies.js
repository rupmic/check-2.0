import React, { useState } from "react";
import styles from "../styles/Cookies.module.scss";
import { CookiesDetails } from "./CookiesDetails";

import { PiCookieDuotone } from "react-icons/pi";

const Cookies = ({ handleAcceptConsent }) => {
  const [showCookieDetails, setShowCookieDetails] = useState(false);

  const handleClickShowMoreDetails = () => {
    setShowCookieDetails(!showCookieDetails);
  };

  return (
    <>
      <div className={styles.cookies_wrap}>
        <div className={styles.cookies_icon_and_title}>
          <p className={styles.cookies_icon}>
            <PiCookieDuotone />
          </p>
          <p className={styles.cookies_title}>Ciasteczka!</p>
        </div>
        <p className={styles.cookies_paragraph}>
          Nasza strona internetowa korzysta z plików cookie w celu poprawy
          doświadczeń użytkowników. Pliki cookie to małe pliki tekstowe
          zapisywane na urządzeniu użytkownika, które pomagają dostosować treści
          i funkcje strony do indywidualnych potrzeb. Korzystanie ze strony
          oznacza zgodę na zapisywanie plików cookie na urządzeniu użytkownika,
          zależnie od konfiguracji przeglądarki.
        </p>
        <button
          className={styles.cookies_btn_more}
          onClick={handleClickShowMoreDetails}
        >
          Szczegóły polityki plików cookie.
        </button>
        <button
          className={styles.cookies_btn_accept}
          onClick={handleAcceptConsent}
        >
          Akceptuję
        </button>
      </div>
      {showCookieDetails ? (
        <CookiesDetails handleAcceptConsent={handleAcceptConsent} />
      ) : null}
    </>
  );
};

export { Cookies };
