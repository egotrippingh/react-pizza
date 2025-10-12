import React from "react";
import "./Search.module.scss";

import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.container}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.root}
        type="text"
        placeholder="Поиск пиццы..."
      />

      {searchValue === "" ? (
        <img
          src="/search.png"
          alt="."
          width="20"
          height="20"
          loading="eager"
          className={styles.icon_find}
        />
      ) : (
        <img
          src="/close.png"
          alt="."
          width="25"
          height="25"
          loading="eager"
          className={styles.icon_clear}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
};

export default Search;
