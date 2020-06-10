import React, { Fragment, useContext, useState, useEffect } from "react";
import Modals from "../layout/modals/modal-content/Modals";
import Overlay from "../layout/modals/modal-overlay/Overlay";
import ContactContext from "../context/contact/contactContext";
import Alert from "../layout/Alert";
import AlertContext from "../context/alert/alertContext";
import M from "materialize-css/dist/js/materialize.min.js";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { name, email, phone, type } = contact;
  const {
    modal,
    addContact,
    hideModal,
    currentContact,
    showModal,
    updateContact,
    clearfilteredContact,
  } = contactContext;

  useEffect(() => {
    if (currentContact) {
      setContact(currentContact);
      showModal();
    } else {
      clearForm();
    }
    //eslint-disable-next-line
  }, [currentContact]);
  const onChange = (e) => {
    e.preventDefault();
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const onClick = () => {
    if (currentContact) {
      if (name === "" || email === "" || phone === "") {
        setAlert(
          "Please enter all the fields to update a contact",
          "deep-purple white-text"
        );
      } else {
        if (
          currentContact.name === name &&
          currentContact.phone === phone &&
          currentContact.email === email &&
          currentContact.type === type
        ) {
          M.toast({
            html: `${
              currentContact.name.charAt(0).toUpperCase() +
              currentContact.name.slice(1)
            } restored`,
          });
          hideModal();
          clearfilteredContact();
        } else {
          updateContact(contact);
          M.toast({
            html: `${
              currentContact.name.charAt(0).toUpperCase() +
              currentContact.name.slice(1)
            } Updated`,
          });
          hideModal();
          clearfilteredContact();
        }
      }
    } else {
      if (name === "" || email === "" || phone === "") {
        setAlert(
          "Please enter all the fields to add a contact",
          "deep-purple white-text"
        );
      } else {
        addContact(contact);
        M.toast({ html: `${name} added to your contact list` });
        clearForm();
        hideModal();
        clearfilteredContact();
      }
    }
  };
  const clearForm = () => {
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };
  const closeOverlay = () => {
    clearForm();
    hideModal();
  };
  return (
    modal === true && (
      <Fragment>
        <Overlay close={closeOverlay} />
        <Modals
          isHeader
          title={currentContact ? "Edit" : "Add"}
          action={
            <button
              onClick={onClick}
              className={
                "btn btn-block " + (currentContact ? "blue darken-3" : "")
              }>
              {currentContact ? "Update Contact" : "Add Contact"}
            </button>
          }>
          <Alert />
          <form>
            <div style={{ marginTop: "10px" }} className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <input
                value={name}
                onChange={onChange}
                name="name"
                id="icon_prefix"
                type="text"
              />
              <label
                className={currentContact ? "active" : ""}
                htmlFor="icon_prefix">
                Name
              </label>
            </div>
            <div className="input-field">
              <i className="fa fa-envelope prefix"></i>
              <input
                value={email}
                onChange={onChange}
                name="email"
                id="icon_prefix_email"
                type="email"
              />
              <label
                className={currentContact ? "active" : ""}
                htmlFor="icon_prefix_email">
                Email
              </label>
            </div>{" "}
            <div className="input-field">
              <i className="fa fa-phone-square prefix"></i>
              <input
                value={phone}
                name="phone"
                onChange={onChange}
                id="icon_prefix_phone"
                type="text"
              />
              <label
                className={currentContact ? "active" : ""}
                htmlFor="icon_prefix_phone">
                Phone
              </label>
            </div>{" "}
            <p className="pencil fw-600 my-1">Contact Type</p>
            <p style={{ marginBottom: "1rem" }}>
              <label htmlFor="radiopersonal">
                <input
                  className="browser-default"
                  id="radiopersonal"
                  onChange={onChange}
                  value="personal"
                  type="radio"
                  name="type"
                  checked={type === "personal"}
                />
                <span>Personal</span>
              </label>
              <label htmlFor="radioprofessional">
                <input
                  className="browser-default"
                  id="radioprofessional"
                  onChange={onChange}
                  value="professional"
                  type="radio"
                  name="type"
                  checked={type === "professional"}
                />
                <span>Professional</span>
              </label>
            </p>
          </form>
        </Modals>
      </Fragment>
    )
  );
};

export default ContactForm;
