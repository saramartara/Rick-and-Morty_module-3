// import { checkPropTypes } from 'prop-types';
import React from 'react';

const Filters = (props) => {

  const handleChange = (ev) => {
    props.handleFilter(ev.target.value)
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  } 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" onChange={handleChange}/>
    </form>
  );
};
export default Filters;
