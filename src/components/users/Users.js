import React, { useEffect, useState } from "react";
import { titleCase } from "../../assets/util";

import styles from "./Users.module.css";

function Users(props) {
  const [items, setItems] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={styles.users}>
        {items.map((item) => (
          <div key={item.id} className={styles.userContent}>
            <img
              src={item.avatar_url}
              alt="user"
              className={styles.userImage}
            />
            <h2>{titleCase(item.login)}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
