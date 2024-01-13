import React, { useState, useEffect } from "react";
import styles from "./styles/App.module.scss";

import TagManager from "react-gtm-module";

import { initDB, loadAndCacheJSON } from "./shared/indexedDBHelpers";
import {
  setCookie,
  getCookieValue,
  CONSENT_ACCEPTED,
  EIGHT_HOURS,
} from "./shared/cookiesLogic";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Result } from "./components/Result";
import { Announcement } from "./components/Announcement";
import { Footer } from "./components/Footer";
import { Cookies } from "./components/Cookies";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [accepted, setAccepted] = useState(getCookieValue(CONSENT_ACCEPTED));
  const [gtmInitialized, setGtmInitialized] = useState(false);

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

    if (accepted && !gtmInitialized) {
      if (process.env.NODE_ENV === "production") {
        const tagManagerArgs = {
          gtmId: "GTM-P43QFPZX",
        };

        TagManager.initialize(tagManagerArgs);
        setGtmInitialized(true);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accepted]);

  const handleAcceptConsent = () => {
    setCookie(CONSENT_ACCEPTED, true, EIGHT_HOURS);
    setAccepted(true);
  };

  return (
    <>
      <div className={styles.wraper}>
        <Header />
        <Search setData={setData} setValue={setValue} jsonData={jsonData} />
        {data ? <Result data={data} value={value} jsonData={jsonData} /> : null}
        <Announcement />
        <Footer />
      </div>
      {!accepted ? <Cookies handleAcceptConsent={handleAcceptConsent} /> : null}
    </>
  );
};

export { App };
