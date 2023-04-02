const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    patients: [Patient]!
  }

  type Appointment {
    _id: ID!
    firstNamePat: String!
    lastNamePat: String!
    emailPat: String!
    phone: String!
    appointmentDate: String!
    time: String!
    description: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  // input PatientInput {
  //   firstName: String!
  //   lastName: String!
  //   email: String!
  //   phone: String!
  //   appointmentDate: String!
  //   time: String!
  //   description: String!
  // }

  type Query {
    users: [User]
    user(username: String!): User
    appointments(username: String): [Appointment]
    appointment(appointmentId: ID!): Appointment
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAppointment(appointmentDate: String!, time: String!, lastNamePat: String!): Appointment
    removeAppointment(appointmentId: ID!): Appointment
  }
`;

module.exports = typeDefs;
