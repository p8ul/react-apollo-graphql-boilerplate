import React, { ChangeEvent, FormEvent } from 'react';

export interface FormData {
  email: string;
  password: string;
}
interface IProps extends FormData {
  handleLogin: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginPage: React.FC<IProps> = ({
  handleLogin,
  handleChange,
  email,
  password,
}) => {
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <div>
            <label>Email:</label>
            <input
              value={email}
              type='text'
              name='email'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Password:</label>
            <input
              value={password}
              type='password'
              name='password'
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
