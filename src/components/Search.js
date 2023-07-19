import React from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";

const Search = (props) => {
  return (
    <>
      <form className={styles.search_bar}>
        <label htmlFor="search">
          <BiSearch className={styles.search_icon}/>
          <input
            className={styles.search}
            id="search"
            type="text"
            maxLength="100"
            placeholder="issn, tytuł czasopisma"
            autoComplete="off"
            value={props.state.inputValue}
            onChange={props.handleChange}
            onPaste={props.handlePaste}
          />
        </label>

        <button className={styles.submit_btn} type="submit" onClick={props.handleClick}>
          <HiArrowRight/>
        </button>
      </form>
    </>
  );
};

export { Search };
