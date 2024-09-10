import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createBoardingPass, updateBoardingPass } from '../../utils/data/boardingPassData';

const initialState = {
  trip_id: 1,
  user_id: 1,
  traveler_id: 1,
  departing_from: '',
  arriving_to: '',
  airline: '',
  gate: '',
  seat: '',
  departure_time: '',
  arrival_time: '',
  flight_number: '',
};

export default function BoardingPassForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) setFormInput(obj);
  }, [obj], user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateBoardingPass(formInput).then(() => router.push('/boardingPass'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createBoardingPass(payload).then(() => router.push('/boardingPass'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text mt-5">{obj.id ? 'Update' : 'Create'} Boarding Pass</h2>

      {/* BOARDING PASS DEPARTURE LOCATION INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Departing from" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter where you are departing from"
          name="departing_from"
          value={formInput.departing_from}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* BOARDING PASS ARRIVAL LOCATION INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Arriving to" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter where you are arriving to"
          name="arriving_to"
          value={formInput.arriving_to}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* AIRLINE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Airline" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Airline"
          name="airline"
          value={formInput.airline}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* GATE NUMBER INPUT  */}
      <FloatingLabel controlId="floatingInput4" label="Gate" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter gate"
          name="gate"
          value={formInput.gate}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SEAT NUMBER INPUT  */}
      <FloatingLabel controlId="floatingInput5" label="Seat number" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter seat number"
          name="seat"
          value={formInput.seat}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* DEPARTURE TIME INPUT  */}
      <FloatingLabel controlId="floatingInput6" label="Departure time" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter departure time"
          name="departure_time"
          value={formInput.departure_time}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* ARRIVAL TIME INPUT  */}
      <FloatingLabel controlId="floatingInput7" label="Arrival time" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter arrival time"
          name="arrival_time"
          value={formInput.arrival_time}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* FLIGHT NUMBER INPUT  */}
      <FloatingLabel controlId="floatingInput8" label="Flight number" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter flight number"
          name="flight_number"
          value={formInput.flight_number}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Add'} Boarding Pass</Button>
    </Form>
  );
}

BoardingPassForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    trip_id: PropTypes.number,
    user_id: PropTypes.number,
    traveler_id: PropTypes.number,
    departing_from: PropTypes.string,
    arriving_to: PropTypes.string,
    airline: PropTypes.string,
    gate: PropTypes.string,
    seat: PropTypes.string,
    departure_time: PropTypes.string,
    arrival_time: PropTypes.string,
    flight_number: PropTypes.string,
  }),
};

BoardingPassForm.defaultProps = {
  obj: initialState,
};
