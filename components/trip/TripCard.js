import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteTrip } from '../../utils/data/tripsData';

export default function TripCard({ tripObj, onUpdate }) {
  const deleteThisTrip = () => {
    if (window.confirm(`Delete ${tripObj.trip_name}?`)) {
      deleteTrip(tripObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card className="card" style={{ width: '18rem', margin: '10px', border: '1px solid' }}>
      <Card.Title style={{ textAlign: 'center', paddingTop: '10px' }}>{tripObj.trip_name}</Card.Title>
      <Card.Body>
        {/* <Card.Img variant="top" src={tripObj.image} alt={tripObj.trip_name} style={{ height: '400px', borderRadius: '0.5rem' }} /> */}
        <p style={{ textAlign: 'center' }} className="card-text bold">{tripObj.start_date} - {tripObj.end_date}</p>
        <Link Link href={`/trips/${tripObj.id}`} passHref>
          <Button variant="outline-success" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/trip/edit/${tripObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisTrip} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TripCard.propTypes = {
  tripObj: PropTypes.shape({
    id: PropTypes.number,
    // image: PropTypes.string,
    trip_name: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
