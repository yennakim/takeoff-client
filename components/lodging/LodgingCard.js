import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteLodging } from '../../utils/data/lodgingData';

export default function LodgingCard({ lodgingObj, onUpdate }) {
  const deleteThisLodging = () => {
    if (window.confirm(`Delete ${lodgingObj.address}?`)) {
      deleteLodging(lodgingObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card className="card" style={{ width: '18rem', margin: '10px', border: '1px solid' }}>
      <Card.Title style={{ textAlign: 'center', paddingTop: '10px' }}>{lodgingObj.address}</Card.Title>
      <Card.Body>
        <p style={{ textAlign: 'center' }} className="card-text bold">{lodgingObj.city}</p>
        <p style={{ textAlign: 'center' }} className="card-text bold">Length of stay: {lodgingObj.length_of_stay}</p>
        <Link href={`/lodging/edit/${lodgingObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisLodging} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

LodgingCard.propTypes = {
  lodgingObj: PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    city: PropTypes.string,
    length_of_stay: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
