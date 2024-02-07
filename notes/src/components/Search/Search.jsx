import React from "react";
import styles from "./Search.module.scss";
import { MdSearch } from "react-icons/md";

export const Search = ({ handleSearchNote }) => {
  return (
    <div className={styles.search_bar}>
      <MdSearch className={styles.icon} size="1.3em" />
      <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="type to search..." />
    </div>
  );
};
