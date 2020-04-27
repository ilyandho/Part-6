const innitialFilter = '';

const filterReducer = (state = innitialFilter, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data;
    default:
      return state;
  }
};

export const setFilter = (filter) => {
  return async (dispatch) => dispatch({ type: 'FILTER', data: filter });
};

export default filterReducer;
