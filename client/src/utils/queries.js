import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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

export const QUERY_PATIENTS = gql`
  query getPatients {
    patients {
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

// export const QUERY_SINGLE_PATIENT = gql`
//   query getSingleThought($patientId: ID!) {
//     thought(patientId: $patientId) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }
//     }
//   }
// `;

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
      }
    }
  }
`;
