import { useField, ErrorMessage } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input
        className='form-control shadow-none'
        autoComplete='off'
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} />
    </div>
  );
};
