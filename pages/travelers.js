import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import TravelerCard from '../components/traveler/TravelerCard';
import { getTravelers } from '../utils/data/travelersData';

export default function TravelersPage() {
  const [travelers, setTravelers] = useState([]);
  const { user } = useAuth();
  const getUserTravelers = () => {
    getTravelers(user.uid).then(setTravelers);
  };

  useEffect(() => {
    getUserTravelers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/traveler/add" passHref>
        <Button variant="success">Add Traveler</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {travelers.map((traveler) => (
          <TravelerCard key={traveler.id} travelerObj={traveler} onUpdate={getUserTravelers} />
        ))}
      </div>
    </div>
  );
}
