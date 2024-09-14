import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createItem, updateItem } from '../../utils/data/itemsData';

const initialState = {
  trip_id: 1,
  item_name: '',
  quantity: '',
  packed: false,
};

export default function ItemForm({ obj }) {
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
      updateItem(formInput).then(() => router.push('/items'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createItem(payload).then(() => router.push('/items'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text mt-5">{obj.id ? 'Update' : 'Create'} Item</h2>

      {/* ITEM NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label=" Item name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter item name"
          name="item_name"
          value={formInput.item_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* ITEM QUANTITY INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Quantity" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter quantity"
          name="quantity"
          value={formInput.quantity}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Form.Check
        className="text mb-3"
        type="checkbox"
        id="packed"
        name="packed"
        label="Packed"
        checked={formInput.packed}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            packed: e.target.checked,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Add'} Item</Button>
    </Form>
  );
}

ItemForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    trip_id: PropTypes.number,
    item_name: PropTypes.string,
    number: PropTypes.number,
  }),
};

ItemForm.defaultProps = {
  obj: initialState,
};
