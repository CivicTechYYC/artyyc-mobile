import Joi from 'joi-browser';

import formValidator from '../../helpers/form-validation';

const validateSignIn = (values) => {
  const formSchema = Joi.object().keys({
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

export default validateSignIn;
