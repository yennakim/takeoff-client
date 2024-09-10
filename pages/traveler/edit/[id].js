import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTraveler } from '../../../utils/data/travelersData';
import TravelerForm from '../../../components/traveler/TravelerForm';

export default function EditTraveler() {
  const [editTraveler, setEditTraveler] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleTraveler(id).then(setEditTraveler);
  }, [id]);

  return (<TravelerForm obj={editTraveler} />);
}
