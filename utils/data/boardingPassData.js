import { clientCredentials } from '../client';

const getBoardingPasses = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/boarding_pass`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getTripBoardingPasses = (tripId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/boarding_pass?trip_id=${tripId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleBoardingPass = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/boarding_pass/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createBoardingPass = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/boarding_pass`, {
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

const updateBoardingPass = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/boarding_pass/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => resolve())
    .catch(reject);
});

const deleteBoardingPass = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/boarding_pass/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getBoardingPasses, getTripBoardingPasses, getSingleBoardingPass, createBoardingPass, updateBoardingPass, deleteBoardingPass,
};
