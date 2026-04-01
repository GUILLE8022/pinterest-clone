const API_KEY = import.meta.env.VITE_API_KEY;

export async function getRandomImages() {
  const res = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${API_KEY}`);
  return await res.json();
}

export async function searchImages(query) {
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${API_KEY}`);
  const data = await res.json();
  return data.results;
}