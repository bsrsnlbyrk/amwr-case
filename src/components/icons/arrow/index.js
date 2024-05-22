import React from "react";

import styles from "./arrow.module.css";

const Arrow = ({ rotation }) => {
  return <i className={`${styles.arrow} ${styles[rotation]}`}></i>;
};

export default Arrow;
