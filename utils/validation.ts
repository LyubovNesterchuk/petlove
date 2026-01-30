import * as yup from 'yup';

export const emailRegExp =
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const loginSchema = yup.object({
  email: yup
    .string()
    .matches(emailRegExp, 'Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Minimum 7 characters')
    .required('Password is required'),
});

export const registrationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(emailRegExp, 'Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Minimum 7 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});