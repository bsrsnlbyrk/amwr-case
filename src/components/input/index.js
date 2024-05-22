import React from "react";

import { Search } from "../icons";

import styles from "./input.module.css";

const Input = ({ name, type, onChange }) => {
  return (
    <div className={styles["input_wrapper"]}>
      {type === "search" ? <Search /> : null}
      <input
        className={styles["input_wrapper__input"]}
        name={name}
        placeholder={name}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
