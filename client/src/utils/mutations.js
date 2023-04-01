import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(emailDoc: $email, password: $password) {
      token
      user {
        _id
        firstNameDoc
        lastNameDoc
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstNameDoc: $firstName
      lastNameDoc: $lastName
      email: $email
      password: $password
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
