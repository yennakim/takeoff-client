import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createTrip, updateTrip } from '../../utils/data/tripsData';

const initialState = {
  user_id: 1,
  trip_name: '',
  origin: '',
  destination: '',
  start_date: '',
  end_date: '',
};

export default function TripForm({ obj }) {
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
      updateTrip(formInput).then(() => router.push('/trips'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createTrip(payload).then(() => router.push('/trips'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text mt-5">{obj.id ? 'Update' : 'Create'} Trip</h2>

      {/* TRIP NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label=" Trip Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter trip name"
          name="trip_name"
          value={formInput.trip_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* TRIP ORIGIN INPUT  */}
      <FloatingLabel controlId="floatingInput2" label=" Trip Origin" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Where are you starting from"
          name="origin"
          value={formInput.origin}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* TRIP DESTINATION INPUT  */}
      <FloatingLabel controlId="floatingInput3" label=" Trip Destination" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Where is your final destination"
          name="destination"
          value={formInput.destination}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* TRIP START DATE INPUT  */}
      <FloatingLabel controlId="floatingInput4" label="Trip Start Date" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter trip start date"
          name="start_date"
          value={formInput.start_date}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* TRIP END DATE INPUT  */}
      <FloatingLabel controlId="floatingInput5" label="Trip End Date" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter trip end date"
          name="end_date"
          value={formInput.end_date}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Add'} Trip</Button>
    </Form>
  );
}

TripForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    trip_name: PropTypes.string,
    origin: PropTypes.string,
    destination: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    looseLeaf: PropTypes.string,
    user_id: PropTypes.number,
  }),
};

TripForm.defaultProps = {
  obj: initialState,
};
