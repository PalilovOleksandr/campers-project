import axios from 'axios';
import { Camper, CampersListResponse } from '@/types/camper';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

interface getCampersProps {
  page: number;
  limit: number;
}

export const getCampers = async ({
  page,
  limit = 4,
}: getCampersProps): Promise<CampersListResponse> => {
  try {
    const { data } = await axios.get<CampersListResponse>('/campers', {
      params: { page, limit },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      'Unable to retrieve the list of campers. Please try again later.'
    );
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
