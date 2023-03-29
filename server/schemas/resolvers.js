const { AuthenticationError } = require("apollo-server-express");
const { Doctor, Patient } = require("../models");
const { authToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //While doctor is logged in, get all doctors
    doctors: async (parent, args, context) => {
      if (context.user) {
        const doctorData = await Doctor.find({})
          .select("-__v -password")
          .populate("patients");

        return doctorData;
      }

      throw new AuthenticationError("Not logged in");
    },
    //While doctor is logged in, get doctor by id
    doctor: async (parent, args, context) => {
      if (context.user) {
        const doctorData = await Doctor.findOne({ _id: context.user._id });

        return doctorData;
      }

      throw new AuthenticationError("Not logged in");
    },
    //While doctor is logged in, get patient by id
    patient: async (parent, args, context) => {
      if (context.user) {
        const patientData = await Patient.findOne({ _id: args._id });

        return patientData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    //Doctor login with email and password
    login: async (parent, { email, password }) => {
      const user = await Doctor.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = authToken(user);
      return { token, user };
    },
    //Signup mutation for new doctor
    addDoctor: async (parent, args) => {
      const user = await Doctor.create(args);

      const token = authToken(user);
      return { token, user };
    },
    //Add patient to doctor's list
    addPatient: async (parent, { patientData }, context) => {
      if (context.user) {
        const updatedUser = await Doctor.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { patients: patientData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    //Remove patient from doctor's list
    removePatient: async (parent, { patientId }, context) => {
      if (context.user) {
        const updatedUser = await Doctor.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { patients: { patientId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
