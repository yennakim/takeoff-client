import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import ItemCard from '../components/items/ItemCard';
import { getItems } from '../utils/data/itemsData';

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const { user } = useAuth();
  const getUserItems = () => {
    getItems(user.uid).then(setItems);
  };

  useEffect(() => {
    getUserItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/item/add" passHref>
        <Button variant="success">Add Item</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <ItemCard key={item.id} itemObj={item} onUpdate={getUserItems} />
        ))}
      </div>
    </div>
  );
}
