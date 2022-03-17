const LOCAL_STORAGE_KEY = "app-local-storage";

function getCache() {
  const stringCache = localStorage.getItem("app-local-storage");
  return stringCache && typeof stringCache === "string"
    ? JSON.parse(stringCache)
    : {};
}

const cache = getCache();

export function getFromLocalStorage(key) {
  return cache[key];
}

export function setInLocalStorage(key, value) {
  cache[key] = value;
  const cacheStringfied = JSON.stringify(cache);
  localStorage.setItem(LOCAL_STORAGE_KEY, cacheStringfied);
}

export function isLocalStorageEmpty() {
  return !localStorage.getItem("app-local-storage");
}
