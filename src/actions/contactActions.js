import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  GET_CONTACT
} from "./types";
import Axios from "axios";

export const getContacts = () => async dispatch => {
  const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContact = contact => async dispatch => {
  const res = await Axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await Axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const updateContact = contact => async dispatch => {
  const res = await Axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
