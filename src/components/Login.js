import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css'; 

const LoginForm = ({ onLogin, onLogout, isAuthenticated }) => {
  const initialValues = {
    username: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password must contain at least 8 characters, one letter, one number, and one special character'
      ),
  });

  const handleSubmit = (values, { resetForm }) => {
    onLogin(values);
    resetForm();
  };

  return (
    <div className="card login-form">
      <h3>Login</h3>
      {isAuthenticated ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label htmlFor="rememberMe">Remember Me</label>
              <Field type="checkbox" name="rememberMe" />
            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default LoginForm;
