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
    appointments: async () => {
      return Appointment.find().populate("user");
    },
    appointment: async (parent, { id }) => {
      return await Appointment.findById(id).populate("user");
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate("appointments");
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
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
    addAppointment: async (parent, args) => {
      console.log(args);
      const appointment = new Appointment(args);
      await appointment.save();

      const userId = appointment.user;
      const appointmentId = appointment._id;

      await User.updateOne(
        { _id: userId },
        { $push: { appointments: appointmentId } }
      );
      console.log(User);
      return appointment;
    },
    // updateAppointment: async (parent, { id, ...rest }) => {
    //   return await Appointment.findByIdAndUpdate(id, rest, {
    //     new: true,
    //   }).populate("user");
    // },
    removeAppointment: async (parent, { id }) => {
      await Appointment.findByIdAndRemove(id);
      return true;
    },
  },
};

module.exports = resolvers;
