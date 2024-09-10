import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleBoardingPass } from '../../../utils/data/boardingPassData';
import BoardingPassForm from '../../../components/boardingPass/BoardingPassForm';

export default function EditBoardingPass() {
  const [editBoardingPass, setEditBoardingPass] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleBoardingPass(id).then(setEditBoardingPass);
  }, [id]);

  return (<BoardingPassForm obj={editBoardingPass} />);
}
