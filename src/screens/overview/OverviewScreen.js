import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text } from '../../components';
import Wrapper from '../components/UnAuthedWrapper';

const OverviewScreen = () => (
  <Wrapper>
    <Text bold>Overview</Text>
    <Icon name="rocket" size={30} color="#900" />
  </Wrapper>
);

export default OverviewScreen;
