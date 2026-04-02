import "./Header.css";

export const createHeader = (onSearch, reset) => {
  const header = document.createElement("header");

  // LOGO
  const logo = document.createElement("button");
  logo.textContent = "P";
  logo.className = "logo";
  logo.onclick = reset;

  // NAV
  const nav = document.createElement("div");
  nav.className = "nav";

  const btnInicio = document.createElement("button");
  btnInicio.textContent = "Inicio";
  btnInicio.classList.add("active");

  const btnExplorar = document.createElement("button");
  btnExplorar.textContent = "Explorar";

  const btnCrear = document.createElement("button");
  btnCrear.textContent = "Crear";

  nav.append(btnInicio, btnExplorar, btnCrear);

  // FORM
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.placeholder = "🔍 Buscar";

  form.appendChild(input);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;

    onSearch(value);
    input.value = "";
  });

  // ICONS
  const icons = document.createElement("div");
  icons.className = "icons";

  const bell = document.createElement("div");
  bell.className = "icon";
  bell.textContent = "🔔";

  const chat = document.createElement("div");
  chat.className = "icon";
  chat.textContent = "💬";

  const profile = document.createElement("div");
  profile.className = "icon";
  profile.textContent = "D";

  icons.append(bell, chat, profile);

  // APPEND
  header.append(logo, nav, form, icons);

  return header;
};