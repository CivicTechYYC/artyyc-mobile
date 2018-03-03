import Joi from 'joi-browser';

import formValidator from '../../helpers/form-validation';

const validateSignUp = (values) => {
  const formSchema = Joi.object().keys({
    displayName: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
  });

  return formValidator(formSchema, values);
};

export default validateSignUp;
