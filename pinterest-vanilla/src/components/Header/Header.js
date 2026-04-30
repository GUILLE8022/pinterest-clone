import "./Header.css";

export const createHeader = (onSearch, reset) => {
  const header = document.querySelector("#header");
  header.innerHTML = ""; // 🔥 evita duplicados

  const container = document.createElement("div");
  container.className = "header-container";

  // LOGO
  const logo = document.createElement("button");
  logo.className = "logo";
  logo.textContent = "P";
  logo.onclick = reset;

  // NAV (semántico)
  const nav = document.createElement("nav");
  nav.className = "nav";

  ["Inicio", "Explorar", "Crear"].forEach((text, i) => {
    const btn = document.createElement("button");
    btn.textContent = text;

    if (i === 1) btn.classList.add("active");

    btn.onclick = () => {
      nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };

    nav.appendChild(btn);
  });

  // SEARCH
  const form = document.createElement("form");
  form.className = "search";

  const input = document.createElement("input");
  input.placeholder = "Buscar";

  form.appendChild(input);

  form.onsubmit = (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;

    onSearch(value);

    input.value = "";
  };

  // ICONOS
  const icons = document.createElement("div");
  icons.className = "icons";

  icons.innerHTML = `
    <button class="icon">🔔</button>
    <button class="icon">💬</button>
    <button class="icon profile">D</button>
  `;

  container.append(logo, nav, form, icons);
  header.appendChild(container);
};