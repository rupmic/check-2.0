import React from "react";
import styles from "../styles/CookiesDetails.module.scss";

const CookiesDetails = ({ handleAcceptConsent }) => {
  return (
    <div className={styles.cookies_wrap}>
      <div className={styles.cookies_detail_modal}>
        <p className={styles.cookies_main_title}>Polityka plików „cookies”.</p>
        <p className={styles.cookies_title}>Wstęp</p>
        <p className={styles.cookies_paragraph}>
          Niniejsza polityka dotyczy użycia plików cookie przez
          www.github.com/rupmic/check-2.0. Przy użyciu plików cookie dążymy do
          poprawy doświadczenia naszych użytkowników. Niniejsza polityka
          wyjaśnia, jakie pliki cookie używamy, do czego służą i jak nimi
          zarządzać.
        </p>
        <p className={styles.cookies_title}>Czym są pliki cookies?</p>
        <p className={styles.cookies_paragraph}>
          Pliki cookies to dane informatyczne, głównie pliki tekstowe,
          przechowywane w urządzeniach końcowych użytkowników, służące do
          korzystania ze stron internetowych. Umożliwiają rozpoznanie urządzenia
          użytkownika i dostosowanie wyświetlanej strony internetowej do jego
          indywidualnych preferencji. Zazwyczaj zawierają nazwę strony
          internetowej, z której pochodzą, czas przechowywania na urządzeniu
          końcowym oraz unikalny numer.
        </p>
        <p className={styles.cookies_title}>Bezpieczeństwo</p>
        <p className={styles.cookies_paragraph}>
          Dbamy o to, by pliki cookie nie służyły do identyfikacji użytkowników,
          a jedynie do poprawy ich doświadczenia z korzystania z naszej
          aplikacji. Wszelkie dane są bezpieczne i stosujemy odpowiednie środki
          ochrony.
        </p>
        <p className={styles.cookies_title}>Do czego używamy plików cookies?</p>
        <p className={styles.cookies_paragraph}>
          Pliki cookies stosujemy do dostosowania zawartości stron internetowych
          do preferencji użytkowników oraz optymalizacji korzystania ze stron.
          Służą również do tworzenia anonimowych, zagregowanych statystyk,
          pomagających zrozumieć, jak użytkownicy korzystają ze stron, co
          umożliwia ich ulepszanie. Pliki te nie służą do identyfikacji
          użytkowników.
        </p>
        <p className={styles.cookies_title}>Rodzaje używanych plików cookies</p>
        <span className={styles.cookies_paragraph}>
          <ul>
            <li>
              Ciasteczka sesji: Te pliki cookie są tymczasowe i pozostają na
              urządzeniu użytkownika do momentu zamknięcia przeglądarki. Używane
              są one do zarządzania sesją użytkownika.
            </li>
            <li>
              Ciasteczka trwałe: Są one przechowywane na urządzeniu użytkownika
              przez określony czas lub do momentu ich usunięcia. Wykorzystujemy
              je do zapamiętywania Twoich ustawień i preferencji na naszej
              stronie, co pozwala na szybsze i bardziej wygodne korzystanie z
              naszych usług przy kolejnych wizytach.
            </li>
          </ul>
        </span>
        <p className={styles.cookies_title}>Usuwanie plików cookies</p>
        <p className={styles.cookies_paragraph}>
          Ustawienia przeglądarek internetowych domyślnie pozwalają na
          umieszczanie plików cookies. Te ustawienia można zmienić, aby blokować
          automatyczną obsługę cookies lub informować o ich przesłaniu na
          urządzenie. Szczegółowe informacje o obsłudze plików cookies dostępne
          są w ustawieniach przeglądarki. Możesz zablokować lub usunąć pliki
          cookie, jednakże może to wpłynąć na niektóre funkcjonalności naszej
          aplikacji.
        </p>
        <p className={styles.cookies_title}>
          Więcej informacji o plikach cookies
        </p>
        <p className={styles.cookies_paragraph}>
          <a
            href="https://wszystkoociasteczkach.pl"
            target="_blank"
            rel="noreferrer"
          >
            www.wszystkoociasteczkach.pl
          </a>
        </p>
        <p className={styles.cookies_title}>Jak zarządzać plikami cookies?</p>
        <span className={styles.cookies_paragraph}>
          Dla wybranych przeglądarek:
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647"
                target="_blank"
                rel="noreferrer"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/pl/kb/ciasteczka"
                target="_blank"
                rel="noreferrer"
              >
                Firefox
              </a>
            </li>

            <li>
              <a
                href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/kb/HT1677?viewlocale=pl_PL&locale=pl_PL"
                target="_blank"
                rel="noreferrer"
              >
                Safari
              </a>
            </li>
          </ul>
        </span>
        <div className={styles.cookies_btns_wrapper}>
          <a
            className={styles.cookies_btn_declaim}
            href="https://www.google.com"
          >
            Wychodzę
          </a>
          <button
            className={styles.cookies_btn_accept}
            onClick={handleAcceptConsent}
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
};

export { CookiesDetails };
