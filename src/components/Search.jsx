import React from "react";
import "/src/styles/Search.module.scss";
import { SearchContext } from "src/app/App";
import styles from "/src/styles/Search.module.scss";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      console.log("Debounced search:", str);
      setSearchValue(str);
    }, 500),
    [setSearchValue]
  );

  React.useEffect(() => {
    return () => {
      updateSearchValue.cancel();
    };
  }, [updateSearchValue]);

  const onChangeInput = (event) => {
    const newValue = event.target.value;
    console.log("Input changed:", newValue);
    setValue(newValue);
    updateSearchValue(newValue);
  };

  const clearSearch = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.root}
        type="text"
        placeholder="Поиск пиццы..."
      />

      {value === "" ? (
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
          onClick={() => clearSearch()}
        />
      )}
    </div>
  );
};

export default Search;
