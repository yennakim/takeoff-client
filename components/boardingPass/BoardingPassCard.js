import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteBoardingPass } from '../../utils/data/boardingPassData';

export default function BoardingPassCard({ boardingPassObj, onUpdate }) {
  const deleteThisBoardingPass = () => {
    if (window.confirm('Would you like to delete this boarding pass?')) {
      deleteBoardingPass(boardingPassObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card className="card" style={{ width: '18rem', margin: '10px', border: '1px solid' }}>
      <Card.Title style={{ textAlign: 'center', paddingTop: '10px' }}>{boardingPassObj.departing_from} -- {boardingPassObj.arriving_to}</Card.Title>
      <Card.Body>
        <p style={{ textAlign: 'center' }} className="card-text bold">{boardingPassObj.airline}</p>
        <p style={{ textAlign: 'center' }} className="card-text bold">{boardingPassObj.gate}</p>
        <p style={{ textAlign: 'center' }} className="card-text bold">{boardingPassObj.seat}</p>
        <Link Link href={`/boarding_pass/${boardingPassObj.id}`} passHref>
          <Button variant="outline-success" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/boardingPass/edit/${boardingPassObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisBoardingPass} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

BoardingPassCard.propTypes = {
  boardingPassObj: PropTypes.shape({
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
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
