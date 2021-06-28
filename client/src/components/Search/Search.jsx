import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <div className="search-container">
        <input
          className="search-input"
          value={props.value}
          onChange={(e) => props.handleSearch(e)}
          name="Search"
          placeholder="Search by Title"
          type="text"
          autoFocus
        />
      </div>
    </form>
  );
};

export default Search;
