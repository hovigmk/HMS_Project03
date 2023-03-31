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

// export const ADD_USER = gql`
//   mutation addUser(
//     $firstname: String!
//     $lastname: String!
//     $email: String!
//     $password: String!
//   ) {
//     addUser(
//       firstNameDoc: $firstname
//       lastNameDoc: $lastname
//       email: $email
//       password: $password
//     ) {
//       token
//       user {
//         _id
//         firstNameDoc
//         lastNameDoc
//       }
//     }
//   }
// `;

// export const ADD_PATIENT = gql`
//   mutation addThought(
//     $patfirstname: String!
//     $patlastname: String!
//     $patemail: String!
//     $patphone: String!
//     $patappointment: String!
//   ) {
//     addPatient(
//       firstnamePat: $patfirstname
//       lastNamePat: $patlastname
//       emailPat: $patemail
//       phone: $patphone
//       appointmentDate: $patappointment
//     ) {
//       _id
//       firstnamePat
//       lastNamePat
//       emailPat
//       phone
//       appointmentDate
//     }
//   }
// `;
