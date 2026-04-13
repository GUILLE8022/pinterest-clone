const API_KEY = import.meta.env.VITE_API_KEY;

export async function getImages(query = "") {
  try {
    const url = query
      ? `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${API_KEY}`
      : `https://api.unsplash.com/photos/random?count=30&client_id=${API_KEY}`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("Error API");

    const data = await res.json();

    return query ? data.results : data;

  } catch (error) {
    console.error(error);
    return null;
  }
}