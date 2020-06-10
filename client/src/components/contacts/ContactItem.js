import React, { Fragment, useContext, useState } from "react";
import ContactContext from "../context/contact/contactContext";
import ConfirmDelete from "./ConfirmDelete";

const ContactItem = ({ contact }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { name, email, phone, type } = contact;
  const contactContext = useContext(ContactContext);
  const { setCurrentContact } = contactContext;
  const onEdit = () => {
    setCurrentContact(contact);
  };
  const showDeleteModal = () => {
    setDeleteModal(true);
  };
  const hideDeleteModal = () => {
    setDeleteModal(false);
  };

  return (
    <div className="grey darken-4">
      <div className="p-1">
        <div className="flex">
          <div>
            <span className="title pencil fw-600 white-text">
              {" "}
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </span>
          </div>
          <div>
            <div
              className={
                `badgenew  white-text  ` +
                (type === "personal" ? "teal" : "blue darken-4")
              }>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          </div>
        </div>
        {email && (
          <p className="small fw-500 white-text ">
            <span
              className={
                `fa fa-envelope m ` +
                (type === "personal" ? "teal-text" : "blue-text")
              }></span>
            {email}
          </p>
        )}
        {phone && (
          <span className="small fw-500 white-text ">
            <span
              className={
                `fa fa-phone-square m ` +
                (type === "personal" ? "teal-text" : "blue-text")
              }></span>
            {phone}
          </span>
        )}
      </div>
      <Fragment>
        <div className="divider"></div>
        <div className="flex my-1 px-1">
          <a
            href="#!"
            onClick={onEdit}
            className={
              `btn btn-small darken-4 ` +
              (type === "personal" ? "teal" : "blue")
            }>
            Edit
          </a>
          <a
            onClick={showDeleteModal}
            className="btn btn-small red darken-4"
            href="#!">
            Delete
          </a>
        </div>
        <ConfirmDelete
          deleteModal={deleteModal}
          hideDeleteModal={hideDeleteModal}
          contact={contact}
        />
      </Fragment>
    </div>
  );
};

export default ContactItem;
