import axios from 'axios';
import { Camper, CampersListResponse } from '@/types/camper';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

interface getCampersProps {
  page?: number;
  limit?: number;
  location?: string;
  vehicleType?: string;
  equipment?: string[];
}

export const getCampers = async ({
  page = 1,
  limit = 4,
  location,
  vehicleType,
  equipment,
}: getCampersProps): Promise<CampersListResponse> => {
  try {
    const params: Record<string, string | number> = { page, limit };

    if (location) params.location = location;
    if (vehicleType) params.vehicleType = vehicleType;
    if (equipment?.length) params.equipment = equipment.join(',');

    const { data } = await axios.get<CampersListResponse>('/campers', {
      params,
    });

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to retrieve the list of campers.');
  }
};

export const getCamperById = async (id: number): Promise<Camper> => {
  try {
    const { data } = await axios.get<Camper>(`/campers/${id}`);
    return data;
  } catch {
    throw new Error('Unable to retrieve camper. It might not exist.');
  }
};
