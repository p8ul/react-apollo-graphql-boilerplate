import { useApolloClient, useMutation } from '@apollo/client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import LoginPage from '../components/LoginPage';
import { LOGIN_CREDENTIALS } from '../constants';
import { tokenAuthMutation } from '../mutations';
import { TokenAuth, TokenAuthVariables } from '../types/TokenAuth';
import { getToken, setToken } from '../utils';

interface IProps {}

const Login: React.FC<IProps> = () => {
  const apolloClient = useApolloClient();
  const [tokenAuth] = useMutation<TokenAuth, TokenAuthVariables>(
    tokenAuthMutation,
    {
      client: apolloClient,
      onCompleted: (result) => {},
      onError: (error) => {
        console.warn(error, 'onError');
      },
    }
  );
  const [email, setEmail] = useState(LOGIN_CREDENTIALS.email);
  const [password, setPassword] = useState(LOGIN_CREDENTIALS.password);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const res = await tokenAuth({ variables: { email, password } });
    const data = res && res.data && res.data.tokenCreate;
    const user = data?.user;
    const token = data?.token;
    token && setToken(token)

    console.warn(user, getToken());
  };
  return (
    <LoginPage
      email={email}
      password={password}
      handleLogin={handleLogin}
      handleChange={handleChange}
    />
  );
};

export default Login;
