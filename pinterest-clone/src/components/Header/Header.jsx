import SearchBar from "../SearchBar/SearchBar";
import "./header.css";

const Header = ({ onSearch, reset }) => {
  return (
    <header className="header">

      <div className="logo" onClick={reset}>
        Pinterest
      </div>

      <SearchBar onSearch={onSearch} />

    </header>
  );
};

export default Header;