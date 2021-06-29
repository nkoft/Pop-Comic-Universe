import "./Sort.css";

const Sort = (props) => {
  const handleSort = (event) => {
    props.handleSort(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">Sort By:</label>
      <select className="sort" onChange={handleSort}>
        <option className="option" value="title-ascending">
          &nbsp; Title, A-Z &nbsp;
        </option>
        <option value="title-descending">&nbsp; Title, Z-A &nbsp;</option>
      </select>
    </form>
  );
};

export default Sort;
