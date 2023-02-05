import React from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  return (
    <>
      <form>
        <label htmlFor="search">
          <input
            className={styles.search}
            id="search"
            type="text"
            maxLength="100"
            placeholder="ISSN lub tytuł czasopisma"
            autoComplete="off"
            value={props.state.inputValue}
            onChange={props.handleChange}
            onPaste={props.handlePaste}
          />
        </label>

        <button type="submit" onClick={props.handleClick}>
          Szukaj
        </button>
      </form>
    </>
  );
};

export default Search;
