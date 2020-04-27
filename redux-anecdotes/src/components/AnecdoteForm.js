import React from 'react';
import {  connect } from 'react-redux';

import { create } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {

  const addAnec = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = '';
    if (anecdote) props.create(anecdote);
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const matchDispatchToProps = {
  create,
};

const connectedForm = connect(null, matchDispatchToProps)(AnecdoteForm);
export default connectedForm;
