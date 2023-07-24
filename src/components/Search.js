import React from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";

const Search = ({
  state: { inputValue },
  handleChange,
  handlePaste,
  handleClick,
}) => {
  return (
    <>
      <form className={styles.search_bar}>
        <label htmlFor="search">
          <BiSearch className={styles.search_icon} />
          <input
            className={styles.search}
            id="search"
            type="text"
            maxLength="100"
            placeholder="issn, tytuł czasopisma"
            autoComplete="off"
            value={inputValue}
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
    </>
  );
};

export { Search };
