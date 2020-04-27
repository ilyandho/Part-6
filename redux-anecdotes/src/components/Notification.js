import React from 'react';
import { connect } from 'react-redux';

import { removeNotification } from '../reducers/notificationReducer';

const Notification = ({ notification, style }) => {
  if (notification) {
    setTimeout(() => removeNotification(), 5000);
  }
  console.log(notification);

  return <div style={style}>{notification}</div>;
};

const mapStatetoProps = (state) => {
  return {
    notification: state.notification.notification,
    style: state.notification.style,
  };
};
const mapDispatchToProps = {
  removeNotification,
};

const connectedNotification = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Notification);
export default connectedNotification;
