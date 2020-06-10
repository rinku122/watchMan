import React, { useContext, useEffect, Fragment } from "react";
import Preloader from "../layout/Preloader";
import spinner from "../layout/282.gif";
import ContactItem from "./ContactItem";

import ContactContext from "../context/contact/contactContext";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filteredContact, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  return contacts === null || loading === true ? (
    <div className="container text-center">
      <div className="my-2">
        <Preloader spinner={spinner} />
      </div>
    </div>
  ) : (
    <Fragment>
      {filteredContact !== null ? (
        <div className="container">
          <div className="grid-2">
            {filteredContact.map((contact) => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="grid-2">
            {contacts.map((contact) => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Contacts;
