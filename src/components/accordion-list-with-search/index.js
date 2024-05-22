import React, { useState, useImperativeHandle } from "react";

import AccordionList from "./accordion-list";
import Filters from "./accordion-list-filters";

import styles from "./accordion-list-with-search.module.css";

const AccordionListWithSearch = ({ src: defaultUsers }, ref) => {
  const [users, setUsers] = useState(defaultUsers);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useImperativeHandle(
    ref,
    () => {
      return {
        getData() {
          return users;
        },
      };
    },
    [users]
  );

  const onSearch = ({ key, value }) => {
    if (value) {
      setFilteredUsers([
        ...users
          .filter((data) =>
            String(data[key])
              .toLowerCase()
              .includes(String(value).toLowerCase())
          )
          .sort((a, b) => a.id - b.id),
      ]);
    } else setFilteredUsers([]);
  };

  return (
    <div className={styles["accordion-list-with-search_wrapper"]}>
      <Filters
        filterArray={defaultUsers.length ? Object.keys(defaultUsers[0]) : []}
        onSearch={onSearch}
      />
      <AccordionList
        users={filteredUsers.length ? filteredUsers : users}
        setUsers={filteredUsers.length ? setFilteredUsers : setUsers}
      />
    </div>
  );
};

export default React.forwardRef(AccordionListWithSearch);
