import React from 'react';
import { Image } from 'react-native';
import { View, Text } from 'native-base';

const logo = require('../../../assets/artmapyyc.png');

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: -40,
    marginLeft: -20,
    height: 100,
    overflow: 'visible',
  },
  logoText: {
    fontSize: 10,
    marginTop: 50,
  },
};

export default () => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.logoText}> logo "borrowed" from https://logojoy.com </Text>
    </View>
  );
};
