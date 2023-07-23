import React from "react";
import styles from "./Result.module.scss";
import { ImCheckmark } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { AiOutlineFileSearch } from "react-icons/ai";
import { CgSearchLoading } from "react-icons/cg";

import wykaz_1E from "../assets/wykazy/31_lipca_2019r.xlsx";
import wykaz_2E from "../assets/wykazy/18_grudnia_2019r.xlsx";
import wykaz_3E from "../assets/wykazy/09_luty_2021r.xlsx";
import wykaz_4E from "../assets/wykazy/18_luty_2021r.xlsx";
import wykaz_5E from "../assets/wykazy/01_grudnia_2021r.xlsx";
import wykaz_6E from "../assets/wykazy/21_grudnia_2021r.xlsx";
import wykaz_7E from "../assets/wykazy/17_lipca_2023r.xlsx";

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

  return (
    <>
      <div className={styles.wraper}>
        <div>
          <span className={styles.search_preview}>SZUKANA FRAZA:<span className={styles.search_preview_value}>{props.state.serchedValue}</span>
            {props.state.serchedValue ? (
              <a href={link} target="_blank" rel="noreferrer" title="Wyszukaj w PCsearch">
                <button className={styles.search_preview_btn}>
                  <CgSearchLoading />
                </button>
              </a>
            ) : null}
          </span>
        </div>

        <div className={styles.single_row}>
          <div className={styles.single_row_block_lp}>
            1
          </div>
          <div className={styles.single_row_block_title_and_issn}>
              <div className={styles.first_line}>
                <span className={styles.title}>Tytuł I:</span><span className={`${styles.title_value} ${styles.value}`}>{title}</span>
                <span className={styles.issn}>ISSN:<span className={styles.value}>{issn}</span></span>
                <span className={styles.eissn}>e-ISSN:<span className={styles.value}>{e_issn}</span></span>
              </div>
              <div className={styles.second_line}>
                <span className={styles.title}>Tytuł II:</span><span className={`${styles.title_value} ${styles.value}`}>{title_2}</span>
                <span className={styles.issn}>ISSN:<span className={styles.value}>{issn_2}</span></span>
                <span className={styles.eissn}>e-ISSN:<span className={styles.value}>{e_issn_2}</span></span>
              </div>
          </div>
        </div>

        <p className={styles.present_result_title}>
          Występowanie czasopisma w poszczególnych wykazach:
        </p>

        <div className={styles.present_results_wrap}>

          <div className={styles.result_block}>
            <p className={styles.col_title}>31.VII.2019</p>
            <a
              className={styles.file}
              href={wykaz_1E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <div className={styles.col_value}>
              {list_1 === "empty" ? null : list_1 === true ? (
                <>
                  <span className={styles.good}>
                    <ImCheckmark />
                  </span>
                  <div className={styles.points_and_position}>
                    <span className={styles.points}>
                      {"pkt " + props.state.punkty_1}
                    </span>
                    <span className={styles.position}>{"poz. " + id_1}</span>
                  </div>
                </>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </div>
          </div>

          <div className={styles.result_block}>
            <p className={styles.col_title}>18.XII.2019</p>
            <a
              className={styles.file}
              href={wykaz_2E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <div className={styles.col_value}>
              {list_2 === "empty" ? null : list_2 === true ? (
                <>
                  <span className={styles.good}>
                    <ImCheckmark />
                  </span>
                  <div className={styles.points_and_position}>
                    <span className={styles.points}>
                      {"pkt " + props.state.punkty_2}
                    </span>
                    <span className={styles.position}>{"poz. " + id_2}</span>
                  </div>
                </>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </div>
          </div>

          <div className={styles.result_block}>
            <p className={styles.col_title}>09.II.2021</p>
            <a
              className={styles.file}
              href={wykaz_3E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <div className={styles.col_value}>
              {list_3 === "empty" ? null : list_3 === true ? (
                <>
                  <span className={styles.good}>
                    <ImCheckmark />
                  </span>
                  <div className={styles.points_and_position}>
                    <span className={styles.points}>
                      {"pkt " + props.state.punkty_3}
                    </span>
                    <span className={styles.position}>{"poz. " + id_3}</span>
                  </div>
                </>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </div>
          </div>

          <div className={styles.result_block}>
            <p className={styles.col_title}>18.II.2021</p>
            <a
              className={styles.file}
              href={wykaz_4E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <div className={styles.col_value}>
              {list_4 === "empty" ? null : list_4 === true ? (
                <>
                  <span className={styles.good}>
                    <ImCheckmark />
                  </span>
                  <div className={styles.points_and_position}>
                    <span className={styles.points}>
                      {"pkt " + props.state.punkty_4}
                    </span>
                    <span className={styles.position}>{"poz. " + id_4}</span>
                  </div>
                </>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </div>
          </div>

          <div className={styles.result_block}>
            <p className={styles.col_title}>01.XII.2021</p>
            <a
              className={styles.file}
              href={wykaz_5E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <div className={styles.col_value}>
              {list_5 === "empty" ? null : list_5 === true ? (
                <>
                  <span className={styles.good}>
                    <ImCheckmark />
                  </span>
                  <div className={styles.points_and_position}>
                    <span className={styles.points}>
                      {"pkt " + props.state.punkty_5}
                    </span>
                    <span className={styles.position}>{"poz. " + id_5}</span>
                  </div>
                </>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </div>
          </div>

          <div className={styles.result_block}>
            <p className={styles.col_title}>21.XII.2021</p>
            <a
              className={styles.file}
              href={wykaz_6E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <div className={styles.col_value}>
              {list_6 === "empty" ? null : list_6 === true ? (
                <>
                  <span className={styles.good}>
                    <ImCheckmark />
                  </span>
                  <div className={styles.points_and_position}>
                    <span className={styles.points}>
                      {"pkt " + props.state.punkty_6}
                    </span>
                    <span className={styles.position}>{"poz. " + id_6}</span>
                  </div>
                </>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </div>
          </div>

          <div className={styles.result_block}>
            <p className={styles.col_title}>17.VII.2023</p>
            <a
              className={styles.file}
              href={wykaz_7E}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFileSearch />
            </a>
            <div className={styles.col_value}>
              {list_7 === "empty" ? null : list_7 === true ? (
                <>
                  <span className={styles.good}>
                    <ImCheckmark />
                  </span>
                  <div className={styles.points_and_position}>
                    <span className={styles.points}>
                      {"pkt " + props.state.punkty_7}
                    </span>
                    <span className={styles.position}>{"poz. " + id_7}</span>
                  </div>
                </>
              ) : (
                <span className={styles.bad}>
                  <ImCross />
                </span>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export { Result };
