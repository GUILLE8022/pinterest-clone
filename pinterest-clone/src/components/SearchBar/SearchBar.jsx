import { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ onSearch }) => {

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    onSearch(query);

    setQuery(""); // limpia input
  };

  return (
    <form className="search" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Buscar imágenes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

    </form>
  );
};

export default SearchBar;