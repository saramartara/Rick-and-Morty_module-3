import React from 'react';
import '../stylesheets/layout/_filter.scss';

const Filters = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={props.userSearch}
        name="name"
        id="name"
        onChange={handleChange}
        placeholder="...busca un personaje"
      />
    </form>
  );
};
export default Filters;
