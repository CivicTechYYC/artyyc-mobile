import { StyleSheet } from 'react-native';

export default (globalStyles, componentStyles, componentProps) => {
  const propStyles = componentProps.style && typeof componentProps.style === 'object' ? componentProps.style : {};

  return StyleSheet.create({
    combined: {
      ...globalStyles,
      ...componentStyles,
      ...propStyles,
    },
  });
};
