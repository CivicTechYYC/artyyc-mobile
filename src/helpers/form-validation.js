const Joi = require('joi-browser');

const handleValidationResult = (errors) => {
  const validationErrors = {};
  if (errors) {
    // eslint-disable-next-line array-callback-return
    errors.details.map((error) => {
      validationErrors[error.path] = error.message;
    });
  }
  return validationErrors;
};


export default (schema, values) => Joi
  .validate(values, schema, { abortEarly: false }, handleValidationResult);
