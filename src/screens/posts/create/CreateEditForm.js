import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { Form } from '../../../components';
import { FloatingLabelInput } from '../../../components/inputs';

import validateForm from './validate';

const CreateEditPostForm = ({ initialValues = {} }) => {
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
      <Field
        component={FloatingLabelInput}
        name="status"
        label="status"
        last
      />
    </Form>
  );
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

