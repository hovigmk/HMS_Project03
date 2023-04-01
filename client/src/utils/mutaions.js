import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser( $firstname: String!, $lastname: String!, $email: String!,$password: String!
  ) {
    addUser( firstNameDoc: $firstname,lastNameDoc: $lastname, email: $email ,password: $password
    ) {
      token
      user {
        _id
        firstNameDoc
        lastNameDoc
      }
    }
  }
`;