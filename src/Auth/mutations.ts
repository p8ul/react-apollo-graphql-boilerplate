import { gql } from '@apollo/client';

export const tokenAuthMutation = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;
