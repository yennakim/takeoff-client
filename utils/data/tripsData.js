import { clientCredentials } from '../client';

const getTrips = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getUserTrips = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip?uid=${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleTrip = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createTrip = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip`, {
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

const updateTrip = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => resolve())
    .catch(reject);
});

const deleteTrip = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const addTripTraveler = (tripId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip/${tripId}/add_traveler`, {
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

const deleteTripTraveler = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip/remove_traveler`, {
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

export {
  getTrips, getSingleTrip, createTrip, updateTrip, deleteTrip, addTripTraveler, deleteTripTraveler, getUserTrips,
};
