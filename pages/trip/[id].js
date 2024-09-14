import React, { useEffect, useState } from 'react';
import { getBoardingPasses } from '../../utils/data/boardingPassData';
import BoardingPassCard from '../../components/boardingPass/BoardingPassCard';
import { getTripLodgings } from '../../utils/data/lodgingData';
import LodgingCard from '../../components/lodging/LodgingCard';
import { getTripItems } from '../../utils/data/itemsData';
import ItemCard from '../../components/items/ItemCard';

export default function ViewTrip() {
  const [tripBoardingPasses, setTripBoardingPasses] = useState([]);
  const [tripLodgings, setTripLodgings] = useState([]);
  const [tripItems, setTripItems] = useState([]);

  const getMyBoardingPasses = () => {
    getBoardingPasses().then(setTripBoardingPasses);
  };

  const getMyLodgings = () => {
    getTripLodgings().then(setTripLodgings);
  };

  const getMyItems = () => {
    getTripItems().then(setTripItems);
  };

  useEffect(() => {
    getMyBoardingPasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMyLodgings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMyItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      <h1>Boarding Passes</h1>
      <div className="d-flex flex-wrap">
        {tripBoardingPasses.map((tripBoardingPass) => (
          <BoardingPassCard key={tripBoardingPass.id} boardingPassObj={tripBoardingPass} onUpdate={getMyBoardingPasses} />
        ))}
      </div>

      <h1>Lodging</h1>
      <div className="d-flex flex-wrap">
        {tripLodgings.map((lodging) => (
          <LodgingCard key={lodging.id} lodgingObj={lodging} onUpdate={getMyLodgings} />
        ))}
      </div>

      <h1>Items </h1>
      <div className="d-flex flex-wrap">
        {tripItems.map((item) => (
          <ItemCard key={item.id} itemObj={item} onUpdate={getMyItems} />
        ))}
      </div>
    </div>
  );
}
