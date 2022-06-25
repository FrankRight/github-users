import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Divider, IconButton } from "@mui/material";

import styles from "./Navbar.module.css";
import SearchBar from "./SearchBar";

function Navbar(props) {
  const [hidden, setHidden] = useState(false);

  const onClickSearchHandler = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <p className={styles.title}>Github You</p>
          <p className={styles.motto}>Social as you!</p>
        </div>

        <div>
          <IconButton onClick={onClickSearchHandler}>
            <SearchIcon fontSize="large" className={styles.searchButton} />
          </IconButton>

          <IconButton>
            <LightModeIcon
              fontSize="large"
              className={`${styles.lightButton} ${styles.buttonSelect}`}
            />
          </IconButton>
        </div>
      </nav>

      <SearchBar hidden={hidden} />

      <Divider />
    </>
  );
}

export default Navbar;
