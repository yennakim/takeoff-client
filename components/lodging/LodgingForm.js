import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createLodging, updateLodging } from '../../utils/data/lodgingData';

const initialState = {
  trip_id: 1,
  address: '',
  city: '',
  length_of_stay: '',
};

export default function LodgingForm({ obj }) {
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
      updateLodging(formInput).then(() => router.push('/lodging'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createLodging(payload).then(() => router.push('/lodging'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text mt-5">{obj.id ? 'Update' : 'Create'} Lodging</h2>

      {/* LODGING ADDRESS INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Address" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter address"
          name="address"
          value={formInput.address}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* LODGING CITY INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="City" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter city"
          name="city"
          value={formInput.city}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* LODGING LENGTH OF STAY INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Length of stay" className="mb-3">
        <Form.Control
          type="text"
          placeholder="How many days are you staying?"
          name="length_of_stay"
          value={formInput.length_of_stay}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Add'} Lodging</Button>
    </Form>
  );
}

LodgingForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    trip_id: PropTypes.number,
    address: PropTypes.string,
    city: PropTypes.string,
    length_of_stay: PropTypes.string,
  }),
};

LodgingForm.defaultProps = {
  obj: initialState,
};
