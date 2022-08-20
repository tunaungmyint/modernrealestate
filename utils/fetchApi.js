import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '5f5b242b80msh5797df31d274e8ep1a1d89jsn633d6646642a',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
  return data;
};
