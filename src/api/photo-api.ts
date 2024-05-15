import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhoto = async <T>(query: string, page: number): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get<T>(
    `search/photos?client_id=t4LK2huX2-sWCNvo9jm9fsQDcxQmjSTApwNgDYEzrBA&page=${page}&per_page=12&query=${query}`
  );
  return response.data;
};
