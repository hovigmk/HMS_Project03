import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      appointments {
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
  }
`;
export const QUERY_USERS = gql`
  query getusers {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_APPOINTMENTS = gql`
  query getAppointments {
    appointments {
      _id
      firstNamePat
      lastNamePat
      emailPat
      phone
      appointmentDate
      time
      description
      duration
      createdAt
    }
  }
`;

export const QUERY_SINGLE_APPOINTMENT = gql`
  query getSingleAppointment($appointmentId: ID!) {
    appointment(appointmentId: $appointmentId) {
      _id
      firstNamePat
      lastNamePat
      emailPat
      phone
      appointmentDate
      time
      description
      duration
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      patients {
        _id
        firstNamePat
        lastNamePat
        emailPat
        phone
        appointmentDate
        time
        description
        duration
        createdAt
      }
    }
  }
`;
