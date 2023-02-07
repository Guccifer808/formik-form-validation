import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const SignUp = () => {
  const formValidation = Yup.object({
    firstName: Yup.string()
      .max(16, 'Maximum 16 characters')
      .required('Required field'),
    lastName: Yup.string()
      .max(20, 'Maximum 20 characters')
      .required('Required field'),
    email: Yup.string().email('Invalid Email').required('Required field'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters')
      .required('Required field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Please use same password ')
      .required('Required field'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastNane: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={formValidation}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <div>
          <h1 className='my-4 font-weight-display-4'>Sign Up</h1>
          <Form>
            <TextField label='First Name' name='firstName' type='text' />
            <TextField label='Last Name' name='lastName' type='text' />
            <TextField label='Email' name='email' type='email' />
            <TextField label='Password' name='password' type='password' />
            <TextField
              label='Confirm Password'
              name='confirmPassword'
              type='password'
            />
            <button className='btn btn-dark mt-3' type='submit'>
              Sign Up
            </button>
            <button className='btn btn-danger mt-3 ms-3' type='reset'>
              Clear Form
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
