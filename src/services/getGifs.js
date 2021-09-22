import { API_KEY, API_URL } from "./settings";

export const getGifs = async (category) => {
    const url =
    `${API_URL}/gifs/search?q=${encodeURI(category)}&limit=20&api_key=${API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;
  };