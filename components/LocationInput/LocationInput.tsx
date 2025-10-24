import css from './LocationInput.module.css';

const LocationInput = () => {
  return (
    <div className={css.container}>
      <label className={css.label}>
        Location
        <input type="text" placeholder="Kyiv, Ukraine" className={css.input} />
        <svg className={css.svg}>
          <use href="/icons/sprite.svg#map"></use>
        </svg>
      </label>
    </div>
  );
};

export default LocationInput;
