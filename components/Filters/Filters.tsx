'use client';

import { useState } from 'react';
import css from './Filters.module.css';
import Button from '../UI/Buttons/Buttons';
import FilterGroup from '../FilterGroup/FilterGroup';
import { equipmentFilters, vehicleTypeFilters } from '@/public/data';
import { useCamperStore } from '@/lib/stores/camperStore';

const Filters = () => {
  const [location, setLocation] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState<string | null>(
    null
  );

  const { setFilters, fetchCampers } = useCamperStore();

  const toggleEquipment = (filter: string) => {
    setSelectedEquipment((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleVehicleType = (type: string) => {
    setSelectedVehicleType((prev) => (prev === type ? null : type));
  };

  const handleSearch = async () => {
    setFilters({
      location,
      vehicleType: selectedVehicleType || undefined,
      equipment: selectedEquipment,
    });

    await fetchCampers();
  };

  return (
    <aside className={css.container}>
      {/* Location */}
      <div className={css.location}>
        <label className={css.label}>
          Location
          <input
            type="text"
            placeholder="Kyiv, Ukraine"
            className={css.input}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <svg className={css.svg}>
            <use href="/icons/sprite.svg#map"></use>
          </svg>
        </label>
      </div>

      {/* Vehicle equipment */}
      <FilterGroup
        title="Vehicle equipment"
        filters={equipmentFilters}
        selected={selectedEquipment}
        onToggle={toggleEquipment}
      />

      {/* Vehicle type */}
      <FilterGroup
        title="Vehicle type"
        filters={vehicleTypeFilters}
        selected={selectedVehicleType ? [selectedVehicleType] : []}
        onToggle={toggleVehicleType}
      />

      <Button className={css.button} onClick={handleSearch}>
        Search
      </Button>
    </aside>
  );
};

export default Filters;
