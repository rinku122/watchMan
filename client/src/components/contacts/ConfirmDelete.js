import React, { Fragment, useContext } from "react";
import Modals from "../layout/modals/modal-content/Modals";
import Overlay from "../layout/modals/modal-overlay/Overlay";
import ContactContext from "../context/contact/contactContext";
import M from "materialize-css/dist/js/materialize.min.js";
const ConfirmDelete = ({ deleteModal, contact, hideDeleteModal }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, clearfilteredContact } = contactContext;

  const onClick = () => {
    deleteContact(contact._id);
    M.toast({
      html: `${
        contact.name.charAt(0).toUpperCase() + contact.name.slice(1)
      } deleted from your contact list`,
    });
    hideDeleteModal();
    clearfilteredContact();
  };
  return (
    deleteModal === true && (
      <Fragment>
        <Overlay close={hideDeleteModal} />
        <Modals
          action={
            <Fragment>
              <div style={{ marginTop: "20px" }} className="flex  ">
                <a href="#!" onClick={hideDeleteModal} className="btn-small">
                  Cancel
                </a>

                <a
                  onClick={onClick}
                  className="btn-small red darken-2"
                  href="#!">
                  Delete
                </a>
              </div>
            </Fragment>
          }>
          <span className="pencil fw-600">{`Are you sure you want to delete ${
            contact.name.charAt(0).toUpperCase() + contact.name.slice(1)
          } from your contact list ? `}</span>
        </Modals>
      </Fragment>
    )
  );
};

export default ConfirmDelete;
