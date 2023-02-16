import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="text" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
