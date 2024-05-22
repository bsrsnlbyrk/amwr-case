import React from "react";

import Input from "../input";

import styles from "./accordion-list-with-search.module.css";

const Filters = ({ filterArray, onSearch }) => {
  const handleInputChange = ({ key, value }) => {
    onSearch({ key, value });
  };

  return (
    <div className={styles["accordion-list-with-search_filter"]}>
      <p className={styles["accordion-list-with-search_filter__title"]}>
        Filter
      </p>
      {filterArray.map((filter) => (
        <Input
          key={filter}
          name={filter}
          type="search"
          onChange={(e) =>
            handleInputChange({ key: filter, value: e.target.value })
          }
        />
      ))}
    </div>
  );
};

export default Filters;
