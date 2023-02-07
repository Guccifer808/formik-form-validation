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
          <h1 className='my-4 display-5 text-center'>Sign Up</h1>
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
            <div className='d-flex justify-content-between mt-4'>
              <button className='btn btn-danger' type='reset'>
                Clear Form
              </button>
              <button className='btn btn-success' type='submit'>
                Sign Up
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
