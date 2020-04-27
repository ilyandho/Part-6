const innitialNotification = '';
const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1,
  display: 'none',
};
const notificationReducer = (state = innitialNotification, action) => {
  switch (action.type) {
    case 'VOTE':
      return {
        notification: `You voted  '${action.data.anecdote.content}'`,
        style: { ...style, display: '' },
      };
    case 'REMOVE':
      return { notification: innitialNotification, style };
    default:
      console.log('default notification');
      return { notification: innitialNotification, style };
  }
};

export const removeNotification = () => {
  return async (dispatch) => dispatch({ type: 'REMOVE' });
};

export default notificationReducer;
