import { Field, Form, FormikProps } from 'formik';
import React from 'react';

export interface ILoginProps {
  email: string;
  password: string;
}
interface IProps {
  formBag: FormikProps<ILoginProps>;
}

const LoginPage: React.FC<IProps> = ({ formBag }) => {
  const { errors, touched, isSubmitting } = formBag;
  return (
    <div>
      <Form>
        <div>
          <Field type='email' name='email' placeholder='Email' />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </div>
        <div>
          <Field type='password' name='password' placeholder='Password' />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
        </div>
        <br />
        <div>
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
