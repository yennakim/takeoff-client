import { clientCredentials } from '../client';

const getTripTravelers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trip_traveler`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getTripTravelers;
