import React from "react";
import styles from "./Result.module.scss";
import { ImCheckmark } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { AiOutlineFileSearch } from "react-icons/ai";

import wykaz_1E from "../assets/wykazy/31_lipca_2019r.xlsx";
import wykaz_2E from "../assets/wykazy/18_grudnia_2019r.xlsx";
import wykaz_3E from "../assets/wykazy/18_luty_2021r.xlsx";
import wykaz_4E from "../assets/wykazy/01_grudnia_2021r.xlsx";
import wykaz_5E from "../assets/wykazy/21_grudnia_2021r.xlsx";

const Result = (props) => {
  const { id, title, issn, e_issn, title_2, issn_2, e_issn_2 } =
    props.state.result;

  const { list_1, list_2, list_3, list_4, list_5 } = props.state;

  return (
    <>
      <div className={styles.wraper}>
        <div>
          <p className={styles.title}>
            Wynik dla:{" "}
            <span className={styles.title_value}>
              {props.state.serchedValue}
            </span>
          </p>
          <p className={styles.small_title}>Znalezione czasopismo:</p>
        </div>
        {/* Tytuł pierwszy */}
        <div className={styles.result_tab}>
          <div className={styles.col}>
            <p className={styles.col_title}>Lp.</p>
            <div className={styles.col_value}><p>{id}</p></div>
          </div>
          <div className={styles.col}>
            <p className={styles.col_title}>Tytuł czasopisma</p>
            <div
              className={`${styles.col_value} ${styles.col_value_title_journal}`}
            >
              <p>{title}</p>
            </div>
          </div>
          <div className={styles.col}>
            <p className={styles.col_title}>ISSN</p>
            <p className={styles.col_value}>{issn}</p>
          </div>
          <div className={styles.col}>
            <p className={styles.col_title}>e-ISSN</p>
            <p className={styles.col_value}>{e_issn}</p>
          </div>

          {/* Tytuł drugi */}
          <div className={`${styles.col} ${styles.col_hide_or_show}`}>
            <p className={styles.col_title}>Lp.</p>
            <p className={styles.col_value}>{id}</p>
          </div>
          <div className={styles.col}>
            <p className={styles.col_title}>Drugi tytuł</p>
            <p
              className={`${styles.col_value} ${styles.col_value_title_journal}`}
            >
              {title_2}
            </p>
          </div>
          <div className={styles.col}>
            <p className={styles.col_title}>ISSN</p>
            <p className={styles.col_value}>{issn_2}</p>
          </div>

          <div className={styles.col}>
            <p className={styles.col_title}>e-ISSN</p>
            <p className={styles.col_value}>{e_issn_2}</p>
          </div>
        </div>

        <p className={styles.small_title}>
          Występowanie czasopisma w poszczególnych wykazach:
        </p>

        <div className={styles.present_result}>
          <div className={styles.col}>
            <a
              className={styles.file}
              href={wykaz_1E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <p className={styles.col_title}>31.VII.2019</p>
            <p className={styles.col_value}>
              {list_1 === "empty" ? null : list_1 === true ? (
                <span className={styles.good}>
                  <ImCheckmark />
                </span>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </p>
          </div>
          <div className={styles.col}>
            <a
              className={styles.file}
              href={wykaz_2E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <p className={styles.col_title}>18.XII.2019</p>
            <p className={styles.col_value}>
              {list_2 === "empty" ? null : list_2 === true ? (
                <span className={styles.good}>
                  <ImCheckmark />
                </span>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </p>
          </div>
          <div className={styles.col}>
            <a
              className={styles.file}
              href={wykaz_3E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <p className={styles.col_title}>18.II.2021</p>
            <p className={styles.col_value}>
              {list_3 === "empty" ? null : list_3 === true ? (
                <span className={styles.good}>
                  <ImCheckmark />
                </span>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </p>
          </div>
          <div className={styles.col}>
            <a
              className={styles.file}
              href={wykaz_4E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <p className={styles.col_title}>01.XII.2021</p>
            <p className={styles.col_value}>
              {list_4 === "empty" ? null : list_4 === true ? (
                <span className={styles.good}>
                  <ImCheckmark />
                </span>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </p>
          </div>
          <div className={styles.col}>
            <a
              className={styles.file}
              href={wykaz_5E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <p className={styles.col_title}>21.XII.2021</p>
            <p className={styles.col_value}>
              {list_5 === "empty" ? null : list_5 === true ? (
                <span className={styles.good}>
                  <ImCheckmark />
                </span>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
