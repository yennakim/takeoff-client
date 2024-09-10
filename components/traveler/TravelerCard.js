import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteTraveler } from '../../utils/data/travelersData';

export default function TravelerCard({ travelerObj, onUpdate }) {
  const deleteThisTraveler = () => {
    if (window.confirm(`Delete ${travelerObj.first_name} ${travelerObj.last_name}?`)) {
      deleteTraveler(travelerObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card className="card" style={{ width: '18rem', margin: '10px', border: '1px solid' }}>
      <Card.Title style={{ textAlign: 'center', paddingTop: '10px' }}>{travelerObj.image}</Card.Title>
      <Card.Body>
        <p style={{ textAlign: 'center' }} className="card-text bold">{travelerObj.first_name} {travelerObj.last_name}</p>
        <Link href={`/traveler/edit/${travelerObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisTraveler} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TravelerCard.propTypes = {
  travelerObj: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
