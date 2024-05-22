import React, { useState } from "react";

import AccordionItem from "../accordion-item";

import styles from "./accordion-list-with-search.module.css";

const AccordionList = ({ users, setUsers }) => {
  const [activeIndex, setActiveIndex] = useState();

  const handleOpenButtonClick = (itemIsOpen, index) => {
    if (itemIsOpen) setActiveIndex(index);
    else setActiveIndex(-1);
  };

  const handleUpButtonClick = (id) => {
    const clickedUser = users.find((user) => user.id === id);
    const userIndex = users.findIndex((user) => user.id === id);
    const swappedUsers = users.map((user, index) => {
      if (user.id === id && userIndex !== 0) {
        return {
          ...user,
          id: users[userIndex - 1].id,
        };
      }
      if (index === userIndex - 1) {
        return {
          ...user,
          id: clickedUser.id,
        };
      }

      return user;
    });

    setUsers(swappedUsers.sort((a, b) => a.id - b.id));
  };

  return (
    <div className={styles["accordion-list-with-search_list"]}>
      <div className={styles["accordion-list-with-search_list__item"]}>
        <span>Id</span>
        <span>Username</span>
        <span>Name</span>
      </div>
      {users.length
        ? users.map((user, index) => (
            <AccordionItem
              key={user.id}
              itemIsOpen={activeIndex === index}
              onUpButtonClick={handleUpButtonClick}
              onOpenButtonClick={(itemIsOpen) =>
                handleOpenButtonClick(itemIsOpen, index)
              }
              {...user}
            />
          ))
        : null}
    </div>
  );
};

export default AccordionList;
