import "./ImageCard.css";

export const createImageCard = (image) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = image.urls.small;
  img.alt = image.alt_description || "imagen";

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const visit = document.createElement("a");
  visit.className = "visit-btn";
  visit.textContent = "Visitar";
  visit.href = image.links.html;
  visit.target = "_blank";

  const likes = document.createElement("div");
  likes.className = "likes";
  likes.textContent = `❤️ ${image.likes}`;

  const user = document.createElement("div");
  user.className = "user";

  const avatar = document.createElement("img");
  avatar.src = image.user.profile_image.small;

  const name = document.createElement("span");
  name.textContent = image.user.name;

  user.append(avatar, name);

  card.append(img, overlay, visit, likes, user);

  return card;
};