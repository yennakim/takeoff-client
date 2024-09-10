import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import TripCard from '../components/trip/TripCard';
import { getTrips } from '../utils/data/tripsData';

export default function TripsPage() {
  const [trips, setTrips] = useState([]);
  const { user } = useAuth();
  const getUserTrips = () => {
    getTrips(user.uid).then(setTrips);
  };

  useEffect(() => {
    getUserTrips();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/trip/add" passHref>
        <Button variant="success">Add Trip</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {trips.map((trip) => (
          <TripCard key={trip.id} tripObj={trip} onUpdate={getUserTrips} />
        ))}
      </div>
    </div>
  );
}
