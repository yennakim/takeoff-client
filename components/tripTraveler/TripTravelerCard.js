import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteTripTraveler } from '../../utils/data/tripsData';

export default function TripTravelerCard({ tripTravelerObj, onUpdate }) {
  const deleteThisTripTraveler = () => {
    if (window.confirm(`Delete ${tripTravelerObj.traveler.first_name}?`)) {
      const payload = {
        trip_id: tripTravelerObj.trip.id,
        traveler_id: tripTravelerObj.traveler.id,
      };

      deleteTripTraveler(payload).then(() => onUpdate());
    }
  };

  return (
    <Card className="card" style={{ width: '18rem', margin: '10px', border: '1px solid' }}>
      <Card.Title style={{ textAlign: 'center', paddingTop: '10px' }}>{tripTravelerObj.traveler.first_name}</Card.Title>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Traveling to:{tripTravelerObj.trip.trip_name}</Card.Subtitle>
        <Button variant="danger" onClick={deleteThisTripTraveler} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TripTravelerCard.propTypes = {
  tripTravelerObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    trip: PropTypes.shape({
      id: PropTypes.number.isRequired,
      trip_name: PropTypes.string,
      origin: PropTypes.string,
    }).isRequired,
    traveler: PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
