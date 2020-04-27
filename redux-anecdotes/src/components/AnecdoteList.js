import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { vote, sortByVotes } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  let { anecdotes, filter } = useSelector((state) => state);

  // Filter
  anecdotes =
    anecdotes.length === 0
      ? anecdotes
      : anecdotes.filter((anecdote) =>
          anecdote.content.toLowerCase().includes(filter)
        );

  // Sort
  anecdotes = sortByVotes(anecdotes);

  // Action creator
  const voteAnec = (obj) => dispatch(vote(obj));

  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => voteAnec({ id: anecdote.id, anecdote })}>
          vote{' '}
        </button>
      </div>
    </div>
  ));
};

export default AnecdoteList;
