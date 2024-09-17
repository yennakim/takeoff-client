import { clientCredentials } from '../client';

const getLodgings = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lodging`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getTripLodgings = (tripId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lodging?trip_id=${tripId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleLodging = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lodging/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createLodging = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lodging`, {
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

const updateLodging = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lodging/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => resolve())
    .catch(reject);
});

const deleteLodging = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/lodging/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getLodgings, getTripLodgings, getSingleLodging, createLodging, updateLodging, deleteLodging,
};
