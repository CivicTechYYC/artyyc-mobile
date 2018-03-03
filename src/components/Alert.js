import { Alert as RNAlert } from 'react-native';

const Alert = (props) => {
  const { confirmAction, title, message } = props;
  return (
    RNAlert.alert(
      title || 'Confirm action',
      message || '',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: confirmAction },
      ],
      { cancelable: false },
    )
  );
};

export default Alert;
