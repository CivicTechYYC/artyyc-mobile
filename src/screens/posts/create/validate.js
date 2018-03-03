import Joi from 'joi-browser';

import formValidator from '../../../helpers/form-validation';

const validateSignUp = (values) => {
  const formSchema = Joi.object().keys({
    artId: Joi
      .string()
      .optional(),
    tabName: Joi
      .string()
      .optional(),
    title: Joi
      .string()
      .min(3)
      .max(30)
      .required(),
    artist: Joi
      .string()
      .min(0)
      .max(30)
      .required(),
    address: Joi
      .string()
      .min(0)
      .max(30)
      .optional(),
    shortDesc: Joi
      .string()
      .min(10)
      .max(150),
    longDesc1: Joi
      .string()
      .min(25)
      .max(1000),
    longDesc2: Joi
      .string()
      .min(25)
      .max(1000),
    longDesc3: Joi
      .string()
      .min(25)
      .max(1000),
    website: Joi
      .string()
      .min(25)
      .max(1000),
    longitude: Joi
      .string()
      .min(25)
      .max(1000),
    latitude: Joi
      .string()
      .min(25)
      .max(1000),
    website: Joi
      .string()
      .min(25)
      .max(1000),
    status: Joi
      .string()
      .valid(['active', 'published', 'Draft'])
      .required(),
  });

  return formValidator(formSchema, values);
};

export default validateSignUp;
