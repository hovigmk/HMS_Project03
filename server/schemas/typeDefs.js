const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    appointments: [Appointment]!
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
    duration: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    appointments: [Appointment]!
    appointment(appointmentId: ID!): Appointment
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAppointment(
      firstNamePat: String!
      lastNamePat: String!
      emailPat: String!
      phone: String!
      appointmentDate: String!
      time: String!
      description: String!
      duration: String!
    ): Appointment
    removeAppointment(appointmentId: ID!): Appointment
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
