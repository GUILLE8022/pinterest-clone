import "./ImageCard.css";

export const createImageCard = (image) => {
  const card = document.createElement("div");
  card.className = "card";

  // IMAGEN
  const img = document.createElement("img");
  img.src = image.urls.small;

  // OVERLAY
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  // BOTÓN VISITAR (LINK REAL)
  const btn = document.createElement("a");
  btn.textContent = "Visitar";
  btn.href = image.links.html;
  btn.target = "_blank";
  btn.className = "visit-btn";

  overlay.appendChild(btn);

  // TOP BAR (likes + views)
  const topBar = document.createElement("div");
  topBar.className = "top-bar";

  const likes = document.createElement("span");
  likes.textContent = `❤️ ${image.likes || Math.floor(Math.random() * 500)}`;

  const views = document.createElement("span");
  views.textContent = `👁️ ${Math.floor(Math.random() * 5000)}`;

  topBar.append(likes, views);

  // USER
  const user = document.createElement("div");
  user.className = "user";

  const avatar = document.createElement("img");
  avatar.src = image.user.profile_image.small;

  const name = document.createElement("p");
  name.textContent = image.user.name;

  user.append(avatar, name);

  // APPEND
  card.append(img, overlay, topBar, user);

  return card;
};