'use client';

import { Camper } from '@/lib/api/clientApi';
import CamperCard from '../CamperCard/CamperCard';

type CampersListProps = {
  items: Camper[];
};

const CampersList = ({ items }: CampersListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <CamperCard key={item.id} camper={item} />
      ))}
    </ul>
  );
};

export default CampersList;
