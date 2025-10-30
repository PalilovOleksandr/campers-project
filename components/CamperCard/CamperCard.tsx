'use client';

import { Camper } from '@/lib/api/api';
import css from './CamperCard.module.css';
import Image from 'next/image';

type CamperCardProps = {
  camper: Camper;
};

const CamperCard = ({ camper }: CamperCardProps) => {
  return (
    <li className={css.card}>
      <div className={css.container}>
        <Image
          src={camper.gallery[0].thumb}
          alt="Photo camper"
          width={292}
          height={320}
          className={css.image}
        />
        <div>
          <div className={css.header}>
            <h2>{camper.name}</h2>
            <p>{camper.price.toFixed(2)}</p>
            <svg>
              <use href="/icons/sprite.svg#heart"></use>
            </svg>
          </div>
          <div className={css.infoWrapper}>
            <div className={css.info}>
              <div className={css.reviews}>
                <svg>
                  <use></use>
                </svg>
                <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
              </div>
              <div className={css.location}>
                <svg>
                  <use></use>
                </svg>
                <p>{camper.location}</p>
              </div>
            </div>
            <p>{camper.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CamperCard;
