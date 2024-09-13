import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import TripCard from '../components/trip/TripCard';
import { getUserTrips } from '../utils/data/tripsData';

export default function TripsPage() {
  const [trips, setTrips] = useState([]);
  const { user } = useAuth();
  const getMyTrips = () => {
    getUserTrips(user.uid).then(setTrips);
  };

  useEffect(() => {
    getMyTrips();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/trip/add" passHref>
        <Button variant="success">Add Trip</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {trips.map((trip) => (
          <TripCard key={trip.id} tripObj={trip} onUpdate={getMyTrips} />
        ))}
      </div>
    </div>
  );
}
