import { create } from 'zustand';
import { getCampers } from '@/lib/api/api';
import { Camper, CampersListResponse } from '@/types/camper';

interface Filters {
  location?: string;
  vehicleType?: string;
  equipment?: string[];
}

interface CamperStore {
  campers: Camper[];
  isLoading: boolean;
  error: string | null;
  filters: Filters;

  setFilters: (filters: Filters) => void;
  fetchCampers: () => Promise<void>;
}

export const useCamperStore = create<CamperStore>((set, get) => ({
  campers: [],
  isLoading: false,
  error: null,
  filters: {},

  setFilters: (filters) => set({ filters }),

  fetchCampers: async () => {
    const { filters } = get();
    set({ isLoading: true, error: null });

    try {
      const data: CampersListResponse = await getCampers({
        page: 1,
        limit: 4,
        location: filters.location,
        vehicleType: filters.vehicleType,
        equipment: filters.equipment,
      });

      const campers = Array.isArray(data) ? data : (data.items ?? []);

      set({ campers, isLoading: false });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load campers';
      set({ error: errorMessage, isLoading: false });
    }
  },
}));
