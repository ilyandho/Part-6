import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { removeNotification } from '../reducers/notificationReducer';

const Notification = ({ notification, style, removeNotification }) => {
  useEffect(() => {
    const timer = setTimeout(() => removeNotification(), 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification]);

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
