import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = (props) => {
  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      <label htmlFor="filter">Filter</label>
      <input
        id="filter"
        name="filter"
        onChange={(event) => props.setFilter(event.target.value)}></input>
    </div>
  );
};

const mapDispatchToProps = {
  setFilter,
};

const connectedFilter = connect(null, mapDispatchToProps)(Filter);
export default connectedFilter;
