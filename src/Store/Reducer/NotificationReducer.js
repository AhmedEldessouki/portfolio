const NotificationReducer = (state,action) => {
  switch(action.type){
    case 'NOTIFICATION_DELETED':
      console.log('NOTIFICATION_DELETED');
      return null
    case 'NOTIFICATION_DELETE_ERROR':
      console.log('NOTIFICATION_DELETE_ERROR', action.err);
      return {
        notificationError: action.err.message
      };
    default:
      return null;
  }
};

export default NotificationReducer
