import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      <label htmlFor="filter">Filter</label>
      <input
        id="filter"
        name="filter"
        onChange={(event) => dispatch(setFilter(event.target.value))}></input>
    </div>
  );
};

export default Filter;
