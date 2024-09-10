import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTrip } from '../../../utils/data/tripsData';
import TripForm from '../../../components/trip/TripForm';

export default function EditTrip() {
  const [editTrip, setEditTrip] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleTrip(id).then(setEditTrip);
  }, [id]);

  return (<TripForm obj={editTrip} />);
}
