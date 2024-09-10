import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import LodgingCard from '../components/lodging/LodgingCard';
import { getLodgings } from '../utils/data/lodgingData';

export default function LodgingPage() {
  const [lodgings, setLodgings] = useState([]);
  const { user } = useAuth();
  const getUserLodgings = () => {
    getLodgings(user.uid).then(setLodgings);
  };

  useEffect(() => {
    getUserLodgings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/lodging/add" passHref>
        <Button variant="success">Add Lodging</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {lodgings.map((lodging) => (
          <LodgingCard key={lodging.id} lodgingObj={lodging} onUpdate={getUserLodgings} />
        ))}
      </div>
    </div>
  );
}
