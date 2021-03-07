import React from 'react';
import '../stylesheets/layout/_filter.scss';
import FilterBySpecies from './FilterBySpecies';
import FilterByName from './FilterByName';

const Filters = (props) => {
 
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FilterByName handleFilter={props.handleFilter} />
      <FilterBySpecies handleFilter={props.handleFilter} />
    </form>
  );
};
export default Filters;
