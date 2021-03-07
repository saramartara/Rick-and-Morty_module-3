const FilterBySpecies = props => {

  const handleChange = ev => {
    props.handleFilter({
      key: 'species',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor="species">Filtra por especie</label>
      <select id="species" name="species" onChange={handleChange}>
        <option value="all">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
