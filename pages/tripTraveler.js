import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import getTripTravelers from '../utils/data/tripTravelerData';
import TripTravelerCard from '../components/tripTraveler/TripTravelerCard';

export default function TripTravelerPage() {
  const [tripTravelers, setTripTravelers] = useState([]);
  const { user } = useAuth();

  const getAllTripTravelers = () => {
    getTripTravelers(user.uid).then(setTripTravelers);
  };

  useEffect(() => {
    getAllTripTravelers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <div className="text-center my-4">
        <Link href="/tripTraveler/add" passHref>
          <Button>Add Trip Traveler</Button>
        </Link>
      </div>
      <div style={{ margin: '20px' }} className="d-flex flex-wrap">
        {tripTravelers.map((tripTraveler) => (
          <TripTravelerCard key={tripTraveler.id} tripTravelerObj={tripTraveler} onUpdate={getAllTripTravelers} />
        ))}
      </div>
    </>
  );
}
