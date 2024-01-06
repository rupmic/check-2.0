import { openDB } from "idb";

async function initDB() {
  const db = await openDB("checkDatabase", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("checkStore")) {
        db.createObjectStore("checkStore");
      }
    },
  });
  return db;
}

async function cacheJSON(db, key, data) {
  const tx = db.transaction("checkStore", "readwrite");
  await tx.store.put({ data, timestamp: new Date().getTime() }, key);
  await tx.done;
}

async function getJSONCache(db, key) {
  const tx = db.transaction("checkStore", "readonly");
  const file = await tx.store.get(key);
  await tx.done;
  return file;
}

async function loadAndCacheJSON(db, jsonURL) {
  const key = "dbData";
  try {
    const cachedData = await getJSONCache(db, key);
    if (cachedData && new Date().getTime() - cachedData.timestamp < 48 * 60 * 60 * 1000) {

      console.info("Loading data from IndexedDB cache");

      return cachedData.data;
    } else {
      const response = await fetch(jsonURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response.headers.get("content-type")?.includes("application/json")) {
        const data = await response.json();
        await cacheJSON(db, key, data);

        console.info("Fetching data from server");

        return data;
      } else {
        throw new Error("The answer is not of JSON type.");
      }
    }
  } catch (error) {
    console.error("Failed to load and cache JSON:", error);
    return null;
  }
}

export { initDB, loadAndCacheJSON };
