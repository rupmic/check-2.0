import React from "react";
import styles from "../styles/ResultsList.module.scss";

import { HiOutlineInformationCircle } from "react-icons/hi";

const ResultsList = ({
  results,
  setResults,
  setSearchBarValue,
  handleSelect,
  info,
}) => {
  const resultsList = results.map((result, index) => {
    return (
      <li
        className={styles.results_item}
        key={result.id}
        onClick={() => {
          handleSelect(result.id);
          setSearchBarValue("");
          setResults("");
        }}
      >
        {index + 1 + "."}
        {result.title ? (
          <>
            <span className={styles.result_item_title}>{result.title}</span>
            {result.issn ? (
              <span className={styles.result_item_issn}>
                ISSN:
                <span className={styles.result_item_value}>{result.issn}</span>
              </span>
            ) : null}
            {result.e_issn ? (
              <span className={styles.result_item_eissn}>
                e-ISSN:
                <span className={styles.result_item_value}>
                  {result.e_issn}
                </span>
              </span>
            ) : null}
          </>
        ) : (
          <>
            <span className={styles.result_item_title}>{result.title_2}</span>
            {result.issn ? (
              <span className={styles.result_item_issn}>
                ISSN:
                <span className={styles.result_item_value}>
                  {result.issn_2}
                </span>
              </span>
            ) : null}
            {result.e_issn ? (
              <span className={styles.result_item_eissn}>
                e-ISSN:
                <span className={styles.result_item_value}>
                  {result.e_issn_2}
                </span>
              </span>
            ) : null}
          </>
        )}
      </li>
    );
  });

  return (
    <div className={styles.results_list_wrapper}>
      <ul className={styles.results_items}>{resultsList}</ul>
      {info ? (
        <p className={styles.information}>
          <span className={styles.information_icon}>
            <HiOutlineInformationCircle />
          </span>
          {info}
        </p>
      ) : null}
    </div>
  );
};

export { ResultsList };
