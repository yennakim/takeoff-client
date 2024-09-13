import { clientCredentials } from '../client';

const getItems = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleItem = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getTripItems = (tripId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items?trip_id=${tripId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => resolve())
    .catch(reject);
});

const deleteItem = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getItems, getSingleItem, getTripItems, createItem, updateItem, deleteItem,
};
