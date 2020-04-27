import anecdoteService from '../service/anecdoteService';

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
    case 'INNIT':
      return action.data;
    case 'CREATE':
      return state.concat(action.data);

    case 'VOTE':
      const id = action.data.id;
      const anecdoteToVote = state.find((anecdote) => anecdote.id === id);
      const voted = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 };

      return state.map((anecdote) => (anecdote.id !== id ? anecdote : voted));
    default:
      return state;
  }
};

export const anecdoteInnitialiser = (data) => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({ type: 'INNIT', data: anecdotes });
  };
};
export const vote = (obj) => {
  return async (dispatch) => dispatch({ type: 'VOTE', data: obj });
};

export const create = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(anecdote);
    dispatch({ type: 'CREATE', data: newAnecdote });
  };
};

export const sortByVotes = (array) => {
  return array.sort((a, b) => b.votes - a.votes);
};
export default anecdoteReducer;
