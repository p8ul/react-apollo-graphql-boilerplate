import { useApolloClient, useMutation } from '@apollo/client';
import { Formik } from 'formik';
import React from 'react';
import LoginPage, { ILoginProps } from '../components/LoginPage';
import { LOGIN_CREDENTIALS } from '../constants';
import { tokenAuthMutation } from '../mutations';
import { TokenAuth, TokenAuthVariables } from '../types/TokenAuth';
import { setToken } from '../utils';
import { validationSchema } from '../validation';

interface IProps {}

const Login: React.FC<IProps> = () => {
  const apolloClient = useApolloClient();
  const [tokenAuth] = useMutation<TokenAuth, TokenAuthVariables>(
    tokenAuthMutation,
    {
      client: apolloClient,
      onCompleted: (result) => {
        console.warn(result);
      },
      onError: (error) => {
        console.warn(error, 'onError');
      },
    }
  );

  const handleSubmit = async ({ email, password }: ILoginProps) => {
    const res = await tokenAuth({ variables: { email, password } });
    const data = res && res.data && res.data.tokenCreate;
    const token = data?.token;
    token && setToken(token);

    if (token) {
      alert('Logged In Successfully.');
    } else {
      alert('Error logging in!');
    }
  };
  return (
    <Formik
      initialValues={{
        email: LOGIN_CREDENTIALS.email,
        password: LOGIN_CREDENTIALS.password,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => await handleSubmit(values)}
    >
      {(formBag) => <LoginPage formBag={formBag} />}
    </Formik>
  );
};

export default Login;
