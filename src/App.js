import React, { useState, useEffect } from "react";
import styles from "./styles/App.module.scss";

import { initDB, loadAndCacheJSON } from "./shared/indexedDBHelpers";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Result } from "./components/Result";
import { Announcement } from "./components/Announcement";
import { Footer } from "./components/Footer";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const jsonURL =
    process.env.NODE_ENV === "production"
      ? "https://rupmic.github.io/check-2.0/mini_db_9.json"
      : "check-2.0/mini_db_9.json";
  
  useEffect(() => {
    async function fetchData() {
      const db = await initDB();
      const jsonData = await loadAndCacheJSON(db, jsonURL);
      setJsonData(jsonData);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wraper}>
      <Header />
      <Search setData={setData} setValue={setValue} jsonData={jsonData} />
      {data ? <Result data={data} value={value} jsonData={jsonData} /> : null}
      <Announcement />
      <Footer />
    </div>
  );
};

export { App };
