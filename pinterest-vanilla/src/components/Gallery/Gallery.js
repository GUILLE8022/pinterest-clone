import "./Gallery.css";
import { createImageCard } from "../ImageCard/ImageCard";

export const createGallery = (images) => {
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  images.forEach(img => {
    gallery.appendChild(createImageCard(img));
  });

  return gallery;
};