import React from "react";
import styles from "../styles/Result.module.scss";

import list_31_07_2019 from "../assets/wykazyXLSX/31_lipca_2019r.xlsx";
import list_18_12_2019 from "../assets/wykazyXLSX/18_grudnia_2019r.xlsx";
import list_09_02_2021 from "../assets/wykazyXLSX/09_luty_2021r.xlsx";
import list_18_02_2021 from "../assets/wykazyXLSX/18_luty_2021r.xlsx";
import list_01_12_2021 from "../assets/wykazyXLSX/01_grudnia_2021r.xlsx";
import list_21_12_2021 from "../assets/wykazyXLSX/21_grudnia_2021r.xlsx";
import list_17_07_2023 from "../assets/wykazyXLSX/17_lipca_2023r.xlsx";
import list_09_11_2023 from "../assets/wykazyXLSX/09_listopada_2023r.xlsx";

import { CgSearchLoading } from "react-icons/cg";

import { ListElement } from "./ListElement";

const Result = ({ data, value }) => {
  let containsLetter = false;
  let link = "";

  const regex = /[a-zA-Z]/;
  if (regex.test(value)) {
    containsLetter = true;
  }

  if (containsLetter === false) {
    link = `http://punktacjaczasopism.pl/rez.php?fromgbl=1&search_mode=issn&tekst=${value}`;
  } else if (containsLetter === true) {
    link = `http://punktacjaczasopism.pl/rez.php?fromgbl=1&search_mode=fraza&tekst=${value}`;
  }

  const releaseDate = [
    {
      id: 1,
      date: "31-07-2019",
      points: null,
      href: list_31_07_2019,
    },
    {
      id: 2,
      date: "18-12-2019",
      points: null,
      href: list_18_12_2019,
    },
    {
      id: 3,
      date: "09-02-2021",
      points: null,
      href: list_09_02_2021,
    },
    {
      id: 4,
      date: "18-02-2021",
      points: null,
      href: list_18_02_2021,
    },
    {
      id: 5,
      date: "01-12-2021",
      points: null,
      href: list_01_12_2021,
    },
    {
      id: 6,
      date: "21-12-2021",
      points: null,
      href: list_21_12_2021,
    },
    {
      id: 7,
      date: "17-07-2023",
      points: null,
      href: list_17_07_2023,
    },
    {
      id: 8,
      date: "09-11-2023",
      points: null,
      href: list_09_11_2023,
    },
  ];
  // Po dodaniu nowego wykazu czasopism punktowanych trzeba zmienić też: 
  // #1 "numbers of columns" w pliku '_variables.scss' oraz
  // #2 dodać $weight w 'Result.module.scss' w klasie '.present_results_wrap'

  const getPointsForDate = (date) => {
    const entry = data.update.find((item) => item.update_date === date);
    return entry ? entry.punkty : null;
  };

  releaseDate.forEach((item) => {
    const points = getPointsForDate(item.date);
    item.points = points;
  });

  const resultBlocks = releaseDate.map((item) => {
    return (
      <ListElement
        key={item.id}
        date={item.date}
        points={item.points}
        href={item.href}
      />
    );
  });

  return (
    <>
      <div className={styles.wraper}>
        <div>
          <span className={styles.search_preview}>
            SZUKANA FRAZA:
            <span className={styles.search_preview_value}>{value}</span>
            {value ? (
              <a
                className={styles.pcsearch_link}
                href={link}
                target="_blank"
                rel="noreferrer"
                title="Wyszukaj w PCsearch"
              >
                <button className={styles.pcsearch_button}>
                  <CgSearchLoading />
                  <span className={styles.pcsearch_text}>PCsearch</span>
                </button>
              </a>
            ) : null}
          </span>
        </div>

        <div className={styles.single_row}>
          <div className={styles.single_row_block_title_and_issn}>
            <div className={styles.first_line}>
              <span className={styles.title}>Tytuł I:</span>
              <span className={`${styles.title_value} ${styles.value}`}>
                {data.title}
              </span>
              <span className={styles.issn}>
                ISSN:<span className={styles.value}>{data.issn}</span>
              </span>
              <span className={styles.eissn}>
                e-ISSN:<span className={styles.value}>{data.e_issn}</span>
              </span>
            </div>
            <div className={styles.second_line}>
              <span className={styles.title}>Tytuł II:</span>
              <span className={`${styles.title_value} ${styles.value}`}>
                {data.title_2}
              </span>
              <span className={styles.issn}>
                ISSN:<span className={styles.value}>{data.issn_2}</span>
              </span>
              <span className={styles.eissn}>
                e-ISSN:<span className={styles.value}>{data.e_issn_2}</span>
              </span>
            </div>
          </div>
        </div>

        <p className={styles.present_result_title}>
          Występowanie czasopisma w poszczególnych wykazach:
        </p>

        <div className={styles.present_results_wrap}>{resultBlocks}</div>
      </div>
    </>
  );
};

export { Result };
