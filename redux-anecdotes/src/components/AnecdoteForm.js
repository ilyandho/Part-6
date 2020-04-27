import React from 'react';
import { useDispatch } from 'react-redux';

import { create } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnec = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = '';
    if (anecdote) dispatch(create(anecdote));
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

export default AnecdoteForm;
