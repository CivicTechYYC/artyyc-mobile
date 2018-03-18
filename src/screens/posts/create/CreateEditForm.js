import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base'
import { ImagePicker } from 'expo';
const CryptoJS = require('crypto-js');
import axios from 'axios';

import { Form } from '../../../components';
import { FloatingLabelInput } from '../../../components/inputs';

import validateForm from './validate';
import cloudinaryConfig from '../../../config/cloudinary';

const imagePickerOptions = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

// Take an image from user's phone, upload it to Cloudinary
// https://cloudinary.com/documentation/image_upload_api_reference#upload
async function uploadImage(uri, name='image') {
  const timestamp = (Date.now() / 1000 | 0).toString();
  const { api_key, api_secret, cloud_name } = cloudinaryConfig;
  const hash_string = 'timestamp=' + timestamp + api_secret;
  const signature = CryptoJS.SHA1(hash_string).toString();
  const uploadURL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const formData = new FormData();
  formData.append('file', {uri, type: 'image/png', name: `${name}.png`});
  formData.append('public_id', name)
  formData.append('timestamp', timestamp);
  formData.append('api_key', api_key);
  formData.append('signature', signature);

  console.log('formData', formData)
  console.log('uploadURL', uploadURL)

  return await axios.post(uploadURL, formData)
  .then(res => {
    console.log('axios response', res)
    return res;
  })
  .catch(err => console.log('Error uploading to cloudinary', err))
}

class CreateEditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('getting location')
    navigator.geolocation.getCurrentPosition((geoInfo) => {
      console.log(geoInfo);
      this.props.actions.setPostLocation(geoInfo);
    });
  }

  async _pickImage () {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    const response = await uploadImage(result.uri);

    if (!result.cancelled) {
      this.setState({ image: {
        source: response.data.secure_url,
      }});
    }
  }

  handleSubmit(values) {
    this.props.actions.createOrUpdatePost(values)
  }

  render() {
    const initialValues = this.props.initialValues;
    let { image } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        {initialValues.id && (
          <Field
            style={{ display: 'none' }}
            component={FloatingLabelInput}
            name="id"
          />
        )}
        {this.state.image && (
          <Field
            style={{ display: 'none' }}
            component={FloatingLabelInput}
            name="image"
            value={this.state.image}
          />
        )}
        <Field
          component={FloatingLabelInput}
          name="title"
          label="Title"
        />
        <Field
          component={FloatingLabelInput}
          name="artist"
          label="Artist"
        />
        <Field
          component={FloatingLabelInput}
          name="yearCreated"
          label="Year Created"
        />
        <Field
          component={FloatingLabelInput}
          name="owner"
          label="Owner"
        />
        <Field
          component={FloatingLabelInput}
          name="medium"
          label="Medium"
        />
        <Field
          component={FloatingLabelInput}
          name="shortDesc"
          label="Short Description"
        />
        <Field
          component={FloatingLabelInput}
          name="longDesc1"
          label="Long Description"
        />
        <Field
          component={FloatingLabelInput}
          name="purchaseValue"
          label="Purchase Value"
        />
        {!image && (
          <Button onPress={() => this._pickImage()}>
            <Text>Upload Photo </Text>
          </Button>
        )}
        {image && (
          <Image source={{uri: image.source}} style={styles.image}/>
        )}
        <Button type='submit'>
          <Text>Submit</Text>
        </Button>
      </Form>
    );
  }
};

const styles = {
  image: {
      width: 200,
      height: 200,
      padding: 10
    }
}

CreateEditPostForm.propTypes = {
};

CreateEditPostForm.defaultProps = {
  initialValues: {},
};

export default reduxForm({
  form: 'createEditPost',
  validate: validateForm,
})(CreateEditPostForm);

