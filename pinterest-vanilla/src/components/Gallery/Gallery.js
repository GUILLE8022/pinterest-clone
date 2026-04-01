import "./Gallery.css";
import { createImageCard } from "../ImageCard/ImageCard";

export const renderImages = (container, images) => {
  container.innerHTML = "";
  container.className = "gallery";

  if (!images.length) {
    showMessage(container, "No hay resultados");
    return;
  }

  images.forEach((img) => {
    container.appendChild(createImageCard(img));
  });
};

export const showMessage = (container, text) => {
  container.innerHTML = `<p class="message">${text}</p>`;
};