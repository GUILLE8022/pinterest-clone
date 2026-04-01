import "./Header.css";

export const createHeader = (onSearch, reset) => {
  const header = document.createElement("header");
  header.className = "header";

  const logo = document.createElement("button");
  logo.className = "logo";
  logo.textContent = "P";

  logo.addEventListener("click", reset);

  const input = document.createElement("input");
  input.className = "search";
  input.placeholder = "Buscar imágenes...";

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      onSearch(input.value);
      input.value = ""; 
    }
  });

  header.appendChild(logo);
  header.appendChild(input);

  return header;
};