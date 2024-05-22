import React, { useState, useEffect, useCallback, useRef } from "react";

import AccordionListWithSearch from "../components/accordion-list-with-search";
import Loader from "../components/loader";

function HomePage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const accordionListWithSearch = useRef();

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    const data = await fetch(process.env.REACT_APP_USERS_API);
    const jsonData = await data.json();

    setUsers(jsonData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => console.log(accordionListWithSearch.current.getData()),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AccordionListWithSearch src={users} ref={accordionListWithSearch} />
      )}
    </>
  );
}

export default HomePage;
