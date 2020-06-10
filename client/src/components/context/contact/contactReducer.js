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
  SET_LOADING,
  CLEAR_CONTACTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: [action.payload, ...state.contacts],
      };
    case SET_CURRENT:
      return {
        ...state,
        currentContact: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentContact: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filteredContact: state.contacts.filter((contact) => {
          const regx = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regx) || contact.email.match(regx);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredContact: null,
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
      };
    default:
      return state;
  }
};
