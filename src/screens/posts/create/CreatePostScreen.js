import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import header from './CreatePostFormHeader';
import CreateEditForm from './CreateEditForm';
import { Alert, Button, Text, View } from '../../../components';

class CreatePostScreen extends Component {
  constructor(props) {
    super(props)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  static navigationOptions = header;

  _handleDelete(post) {
    const confirmAction = () => this.props.actions.deletePost(post);
    Alert({
      confirmAction,
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this post?',
    });
  }

  _handleSubmit(values) {
    console.log('submitting values')
    this.props.actions.createOrUpdatePost(values)
  }

  render() {
    return (
      <View>
        <CreateEditForm
          onSubmit={this._handleSubmit}
          initialValues={this.props.post}
        />
        {_.get(this.props, 'post.id', false) && (
          <Button
            transparent
            style={{ justifyContent: 'center' }}
            onPress={() => this._handleDelete(this.props.post)}
          ><Text>Delete post</Text>
          </Button>
        )}
      </View>
    );
  }
}

CreatePostScreen.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  actions: PropTypes.shape({
    createOrUpdatePost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
  }).isRequired,
};

CreatePostScreen.defaultProps = {
  post: {},
};

export default CreatePostScreen;
