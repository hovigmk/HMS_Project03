const { AuthenticationError } = require("apollo-server-express");
const { User, Appointment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("appointments");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("appointments");
    },
    appointments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Appointment.find(params).sort({ createdAt: -1 });
    },
    appointment: async (parent, { appointmentId }) => {
      return Appointment.findOne({ _id: appointmentId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("appointments");
      }
      throw new AuthenticationError("You need to be logged in!");
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
    addAppointment: async (
      parent,
      { firstNamePat },
      { lastNamePat },
      { emailPat },
      { phone },
      { appointmentDate },
      { time },
      { description },
      { duration },
      context
    ) => {
      if (context.user) {
        const appointment = await Appointment.create({
          firstNamePat,
          lastNamePat,
          emailPat,
          phone,
          appointmentDate,
          time,
          description,
          duration,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { appointments: appointment._id } }
        );

        return appointment;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    //Remove patient from doctor's list
    removeAppointment: async (parent, { appointmentId }, context) => {
      if (context.user) {
        const appointment = await Appointment.findOneAndDelete({
          _id: appointmentId,
          lastNamePat: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { appointments: appointment._id } }
        );
        return appointment;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
