import "./ImageCard.css";

export const createImageCard = (image) => {

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = image.urls.small;
  img.alt = image.alt_description || "imagen";

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  // BOTÓN
  const visit = document.createElement("a");
  visit.className = "visit";
  visit.textContent = "Visitar";
  visit.href = image.links.html;
  visit.target = "_blank";

  // LIKES
  const stats = document.createElement("div");
  stats.className = "stats";
  stats.textContent = `❤️ ${image.likes}`;

  overlay.appendChild(visit);
  overlay.appendChild(stats);

  // USUARIO
  const user = document.createElement("div");
  user.className = "user";

  const avatar = document.createElement("img");
  avatar.src = image.user.profile_image.small;

  const name = document.createElement("span");
  name.textContent = image.user.name;

  user.appendChild(avatar);
  user.appendChild(name);

  card.appendChild(img);
  card.appendChild(overlay);
  card.appendChild(user);

  return card;
};