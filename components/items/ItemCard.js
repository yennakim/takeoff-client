import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteItem } from '../../utils/data/itemsData';

export default function ItemCard({ itemObj, onUpdate }) {
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${itemObj.item_name}?`)) {
      deleteItem(itemObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card className="card" style={{ width: '18rem', margin: '10px', border: '1px solid' }}>
      <Card.Title style={{ textAlign: 'center', paddingTop: '10px' }}>{itemObj.item_name}</Card.Title>
      <Card.Body>
        <p style={{ textAlign: 'center' }} className="card-text bold">Quantity: {itemObj.quantity}</p>
        <Link href={`/item/edit/${itemObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisItem} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    trip_id: PropTypes.number,
    item_name: PropTypes.string,
    quantity: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
