import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { View } from 'react-native';
import { Button, Text } from 'native-base'
import { ImagePicker } from 'expo';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import fetch from 'fetch';


import { Form } from '../../../components';
import { FloatingLabelInput } from '../../../components/inputs';

import validateForm from './validate';

const imagePickerOptions = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class CreateEditPostForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('edit form constructor', props)
    this.state = {
      image: null,
    }

  }

  async _pickImage () {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    // Upload to cloudinary here
    const response = await fetch('http://res.cloudinary.com/dbeg0e56f/image/upload/w_150,h_100,c_fill/result.uri')
    
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  render() {
    console.log('image: ', this.state.image)
    const initialValues = this.props.initialValues;
    let { image } = this.state;
    return (
      <Form>
        {initialValues.id && (
          <Field
            style={{ display: 'none' }} // this need to be refactored!
            component={FloatingLabelInput}
            name="id"
          />
        )}
        <Field
          component={FloatingLabelInput}
          name="title"
          label="title"
        />
        <Field
          component={FloatingLabelInput}
          name="description"
          label="description"
        />
        <Button onPress={() => this._pickImage()}>
          <Text>Upload Photo </Text>
        </Button>
        {image &&
          <Image cloudName="demo" publicId="sample" width="300" crop="scale" />
        }
        <Button type='submit'>
          <Text>Submit</Text>
        </Button>
      </Form>
    );
  }
};

CreateEditPostForm.propTypes = {
  initialValues: PropTypes.obj,
};

CreateEditPostForm.defaultProps = {
  initialValues: {},
};

export default reduxForm({
  form: 'createEditPost',
  validate: validateForm,
})(CreateEditPostForm);

