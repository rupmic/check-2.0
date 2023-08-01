import React, { useState } from "react";
import styles from "./styles/App.module.scss";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Result } from "./components/Result";
import { Announcement } from "./components/Announcement";
import { Footer } from "./components/Footer";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  return (
    <div className={styles.wraper}>
      <Header />
      <Search setData={setData} setValue={setValue} />
      {data ? <Result data={data} value={value} /> : null}
      <Announcement />
      <Footer />
    </div>
  );
};

export { App };
