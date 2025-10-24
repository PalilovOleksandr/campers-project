'use client';

import { Camper } from '@/lib/api/api';
import Image from 'next/image';
import css from './CamperCard.module.css';

type CamperCardProps = {
  camper: Camper;
};

const CamperCard = ({ camper }: CamperCardProps) => {
  return (
    <li className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={camper.gallery[0]?.original}
          alt={`Camper ${camper.name}`}
          width={292}
          height={320}
          className={css.image}
        ></Image>
      </div>
    </li>
  );
};

export default CamperCard;
