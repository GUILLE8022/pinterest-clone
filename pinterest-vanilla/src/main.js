import "./styles/global.css";
import { createHeader } from "./components/Header/Header";
import { createGallery } from "./components/Gallery/Gallery";
import { searchImages, getRandomImages } from "./services/unsplash";

const app = document.querySelector("#app");

const renderImages = async (query) => {
  app.innerHTML = "";

  const images = query
    ? await searchImages(query)
    : await getRandomImages();

  const gallery = createGallery(images);
  app.appendChild(gallery);
};

const header = createHeader(renderImages, () => renderImages());

document.body.prepend(header);

// CARGA INICIAL
renderImages();