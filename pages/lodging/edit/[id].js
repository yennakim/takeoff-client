import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleLodging } from '../../../utils/data/lodgingData';
import LodgingForm from '../../../components/lodging/LodgingForm';

export default function EditLodging() {
  const [editLodging, setEditLodging] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleLodging(id).then(setEditLodging);
  }, [id]);

  return (<LodgingForm obj={editLodging} />);
}
