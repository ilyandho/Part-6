import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeNotification } from '../reducers/notificationReducer';

const Notification = () => {
  const dispatch = useDispatch();

  const notificationStore = useSelector((state) => state.notification);
  const { style, notification } = notificationStore;

  if (notification) {
    setTimeout(() => dispatch(removeNotification()), 5000);
  }
  console.log(notification);

  return <div style={style}>{notification}</div>;
};

export default Notification;
