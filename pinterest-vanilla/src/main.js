import "./Styles/global.css";
import { createHeader } from "./components/Header/Header";
import { createGallery } from "./components/Gallery/Gallery";
import { getImages } from "./services/unsplash";

const app = document.querySelector("#app");

// HEADER (una sola vez)
createHeader(renderImages, () => renderImages());

async function renderImages(query = "") {
  try {
    app.innerHTML = "<p>Cargando...</p>";

    const images = await getImages(query);

    if (!images || images.length === 0) {
      app.innerHTML = "<p>No hay imágenes </p>";
      return;
    }

    app.innerHTML = "";
    app.appendChild(createGallery(images));

  } catch (e) {
    app.innerHTML = "<p>Error cargando imágenes </p>";
  }
}

renderImages();