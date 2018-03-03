import React from 'react';
import { Container, Content, Button } from 'native-base';

import { Text } from '../../components';

const ProfileScreen = (props) => {
  return (
    <Container>
      <Content>
        <Text>Profile Coming Soon</Text>
        <Button onPress={() => props.actions.logoutUser()}>
          <Text>Logout</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default ProfileScreen;
