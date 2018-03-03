import React from 'react';
import PropTypes from 'prop-types';

import { Text, Body, ListItem, Thumbnail, Right } from 'native-base';
// import { Text, Button, Body, ListItem, Body } from '../../../components';

const PostListItem = ({ post, navigation }) => (
  <ListItem key={post.id}>
    <Thumbnail square size={80} source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=40' }} />
    <Body>
      <Text>{post.title}</Text>
      <Text note>{post.description}</Text>
    </Body>
    <Right>
      <Text onPress={() => navigation.navigate('CreateEditPost', { id: post.id })}>{post.status}</Text>
    </Right>
  </ListItem>
);

PostListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PostListItem;
