import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: PhotoCamper[];
  reviews: ReviewsCamper[];
};

export type PhotoCamper = {
  thumb: string;
  original: string;
};

type ReviewsCamper = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type CampersListResponse = {
  total: number;
  items: Camper[];
};

export const getCampers = async () => {
  const res = await api.get<CampersListResponse>('/campers');
  return res.data;
};
