import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($firstName: String!, $lastName: String!) {
    user(firstNameDoc: $firstName, lastNameDoc: $lastName) {
      _id
      firstNameDoc
      lastNameDoc
      patients {
        _id
        firstNamePat
        lastNamePat
        emailPat
        phone
        appointmentDate
      }
    }
  }
`;
export const QUERY_DOCTORS = gql`
  query user($firstName: String!, $lastName: String!) {
    user(firstNameDoc: $firstName, lastNameDoc: $lastName) {
      _id
      firstNameDoc
      lastNameDoc
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
      firstNameDoc
      lastNameDoc
      patients {
        _id
        firstNamePat
        lastNamePat
        emailPat
        phone
        appointmentDate
      }
    }
  }
`;
