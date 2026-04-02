import { createImageCard } from "../ImageCard/ImageCard.js";

export const renderImages = (container, images) => {
  container.innerHTML = "";

  container.className = "gallery";

  if (!images || images.length === 0) {
    container.innerHTML = "<p>No hay resultados 😢</p>";
    return;
  }

  images.forEach((img) => {
    const card = createImageCard(img);
    container.appendChild(card);
  });
};
