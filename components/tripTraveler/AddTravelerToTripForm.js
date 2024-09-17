/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { getTrips, addTripTraveler } from '../../utils/data/tripsData';
import { getTravelers } from '../../utils/data/travelersData';

const AddTravelerToTrip = ({ uid }) => {
  const router = useRouter();
  const [trips, setTrips] = useState([]);
  const [travelers, setTravelers] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState('');
  const [selectedTraveler, setSelectedTraveler] = useState('');

  useEffect(() => {
    getTrips().then(setTrips);
    getTravelers().then(setTravelers);
  }, [uid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      traveler_id: selectedTraveler,
      trip_id: selectedTrip,
    };

    addTripTraveler(selectedTrip, payload).then(router.push('/tripTraveler'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <FloatingLabel controlId="floatingSelect" label="Select Trip" className="mb-3 mt-3">
          <Form.Control
            as="select"
            value={selectedTrip}
            onChange={(e) => setSelectedTrip(e.target.value)}
            required
          >
            <option value="">--Select Trip--</option>
            {trips.map((trip) => (
              <option key={trip.id} value={trip.id}>
                {trip.trip_name}
              </option>
            ))}
          </Form.Control>
        </FloatingLabel>
      </div>

      <div>
        <FloatingLabel controlId="floatingSelect2" label="Select Traveler" className="mb-3">
          <Form.Control
            as="select"
            value={selectedTraveler}
            onChange={(e) => setSelectedTraveler(e.target.value)}
            required
          >
            <option value="">--Select Traveler--</option>
            {travelers.map((traveler) => (
              <option key={traveler.id} value={traveler.id}>
                {traveler.first_name} {traveler.last_name}
              </option>
            ))}
          </Form.Control>
        </FloatingLabel>
      </div>

      <Button variant="primary" type="submit">Add Traveler to Trip</Button>
    </Form>
  );
};

export default AddTravelerToTrip;
