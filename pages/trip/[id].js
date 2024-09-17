import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import TravelerCard from '../../components/traveler/TravelerCard';
import { getTravelers } from '../../utils/data/travelersData';

export default function ViewTrip() {
  const [travelers, setTravelers] = useState([]);
  const { user } = useAuth();

  const getMyTravelers = () => {
    getTravelers(user.uid).then(setTravelers);
  };

  useEffect(() => {
    getMyTravelers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="text-center my-4">
      <h1>Trip Details</h1>
      <div className="d-flex flex-wrap">
        {travelers.map((traveler) => (
          <TravelerCard key={traveler.id} travelerObj={traveler} onUpdate={getMyTravelers} />
        ))}
      </div>
    </div>
  );
}
