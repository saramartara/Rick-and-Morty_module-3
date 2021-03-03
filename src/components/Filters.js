import { checkPropTypes } from 'prop-types';
import React from 'react';

const Filters = (props) => {

  const handleChange = (ev) => {
    props.handleFilter(ev.target.value)
  };
  return (
    <form>
      <input type="text" name="name" id="name" onChange={handleChange}/>
    </form>
  );
};
export default Filters;
