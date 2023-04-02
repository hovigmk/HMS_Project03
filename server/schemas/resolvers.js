const { AuthenticationError } = require("apollo-server-express");
const { User, Patient } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //While doctor is logged in, get all doctors
    users: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.find({})
          .select("-__v -password")
          .populate("patients");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    //While doctor is logged in, get doctor by id
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });

        return userData;
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

  //Doctor login with email and password
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    //Add patient to doctor's list
    addPatient: async (parent, { patientData }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
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
        const updatedUser = await User.findOneAndUpdate(
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
