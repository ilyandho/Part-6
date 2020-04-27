import React from 'react';
import { connect } from 'react-redux';

import { vote } from '../reducers/anecdoteReducer';

const AnecdoteList = ({ anecdotes, vote }) => {
  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote({ id: anecdote.id, anecdote })}>
          vote{' '}
        </button>
      </div>
    </div>
  ));
};

const mapStateToProps = (state) => {
  const sortByVotes = (array) => {
    return array.sort((a, b) => b.votes - a.votes);
  };

  // Filter and Sort
  let anecdotes =
    state.anecdotes.length === 0
      ? state.anecdotes
      : sortByVotes(
          state.anecdotes.filter((anecdote) =>
            anecdote.content.toLowerCase().includes(state.filter)
          )
        );

  return { anecdotes };
};
const matchDispatchToProps = {
  vote,
};
const connectedAnecdotes = connect(
  mapStateToProps,
  matchDispatchToProps
)(AnecdoteList);
export default connectedAnecdotes;
