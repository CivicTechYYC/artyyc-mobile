import Joi from 'joi-browser';

import formValidator from '../../../helpers/form-validation';

const validateUpload = (values) => {
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
      .max(30),
    artist: Joi
      .string()
      .min(0)
      .max(30),
    yearCreated: Joi
      .number()
      .min(1000)
      .max(2100)
      .optional(),
    owner: Joi
      .string()
      .min(0)
      .max(30),
    medium: Joi
      .string()
      .min(0)
      .max(30),
    address: Joi
      .string()
      .min(0)
      .max(30)
      .optional(),
    purchaseValue: Joi
      .number()
      .min(0)
      .max(9999999)
      .optional(),
    shortDesc: Joi
      .string()
      .min(0)
      .max(150),
    longDesc1: Joi
      .string()
      .min(0)
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
  });

  return formValidator(formSchema, values);
};

export default validateUpload;
