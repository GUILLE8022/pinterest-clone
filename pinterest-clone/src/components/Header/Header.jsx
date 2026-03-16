import SearchBar from "../SearchBar/SearchBar";
import "./header.css";

const Header = ({ onSearch, reset }) => {

  return (
    <header className="header">

      <div className="logo" onClick={reset}>
        P
      </div>

      <SearchBar onSearch={onSearch}/>

      <div className="icons">
        🔔
        💬
        👤
      </div>

    </header>
  );
};

export default Header;