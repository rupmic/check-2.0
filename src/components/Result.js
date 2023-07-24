import React from "react";
import styles from "./Result.module.scss";
import { CgSearchLoading } from "react-icons/cg";

import wykaz_1E from "../assets/wykazy/31_lipca_2019r.xlsx";
import wykaz_2E from "../assets/wykazy/18_grudnia_2019r.xlsx";
import wykaz_3E from "../assets/wykazy/09_luty_2021r.xlsx";
import wykaz_4E from "../assets/wykazy/18_luty_2021r.xlsx";
import wykaz_5E from "../assets/wykazy/01_grudnia_2021r.xlsx";
import wykaz_6E from "../assets/wykazy/21_grudnia_2021r.xlsx";
import wykaz_7E from "../assets/wykazy/17_lipca_2023r.xlsx";
import { ListElement } from "./ListElement";

const Result = (props) => {
  const { title, issn, e_issn, title_2, issn_2, e_issn_2 } = props.state.result;

  const {
    list_1,
    list_2,
    list_3,
    list_4,
    list_5,
    list_6,
    list_7,
    id_1,
    id_2,
    id_3,
    id_4,
    id_5,
    id_6,
    id_7,
    punkty_1,
    punkty_2,
    punkty_3,
    punkty_4,
    punkty_5,
    punkty_6,
    punkty_7,
  } = props.state;

  let containsLetter = false;
  let link = "";

  const regex = /[a-zA-Z]/;
  if (regex.test(props.state.serchedValue)) {
    containsLetter = true;
  }

  if (containsLetter === false) {
    link = `http://punktacjaczasopism.pl/rez.php?fromgbl=1&search_mode=issn&tekst=${props.state.serchedValue}`;
  } else if (containsLetter === true) {
    link = `http://punktacjaczasopism.pl/rez.php?fromgbl=1&search_mode=fraza&tekst=${props.state.serchedValue}`;
  }

  const releaseDate = [
    {
      id: 1,
      date: "31.VII.2019",
      list: list_1,
      points: punkty_1,
      position: id_1,
      href: wykaz_1E,
    },
    {
      id: 2,
      date: "18.XII.2019",
      list: list_2,
      points: punkty_2,
      position: id_2,
      href: wykaz_2E,
    },
    {
      id: 3,
      date: "09.II.2021",
      list: list_3,
      points: punkty_3,
      position: id_3,
      href: wykaz_3E,
    },
    {
      id: 4,
      date: "18.II.2021",
      list: list_4,
      points: punkty_4,
      position: id_4,
      href: wykaz_4E,
    },
    {
      id: 5,
      date: "01.XII.2021",
      list: list_5,
      points: punkty_5,
      position: id_5,
      href: wykaz_5E,
    },
    {
      id: 6,
      date: "21.XII.2021",
      list: list_6,
      points: punkty_6,
      position: id_6,
      href: wykaz_6E,
    },
    {
      id: 7,
      date: "17.VII.2023",
      list: list_7,
      points: punkty_7,
      position: id_7,
      href: wykaz_7E,
    },
  ];

  const resultBlocks = releaseDate.map((item) => {
    return (
      <ListElement
        key={item.id}
        date={item.date}
        list={item.list}
        points={item.points}
        position={item.position}
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
            <span className={styles.search_preview_value}>
              {props.state.serchedValue}
            </span>
            {props.state.serchedValue ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                title="Wyszukaj w PCsearch"
              >
                <button className={styles.search_preview_btn}>
                  <CgSearchLoading />
                </button>
              </a>
            ) : null}
          </span>
        </div>

        <div className={styles.single_row}>
          <div className={styles.single_row_block_lp}>1</div>
          <div className={styles.single_row_block_title_and_issn}>
            <div className={styles.first_line}>
              <span className={styles.title}>Tytuł I:</span>
              <span className={`${styles.title_value} ${styles.value}`}>
                {title}
              </span>
              <span className={styles.issn}>
                ISSN:<span className={styles.value}>{issn}</span>
              </span>
              <span className={styles.eissn}>
                e-ISSN:<span className={styles.value}>{e_issn}</span>
              </span>
            </div>
            <div className={styles.second_line}>
              <span className={styles.title}>Tytuł II:</span>
              <span className={`${styles.title_value} ${styles.value}`}>
                {title_2}
              </span>
              <span className={styles.issn}>
                ISSN:<span className={styles.value}>{issn_2}</span>
              </span>
              <span className={styles.eissn}>
                e-ISSN:<span className={styles.value}>{e_issn_2}</span>
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
