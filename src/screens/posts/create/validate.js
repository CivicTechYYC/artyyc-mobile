import Joi from 'joi-browser';

import formValidator from '../../../helpers/form-validation';

const validateSignUp = (values) => {
  const formSchema = Joi.object().keys({
    id: Joi
      .string()
      .optional(),
    title: Joi
      .string()
      .min(3)
      .max(30)
      .required(),
    description: Joi
      .string()
      .required(),
    status: Joi
      .string()
      .valid(['active', 'published', 'Draft'])
      .required(),
  });

  return formValidator(formSchema, values);
};

export default validateSignUp;
