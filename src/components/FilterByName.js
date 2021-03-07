const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor="name"> </label>
      <input
        className="input"
        type="text"
        value={props.userSearch}
        name="name"
        id="name"
        onChange={handleChange}
        placeholder="...busca un personaje"
      />
    </>
  );
};
export default FilterByName;
