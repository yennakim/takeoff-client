import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import BoardingPassCard from '../components/boardingPass/BoardingPassCard';
import { getBoardingPasses } from '../utils/data/boardingPassData';

export default function BoardingPassPage() {
  const [boardingPasses, setBoardingPasses] = useState([]);
  const { user } = useAuth();
  const getUserBoardingPasses = () => {
    getBoardingPasses(user.uid).then(setBoardingPasses);
  };

  useEffect(() => {
    getUserBoardingPasses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/boardingPass/add" passHref>
        <Button variant="success">Add Boarding Pass</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {boardingPasses.map((boardingPass) => (
          <BoardingPassCard key={boardingPass.id} boardingPassObj={boardingPass} onUpdate={getUserBoardingPasses} />
        ))}
      </div>
    </div>
  );
}
