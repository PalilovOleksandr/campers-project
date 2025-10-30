'use client';

import { Camper } from '@/lib/api/api';
import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

type CampersListProps = {
  items: Camper[];
};

const CampersList = ({ items }: CampersListProps) => {
  return (
    <ul className={css.campersList}>
      {items.map((item) => (
        <CamperCard key={item.id} camper={item} />
      ))}
    </ul>
  );
};

export default CampersList;
