import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_APPOINTMENT } from "../utils/mutations";
import { QUERY_APPOINTMENTS, QUERY_ME } from "../utils/queries";

import Auth from "../../utils/auth";

const AppointmentForm = () => {
  const [firstNamePat, setfirstNamePat] = useState("");
  const [lastNamePat, setlastNamePat] = useState("");
  const [emailPat, setEmailPat] = useState("");
  const [appointmentDate, setappointmentDate] = useState("");
  const [time, settime] = useState("");
  const [phone, setphone] = useState("");
  const [description, setdescription] = useState("");
  const [duration, setduration] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT, {
    update(cache, { data: { addAppointment } }) {
      try {
        const { appointments } = cache.readQuery({ query: QUERY_APPOINTMENTS });

        cache.writeQuery({
          query: QUERY_APPOINTMENTS,
          data: { appointments: [addAppointment, ...appointments] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: {
          me: { ...me, appointments: [...me.appointments, addAppointment] },
        },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAppointment({
        variables: {
          firstNamePat,
          lastNamePat,
          // Auth.getProfile().data.username,
          emailPat,
          phone,
          appointmentDate,
          time,
          description,
          duration,
        },
      });

      setfirstNamePat("");
      setlastNamePat("");
      setEmailPat("");
      setphone("");
      setappointmentDate("");
      settime("");
      setdescription("");
      setduration("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "description" && value.length <= 280) {
      setdescription(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Book an Appointment Here</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="firstNamePat"
                placeholder="firstname"
                value={firstNamePat}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="lastNamePat"
                placeholder="lastName"
                value={lastNamePat}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="emailPat"
                placeholder="email"
                value={emailPat}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="phone"
                placeholder="phone number"
                value={phone}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Appointment
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AppointmentForm;
