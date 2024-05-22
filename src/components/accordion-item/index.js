import React from "react";

import { Arrow, UpButton } from "../icons";
import styles from "./accordion-item.module.css";

const AccordionItem = ({
  id,
  username,
  name,
  itemIsOpen,
  onUpButtonClick,
  onOpenButtonClick,
  ...rest
}) => {
  return (
    <div className={styles["accordion-item_wrapper"]}>
      <div
        className={`${styles["accordion-item_head"]} ${
          itemIsOpen ? styles["accordion-item_head_open"] : null
        }`}
      >
        <span className={styles["accordion-item_head__span"]}>{id}</span>
        <span className={styles["accordion-item_head__span"]}>{username}</span>
        <span className={styles["accordion-item_head__span"]}>{name}</span>
        <span
          className={styles["accordion-item_head__span__button"]}
          onClick={() => onUpButtonClick(id)}
        >
          <UpButton />
        </span>
        <span onClick={() => onOpenButtonClick(!itemIsOpen)}>
          <Arrow rotation={itemIsOpen ? "down" : "right"} />
        </span>
      </div>
      {itemIsOpen ? (
        <div className={styles["accordion-item_body"]}>
          <p className={styles["accordion-item_body__title"]}>Detail:</p>
          <p>Email: {rest.email}</p>
          <p>Phone: {rest.phone}</p>
          <p>Web Site: {rest.website}</p>
          <p>Address: {`${rest.address.street} ${rest.address.suite}`}</p>
          <p>City: {rest.address.city}</p>
          <p>Zip Code: {rest.address.zipcode}</p>
          <p>Company: {rest.company.name}</p>
        </div>
      ) : null}
    </div>
  );
};

export default AccordionItem;
