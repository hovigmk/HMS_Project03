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

export const ADD_PATIENT = gql`
  mutation addPatient(
    $patFirstName: String!
    $patLastName: String!
    $patEmail: String!
    $patPhone: String
    $patAppointment: String!
    $patAppTime: String!
    $appDes: String!
  ) {
    addPatient(
      firstNamePat: $patFirstName
      lastNamePat: $patLastName
      emailPat: $patEmail
      phone: $patPhone
      appointmentDate: $patAppointment
      time: $patAppTime
      description: $appDes
    ) {
      _id
      firstNamePat
      lastNamePat
      emailPat
      phone
      appointmentDate
      time
      description
    }
  }
`;
