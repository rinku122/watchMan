import React from "react";
import "./modal.css";

const Modals = (props) => {
  return (
    <div className="mymodal">
      <div className="card grey lighten-3">
        <div className="card-content">
          {props.isHeader && (
            <header className="large fw-700 ">
              {props.title} <span className="teal-text darken-3">Contacts</span>{" "}
            </header>
          )}
          <section className="mymodal-content">{props.children}</section>
          <section className="modal-action">{props.action}</section>
        </div>
      </div>
    </div>
  );
};

export default Modals;
