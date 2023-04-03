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
    $appointmentDate: String!
    $time: String!
    $description: String!
    $duration: String!
  ) {
    addAppointment(
      firstNamePat: $firstNamePat
      lastNamePat: $lastNamePat
      emailPat: $emailPat
      phone: $phone
      appointmentDate: $appointmentDate
      time: $time
      description: $description
      duration: $duration
    ) {
      _id
      firstNamePat
      lastNamePat
      emailPat
      phone
      appointmentDate
      time
      description
      duration
    }
  }
`;
