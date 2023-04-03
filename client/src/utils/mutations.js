import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment(
    $firstNamePat: String!
    $lastNamePat: String!
    $emailPat: String!
    $phone: String!
    $startDate: String!
    $endDate: String!
    $description: String!
  ) {
    addAppointment(
      firstNamePat: $firstNamePat
      lastNamePat: $lastNamePat
      emailPat: $emailPat
      phone: $phone
      startDate: $startDate
      endDate: $endDate
      description: $description
    ) {
      _id
      firstNamePat
      lastNamePat
      emailPat
      phone
      startDate
      endDate
      description
    }
  }
`;
