import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchText.trim() === "") {
      navigate("/jobs");
    } else {
      navigate(`/jobs?title=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search jobs by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
