import "./styles/global.css";
import { createHeader } from "./components/Header/Header";
import { renderImages } from "./components/Gallery/Gallery";
import { getRandomImages, searchImages } from "./services/unsplash";

const app = document.getElementById("app");

const galleryContainer = document.createElement("div");

const loadImages = async () => {
  const data = await getRandomImages();
  renderImages(galleryContainer, data);
};

const handleSearch = async (query) => {
  const data = await searchImages(query);
  renderImages(galleryContainer, data);
};

const header = createHeader(handleSearch, loadImages);

app.appendChild(header);
app.appendChild(galleryContainer);

document.addEventListener("DOMContentLoaded", loadImages);