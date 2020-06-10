import React, { Fragment, useContext, useEffect } from "react";
import Contacts from "../../contacts/Contacts";
import ContactsFilter from "../../contacts/ContactsFilter";
import FloatingBtn from "../FloatingBtn";
import ContactForm from "../../contacts/ContactForm";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <ContactsFilter />
      <Contacts />
      <FloatingBtn />
      <ContactForm />
    </Fragment>
  );
};

export default Home;
