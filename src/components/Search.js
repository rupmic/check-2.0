import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Search.module.scss";
import { BiSearch } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";
import { GiSadCrab } from "react-icons/gi";

import { ResultsList } from "./ResultsList";

const Search = ({ setData, setValue, jsonData }) => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [notFound, setNotFound] = useState("");
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("");

  const resultsListRef = useRef(null);

  const handleClickOutsideResultList = (e) => {
    if (
      resultsListRef.current &&
      !resultsListRef.current.contains(e.target)
    ) {
      setResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideResultList);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideResultList);
    };
  }, []);

  const handleChange = (e) => {
    const searchBarValue = e.target.value;
    setSearchBarValue(searchBarValue);
    setResults([]);
    setNotFound("");
    setInfo("");
  };

  const handlePaste = (e) => {
    const copyText = e.clipboardData.getData("Text");
    const better = copyText.replace(/[^0-9-a-zA-Z ]+/g, "");
    setSearchBarValue(better);
    setResults([]);
    setInfo("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInfo("");
    handleSearch();
  };

  const handleSearch = () => {
    const searchTerm = searchBarValue.trim().toLowerCase();
    if (searchTerm === "") {
      setResults([]);
      return;
    } else {
      setValue(searchBarValue);
    }

    const filteredData = jsonData.filter((item) => {
      const titleMatches = item.title?.toLowerCase().includes(searchTerm);
      const issnMatches = item.issn?.toLowerCase().includes(searchTerm);
      const eIssnMatches = item.e_issn?.toLowerCase().includes(searchTerm);
      const title2Matches = item.title_2?.toLowerCase().includes(searchTerm);
      const issn2Matches = item.issn_2?.toLowerCase().includes(searchTerm);
      const eIssn2Matches = item.e_issn_2?.toLowerCase().includes(searchTerm);

      return (
        titleMatches ||
        issnMatches ||
        eIssnMatches ||
        title2Matches ||
        issn2Matches ||
        eIssn2Matches
      );
    });

    if (!filteredData.length) {
      setNotFound(true);
      setData("");
      return;
    }

    if (filteredData.length > 50) {
      const newData = filteredData.slice(0, 50);
      setResults(newData);
      setInfo("Zbyt wiele wyników. Listę ograniczono do 50 pozycji.");
      return;
    }

    if (filteredData.length === 1) {
      const singleJournalAsObject = filteredData[0];
      setData(singleJournalAsObject);
    } else {
      setResults(filteredData);
    }
  };

  const handleSelect = (id) => {
    const selectedJournal = results.find((result) => result.id === id);
    setData(selectedJournal);
    setValue(searchBarValue);
  };

  return (
    <div className={styles.search_wrapper}>
      <form className={styles.search_bar}>
        <label htmlFor="search">
          <BiSearch className={styles.search_icon} />
          <input
            className={styles.search}
            id="search"
            type="text"
            maxLength="100"
            placeholder="issn, tytuł czasopisma"
            title="issn, tytuł czasopisma"
            autoComplete="off"
            autoFocus
            value={searchBarValue}
            onChange={handleChange}
            onPaste={handlePaste}
          />
        </label>

        <button
          className={styles.submit_btn}
          type="submit"
          onClick={handleClick}
        >
          <HiArrowRight />
        </button>
      </form>
      {notFound ? (
        <span className={styles.not_found}>
          <GiSadCrab />
          <span className={styles.description}>
            Podana fraza "<span className={styles.fraze}>{searchBarValue}</span>
            " nie została odnaleziona.
          </span>
        </span>
      ) : null}
      {results && results.length > 1 ? (
        <div ref={resultsListRef}>
          <ResultsList
            results={results}
            setResults={setResults}
            setSearchBarValue={setSearchBarValue}
            handleSelect={handleSelect}
            info={info}
          />
        </div>
      ) : null}
    </div>
  );
};

export { Search };
