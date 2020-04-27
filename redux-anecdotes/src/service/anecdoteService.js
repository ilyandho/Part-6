const axios = require('axios');
const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const anecdotes = await axios.get(baseUrl);
  console.log('service', anecdotes.data);
  return anecdotes.data;
};

const create = async (anecdote) => {
  const getId = () => (100000 * Math.random()).toFixed(0);

  const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0,
    };
  };

  const newAnecdote = asObject(anecdote);
  const anecdotes = await axios.post(baseUrl, newAnecdote);
  console.log(anecdotes);
  return anecdotes.data;
};

module.exports = { getAll, create };
