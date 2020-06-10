import React, { useContext } from "react";
import ContactContext from "../context/contact/contactContext";

const FloatingBtn = () => {
  const contactContext = useContext(ContactContext);
  const { showModal } = contactContext;
  return (
    <div className="fixed-action-btn">
      <a
        href="#!"
        onClick={() => showModal()}
        className="btn-floating btn-large red pulse">
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
};

export default FloatingBtn;
