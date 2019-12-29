import React from "react";
const Search = props => {
  return (
    <div>
      <form onSubmit={props.submitSearch}>
        <label>Search</label>
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
