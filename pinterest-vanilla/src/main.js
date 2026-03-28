const API_KEY = "e8Pl9SGyCJWsj6TJEUxcTGgG7hSlI-UBdUlA9b4x3VM";

const gallery = document.getElementById("gallery");
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const logo = document.getElementById("logo");


window.onload = loadImages;

async function loadImages() {
  try {
    const res = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${API_KEY}`);
    const data = await res.json();
    renderImages(data);
  } catch (error) {
    console.error("Error cargando imágenes:", error);
  }
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = input.value.trim();

  if (!query) return;

  try {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${API_KEY}`);
    const data = await res.json();

    renderImages(data.results);

    input.value = ""; 

  } catch (error) {
    console.error("Error en búsqueda:", error);
  }
});

logo.addEventListener("click", () => {
  gallery.innerHTML = "";
  loadImages();
});


function renderImages(images) {

  gallery.innerHTML = "";

  images.forEach(img => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${img.urls.small}" alt="${img.alt_description || 'imagen'}">

      <div class="user">
        <img src="${img.user.profile_image.small}" alt="${img.user.name}">
        <span>${img.user.name}</span>
      </div>
    `;

    gallery.appendChild(card);

  });

}