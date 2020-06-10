import React, { useReducer } from "react";
import ContactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import axios from "axios";
import {
  GET_CONTACTS,
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  SET_LOADING,
  CLEAR_CONTACTS,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    modal: false,
    currentContact: null,
    filteredContact: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);
  /////GET CONTACTS
  const getContacts = async () => {
    setLoading();
    try {
      const res = await axios.get("/api/contacts");
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        error: error.response,
      });
    }
  };
  /////Add Contacts
  const addContact = async (contact) => {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        error: error.response,
      });
    }
  };

  /////Set current Contacts
  const setCurrentContact = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };
  /////Update Contact
  const updateContact = async (contact) => {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        error: error.response,
      });
    }
  };
  /////Clear Current Contact
  const clearCurrentContact = (contact) => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };
  /////Delete Contact
  const deleteContact = async (id) => {
    setLoading();
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        error: error.response,
      });
    }
  };
  ////Filter Contact
  const filterContact = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };
  const clearfilteredContact = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  /////Show Modal
  const showModal = () => {
    dispatch({
      type: SHOW_MODAL,
    });
  };
  /////Hide Modal
  const hideModal = () => {
    clearCurrentContact();
    dispatch({
      type: HIDE_MODAL,
    });
  };
  /////SET LOADING
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };
  /////CLEAR CONTACTS
  const clearContacts = () => {
    dispatch({
      type: CLEAR_CONTACTS,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        modal: state.modal,
        currentContact: state.currentContact,
        filteredContact: state.filteredContact,
        error: state.error,
        loading: state.error,
        showModal,
        hideModal,
        addContact,
        setCurrentContact,
        clearCurrentContact,
        updateContact,
        deleteContact,
        filterContact,
        clearfilteredContact,
        getContacts,
        clearContacts,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
