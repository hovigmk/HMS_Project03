const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Doctor {
        _id: ID!
        firstNameDoc: String!
        lastNameDoc: String!
        emailDoc: String!
        patients: [Patient]
    }

    type Patient {
        _id: ID!
        firstNamePat: String!
        lastNamePat: String!
        emailPat: String!
        phone: String!
        appointmentDate: Date
    }

    type Auth {
        token: ID!
        user: Doctor
    }

    input PatientInput {
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        appointmentDate: Date
    }

    type Query {
        doctors: [Doctor]
        doctor(_id: ID!): Doctor
        patient(_id: ID!): Patient
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addDoctor(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addPatient(patientData: PatientInput!): Doctor
        removePatient(patientId: ID!): Doctor
    }
`;

module.exports = typeDefs;