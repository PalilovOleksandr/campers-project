'use client';

import { useEffect } from 'react';
import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import { useCamperStore } from '@/lib/stores/camperStore';

const CampersList = () => {
  const { campers, isLoading, error, fetchCampers } = useCamperStore();

  useEffect(() => {
    fetchCampers();
  }, [fetchCampers]);

  if (isLoading) {
    return <p className={css.message}>Loading campers...</p>;
  }

  if (error) {
    return <p className={css.message}>Error: {error}</p>;
  }

  if (!campers.length) {
    return <p className={css.message}>No campers found.</p>;
  }

  return (
    <ul className={css.campersList}>
      {campers.map((item) => (
        <CamperCard key={item.id} camper={item} />
      ))}
    </ul>
  );
};

export default CampersList;
