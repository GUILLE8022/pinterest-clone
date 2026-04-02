import "./ImageCard.css";

export const createImageCard = (img) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${img.urls.small}" alt="img" />

    <div class="overlay">
      <a href="${img.links.html}" target="_blank" class="visit">Visitar</a>

      <div class="info">
        <img src="${img.user.profile_image.small}" />
        <span>${img.user.name}</span>
      </div>

      <div class="stats">❤️ ${img.likes}</div>
    </div>
  `;

  return card;
};