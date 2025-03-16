import axios, { AxiosResponse } from 'axios';
import { GetImagesData } from './api.types';

const ACCESS_KEY = 'QFIFObHsGEZD64hH4VM_Clf8ZOkb6DPFGOm3GiPWsi8';
const BASE_URL = 'https://api.unsplash.com/';
axios.defaults.baseURL = BASE_URL;

const perPage: number = 12;

export const getImages = async (
  page: number,
  query: string
): Promise<GetImagesData> => {
  const params = new URLSearchParams({
    client_id: ACCESS_KEY,
    per_page: perPage.toString(),
    page: page.toString(),
    query,
    orientation: 'landscape',
  });

  const response: AxiosResponse<GetImagesData> = await axios.get(
    '/search/photos',
    {
      params,
    }
  );

  return response.data;
};
