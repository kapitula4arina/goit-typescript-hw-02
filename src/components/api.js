import axios from 'axios';

export let perPage = 12;
const ACCESS_KEY = 'QFIFObHsGEZD64hH4VM_Clf8ZOkb6DPFGOm3GiPWsi8';

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const getImages = async (page, query) => {
  const params = new URLSearchParams({
    client_id: ACCESS_KEY,
    per_page: perPage,
    page,
    query,
    orientation: 'landscape',
  });
  const response = await axios.get('/search/photos', { params });
  return response.data;
};
