import React, { useContext, useState, useEffect } from "react";
import ContactContext from "../context/contact/contactContext";
import AddYourContacts from "../contacts/AddYourContacts";

const ContactsFilter = () => {
  const [text, setText] = useState("");
  const contextContact = useContext(ContactContext);
  const {
    filterContact,
    clearfilteredContact,
    filteredContact,
    contacts,
  } = contextContact;
  useEffect(() => {
    if (text === "") {
      clearfilteredContact();
    }
    //eslint-disable-next-line
  }, [filteredContact]);

  const onChange = (e) => {
    setText(e.target.value);
    filterContact(e.target.value);
  };
  return (
    contacts !== null &&
    (contacts.length === 0 ? (
      <AddYourContacts />
    ) : (
      <div className="container">
        <nav className="teal darken-3 my-1">
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input
                  value={text}
                  onChange={onChange}
                  id="search"
                  placeholder="Search a contact or an email"
                  type="search"
                  required
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    ))
  );
};

export default ContactsFilter;
