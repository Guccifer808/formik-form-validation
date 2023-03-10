import { useField, ErrorMessage } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='mt-4'>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && `is-invalid`
        }`}
        autoComplete='off'
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component='div' className='error' />
    </div>
  );
};
