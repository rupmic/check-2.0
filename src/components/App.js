import React, { Component } from "react";
import styles from "./App.module.scss";
import Search from "./Search";
import Result from "./Result";

import wykaz_1 from "../assets/wykaz31072019.json";
import wykaz_2 from "../assets/wykaz18122019.json";
import wykaz_3 from "../assets/wykaz18022021.json";
import wykaz_4 from "../assets/wykaz01122021.json";
import wykaz_5 from "../assets/wykaz21122021.json";

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

    punkty_1: "",
    punkty_2: "",
    punkty_3: "",
    punkty_4: "",
    punkty_5: "",
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
    });
  };

  //Pierwotny Kod
  // handleSearch = () => {
  //   const fraza = this.state.inputValue;
  //   let wpis = ""

  //   if (fraza !== "") {
  //     let resultCheck = Object.values(wykaz_1).findIndex(item => item.issn === fraza);
  //     if (resultCheck === -1) { resultCheck = Object.values(wykaz_1).findIndex(item => item.e_issn === fraza); }
  //     if (resultCheck === -1) { resultCheck = Object.values(wykaz_1).findIndex(item => item.issn_2 === fraza); }
  //     if (resultCheck === -1) { resultCheck = Object.values(wykaz_1).findIndex(item => item.e_issn_2 === fraza); }

  //     if (resultCheck !== -1) {
  //       console.log("Wpis:", wpis);
  //       console.log("Wczytano dane z wykazu nr 1");
  //       const result = Object.values(wykaz_1)[resultCheck];
  //       wpis = result;
  //       this.setState({ result, list_1: true });
  //     } else if (resultCheck !== -1) {
  //       this.setState({ list_1: true });
  //     } else {
  //       this.setState({ list_1: false });
  //     }

  //     let resultCheck2 = Object.values(wykaz_2).findIndex(item => item.issn === fraza);
  //     if (resultCheck2 === -1) { resultCheck2 = Object.values(wykaz_2).findIndex(item => item.e_issn === fraza); }
  //     if (resultCheck2 === -1) { resultCheck2 = Object.values(wykaz_2).findIndex(item => item.issn_2 === fraza); }
  //     if (resultCheck2 === -1) { resultCheck2 = Object.values(wykaz_2).findIndex(item => item.e_issn_2 === fraza); }

  //     if (resultCheck2 !== -1 && wpis === "") {
  //       console.log("Result:", wpis);
  //       console.log("Wczytano dane z wykazu nr 2");
  //       const result = Object.values(wykaz_2)[resultCheck2];
  //       wpis = result;
  //       this.setState({ result, list_2: true });
  //     } else if (resultCheck2 !== -1) {
  //       this.setState({ list_2: true });
  //     } else {
  //       this.setState({ list_2: false });
  //     }

  //     let resultCheck3 = Object.values(wykaz_3).findIndex(item => item.issn === fraza);
  //     if (resultCheck3 === -1) { resultCheck3 = Object.values(wykaz_3).findIndex(item => item.e_issn === fraza); }
  //     if (resultCheck3 === -1) { resultCheck3 = Object.values(wykaz_3).findIndex(item => item.issn_2 === fraza); }
  //     if (resultCheck3 === -1) { resultCheck3 = Object.values(wykaz_3).findIndex(item => item.e_issn_2 === fraza); }

  //     if (resultCheck3 !== -1 && wpis === "") {
  //       console.log("Result:", wpis);
  //       console.log("Wczytano dane z wykazu nr 3");
  //       const result = Object.values(wykaz_3)[resultCheck3];
  //       wpis = result;
  //       this.setState({ result, list_3: true });
  //     } else if (resultCheck3 !== -1) {
  //       this.setState({ list_3: true });
  //     } else {
  //       this.setState({ list_3: false });
  //     }

  //     let resultCheck4 = Object.values(wykaz_4).findIndex(item => item.issn === fraza);
  //     if (resultCheck4 === -1) { resultCheck4 = Object.values(wykaz_4).findIndex(item => item.e_issn === fraza); }
  //     if (resultCheck4 === -1) { resultCheck4 = Object.values(wykaz_4).findIndex(item => item.issn_2 === fraza); }
  //     if (resultCheck4 === -1) { resultCheck4 = Object.values(wykaz_5).findIndex(item => item.e_issn_2 === fraza); }

  //     if (resultCheck4 !== -1 && wpis === "") {
  //       console.log("Result:", wpis);
  //       console.log("Wczytano dane z wykazu nr 4");
  //       const result = Object.values(wykaz_4)[resultCheck4];
  //       wpis = result;
  //       this.setState({ result, list_4: true });
  //     } else if (resultCheck4 !== -1) {
  //       this.setState({ list_4: true });
  //     } else {
  //       this.setState({ list_4: false });
  //     }

  //     let resultCheck5 = Object.values(wykaz_5).findIndex(item => item.issn === fraza);
  //     if (resultCheck5 === -1) { resultCheck5 = Object.values(wykaz_5).findIndex(item => item.e_issn === fraza); }
  //     if (resultCheck5 === -1) { resultCheck5 = Object.values(wykaz_5).findIndex(item => item.issn_2 === fraza); }
  //     if (resultCheck5 === -1) { resultCheck5 = Object.values(wykaz_5).findIndex(item => item.e_issn_2 === fraza); }

  //     if (resultCheck5 !== -1 && wpis === "") {
  //       console.log("Result:", wpis);
  //       console.log("Wczytano dane z wykazu nr 5");
  //       const result = Object.values(wykaz_5)[resultCheck5];
  //       wpis = result;
  //       this.setState({ result, list_5: true });
  //     } else if (resultCheck5 !== -1) {
  //       this.setState({ list_5: true });
  //     } else {
  //       this.setState({ list_5: false });
  //     }

  //   } else {
  //     console.log("Input is empty.");
  //   }
  // };

  //Kod po refaktoryzacji
  // handleSearchBetter = () => {
  //   const findIndex = (fraza, wykaz) => {
  //     return Object.values(wykaz).findIndex(
  //       item => item.issn === fraza ||
  //         item.e_issn === fraza ||
  //         item.issn_2 === fraza ||
  //         item.e_issn_2 === fraza
  //     );
  //   };

  //   const fraza = this.state.inputValue;
  //   let wpis = ""

  //   if (fraza !== "") {

  //     const resultCheck1 = findIndex(fraza, wykaz_1);
  //     console.log("resultCheck1", resultCheck1);
  //     if (resultCheck1 !== -1 && wpis === "") {
  //       console.log("Wczytano dane z wykazu nr 1");
  //       wpis = Object.values(wykaz_1)[resultCheck1]
  //       this.setState({ result: wpis, list_1: true });
  //     } else if (resultCheck1 !== -1) this.setState({ list_1: true })
  //     else this.setState({ list_1: false });

  //     const resultCheck2 = findIndex(fraza, wykaz_2);
  //     console.log("resultCheck2", resultCheck2);
  //     if (resultCheck2 !== -1 && wpis === "") {
  //       console.log("Wczytano dane z wykazu nr 2");
  //       wpis = Object.values(wykaz_2)[resultCheck2];
  //       this.setState({ result: wpis, list_2: true });
  //     } else if (resultCheck2 !== -1) this.setState({ list_2: true })
  //     else this.setState({ list_2: false });

  //     const resultCheck3 = findIndex(fraza, wykaz_3);
  //     console.log("resultCheck3", resultCheck3);
  //     if (resultCheck3 !== -1 && wpis === "") {
  //       console.log("Wczytano dane z wykazu nr 3");
  //       wpis = Object.values(wykaz_3)[resultCheck3];
  //       this.setState({ result: wpis, list_3: true });
  //     } else if (resultCheck3 !== -1) this.setState({ list_3: true })
  //     else this.setState({ list_3: false });

  //     const resultCheck4 = findIndex(fraza, wykaz_4);
  //     console.log("resultCheck4", resultCheck4);
  //     if (resultCheck4 !== -1 && wpis === "") {
  //       console.log("Wczytano dane z wykazu nr 4");
  //       wpis = Object.values(wykaz_4)[resultCheck4]
  //       this.setState({ result: wpis, list_4: true });
  //     } else if (resultCheck4 !== -1) this.setState({ list_4: true })
  //     else this.setState({ list_4: false });

  //     const resultCheck5 = findIndex(fraza, wykaz_5);
  //     console.log("resultCheck5", resultCheck5);
  //     if (resultCheck5 !== -1 && wpis === "") {
  //       console.log("Wczytano dane z wykazu nr 5");
  //       wpis = Object.values(wykaz_5)[resultCheck5]
  //       this.setState({ result: wpis, list_5: true });
  //     } else if (resultCheck5 !== -1) this.setState({ list_5: true })
  //     else this.setState({ list_5: false });

  //   } else {
  //     console.log("Input is empty!");
  //   }
  // }

  //Kod po refaktoryzacji 2
  //=================================
  // findIndex = (fraza, wykaz) => {
  //   return Object.values(wykaz).findIndex(
  //     item => item.issn === fraza ||
  //       item.e_issn === fraza ||
  //       item.issn_2 === fraza ||
  //       item.e_issn_2 === fraza
  //   );
  // };

  // checkLists = (fraza) => {
  //   const lists = [wykaz_1, wykaz_2, wykaz_3, wykaz_4, wykaz_5];
  //   let wpis = '';

  //   for (let i = 0; i < lists.length; i++) {
  //     const resultCheck = this.findIndex(fraza, lists[i]);
  //     if (resultCheck !== -1 && wpis === '') {
  //       console.log(`Wczytano dane z wykazu nr ${i + 1}`);
  //       wpis = Object.values(lists[i])[resultCheck];
  //       this.setState({ result: wpis, [`list_${i + 1}`]: true });
  //     } else if (resultCheck !== -1) {
  //       this.setState({ [`list_${i + 1}`]: true });
  //     } else {
  //       this.setState({ [`list_${i + 1}`]: false });
  //     }
  //   }
  // };

  // handleSearch = () => {
  //   const fraza = this.state.inputValue;
  //   if (fraza !== '') {
  //     this.checkLists(fraza);
  //   } else {
  //     console.log('Input is empty!');
  //   }
  // };
  //==================================

  //Kod końcowy
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

    const wykazy = [wykaz_1, wykaz_2, wykaz_3, wykaz_4, wykaz_5];
    const listNumbers = [1, 2, 3, 4, 5];
    const fraza = this.state.inputValue;
    let wpis = "";

    if (fraza !== "") {
      for (let i = 0; i < wykazy.length; i++) {
        const resultCheck = findIndex(fraza, wykazy[i]);
        if (resultCheck !== -1 && wpis === "") {
          console.log(`Data taken from list no. ${listNumbers[i]}`);
          wpis = Object.values(wykazy[i])[resultCheck];
          this.setState({ result: wpis, [`list_${listNumbers[i]}`]: true });
        } else if (resultCheck !== -1) {
          this.setState({ [`list_${listNumbers[i]}`]: true });
        } else {
          this.setState({ [`list_${listNumbers[i]}`]: false });
        }
      }
    } else {
      console.log("Input is empty!");
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
            handlePasteBtn={this.handlePasteBtn}
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

export default App;
