import React from "react";
import "./Search.css";
const Search = props => {
  return (
    <div className="search">
      <form onSubmit={props.submitSearch}>
        <input
          type="text"
          name="search"
          onChange={props.getSearch}
          value={props.search}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Search;
