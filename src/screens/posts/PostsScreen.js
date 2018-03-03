import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from '../../components';
import PostsListItem from './components/PostsListItem';

class PostsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const headerRight = (
      <Button
        style={{ marginRight: 10, width: 20, backgroundColor: 'transparent' }}
        transparent
        onPress={() => navigation.navigate('CreateEditPost')}
      >
        <Icon name="md-add" style={{ fontSize: 25, color: 'red' }} />
      </Button>
    );

    return {
      headerRight,
      title: 'List Posts',
    };
  }

  componentDidMount() {
    this.props.actions.retrieve();
  }

  render() {
    return (
      <Container>
        <Content>
          <List style={{ marginLeft: 0, paddingLeft: 0 }}>
            {this.props.posts.map(post => (
              <PostsListItem
                post={post}
                navigation={this.props.navigation}
                key={Math.random()}
              />
              ))}
          </List>
        </Content>
      </Container>
    );
  }
}

PostsScreen.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  actions: PropTypes.shape({
    retrieve: PropTypes.func.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PostsScreen;
