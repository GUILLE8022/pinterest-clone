import axios from "axios";

const API_URL = "https://api.unsplash.com";

export const searchImages = async (query) => {
  const response = await axios.get(`${API_URL}/search/photos`, {
    params: {
      query: query,
      per_page: 30
    },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`
    }
  });

  return response.data.results;
};

export const getRandomImages = async () => {
  const response = await axios.get(`${API_URL}/photos/random`, {
    params: {
      count: 30
    },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`
    }
  });

  return response.data;
};