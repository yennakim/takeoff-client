import { clientCredentials } from '../client';

const getTravelers = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/traveler`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleTraveler = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/traveler/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createTraveler = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/traveler`, {
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

const updateTraveler = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/traveler/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => resolve())
    .catch(reject);
});

const deleteTraveler = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/traveler/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getTravelers, getSingleTraveler, createTraveler, updateTraveler, deleteTraveler,
};
