'use client';

import css from './Filters.module.css';

const Filters = () => {
  return (
    <div>
      <div className={css.container}>
        <label className={css.label}>
          Location
          <input
            type="text"
            placeholder="Kyiv, Ukraine"
            className={css.input}
          />
          <svg className={css.svg}>
            <use href="/icons/sprite.svg#map"></use>
          </svg>
        </label>
      </div>
      <div></div>
    </div>
  );
};

export default Filters;
