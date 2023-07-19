import React, { Component } from "react";
import styles from "./App.module.scss";
import { Search } from "./components/Search";
import { Result } from "./components/Result";

import wykaz_1 from "./assets/wykaz31072019.json";
import wykaz_2 from "./assets/wykaz18122019.json";
import wykaz_3 from "./assets/wykaz18022021.json";
import wykaz_4 from "./assets/wykaz01122021.json";
import wykaz_5 from "./assets/wykaz21122021.json";
import wykaz_6 from "./assets/wykaz17072023.json";

class App extends Component {
  state = {
    inputValue: "",
    serchedValue: "",
    result: "",

    list_1: "empty",
    list_2: "empty",
    list_3: "empty",
    list_4: "empty",
    list_5: "empty",
    list_6: "empty",

    id_1: "",
    id_2: "",
    id_3: "",
    id_4: "",
    id_5: "",
    id_6: "",

    punkty_1: "",
    punkty_2: "",
    punkty_3: "",
    punkty_4: "",
    punkty_5: "",
    punkty_6: "",
  };

  handleClick = (e) => {
    e.preventDefault();
    this.handleSearch();
    this.setState({
      serchedValue: this.state.inputValue,
      inputValue: "",
    });
  };

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputValue,
      result: "",
      list_1: "empty",
      list_2: "empty",
      list_3: "empty",
      list_4: "empty",
      list_5: "empty",
      list_6: "empty",
    });
  };

  handlePaste = (e) => {
    const copyText = e.clipboardData.getData("Text");
    const better = copyText.replace(/[^0-9-a-zA-Z ]+/g, "");
    this.setState({
      inputValue: better,
      result: "",
      list_1: "empty",
      list_2: "empty",
      list_3: "empty",
      list_4: "empty",
      list_5: "empty",
      list_6: "empty",
    });
  };

  handleSearch = () => {
    const findIndex = (fraza, wykaz) => {
      return Object.values(wykaz).findIndex(
        (item) =>
          new RegExp(fraza, "i").test(item.issn) ||
          new RegExp(fraza, "i").test(item.e_issn) ||
          new RegExp(fraza, "i").test(item.issn_2) ||
          new RegExp(fraza, "i").test(item.e_issn_2) ||
          new RegExp(fraza, "i").test(item.title) ||
          new RegExp(fraza, "i").test(item.title_2)
      );
    };

    const wykazy = [wykaz_1, wykaz_2, wykaz_3, wykaz_4, wykaz_5, wykaz_6];
    const listNumbers = [1, 2, 3, 4, 5, 6];
    const fraza = this.state.inputValue;
    let wpis = "";

    if (fraza !== "") {
      for (let i = 0; i < wykazy.length; i++) {
        const resultCheck = findIndex(fraza, wykazy[i]);
        if (resultCheck !== -1) {
          // console.log(`Data taken from list no. ${listNumbers[i]}`);
          wpis = Object.values(wykazy[i])[resultCheck];
          this.setState({
            result: wpis,
            [`list_${listNumbers[i]}`]: true,
            [`id_${listNumbers[i]}`]: wpis.id,
            [`punkty_${listNumbers[i]}`]: wpis.punkty,
          });
        } else {
          this.setState({ [`list_${listNumbers[i]}`]: false });
        }
      }
    } else {
      console.info("Input is empty!");
    }
  };

  render() {
    return (
      <>
        <div className={styles.wraper}>
          <h2>CHECK.this.Journal</h2>
          <h3>WYSZUKIWARKA CZASOPISM PUNKTOWANYCH</h3>
          <h3>od wykazu z dnia 31-07-2019</h3>
          <Search
            state={this.state}
            handleChange={this.handleChange}
            handlePaste={this.handlePaste}
            handleClick={this.handleClick}
          />
          {this.state.result === "undefined" ? null : (
            <Result state={this.state} />
          )}
          <p className={styles.info}>
            Wyszukiwarka punktowanych czasopism naukowych [2010-2019]:{" "}
            <a
              href="http://punktacjaczasopism.pl/"
              target="_blank"
              rel="noreferrer"
            >
              kliknij tutaj
            </a>
          </p>
        </div>
      </>
    );
  }
}

export { App };
