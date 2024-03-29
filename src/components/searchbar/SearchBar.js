import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./SearchBar.module.css";
import { IconButton } from "@mui/material";

function SearchBar(props) {
  const submitSearchHandler = () => {
    console.log("Searching!");
  };

  return (
    <div className={props.hidden ? styles.hide : ""}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Username"
        />
        <div className={styles.searchButtonContainer}>
          <IconButton
            className={styles.searchButton}
            onClick={submitSearchHandler}
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
