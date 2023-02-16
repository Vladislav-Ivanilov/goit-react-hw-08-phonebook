import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handelSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handelSubmit}>
      <Form>
        <div>
          <label htmlFor="name">User name</label>
          <Field type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="text" name="password" id="password" />
        </div>
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
};
