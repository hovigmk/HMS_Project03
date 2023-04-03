// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";

// import { ADD_APPOINTMENT } from "../utils/mutations";
// import { QUERY_APPOINTMENTS, QUERY_ME } from "../utils/queries";

// import Auth from "../utils/auth";
// // import Calendar from "./Calendar";

// const AppointmentForm = () => {
//   const [firstNamePat, setfirstNamePat] = useState("");
//   const [lastNamePat, setlastNamePat] = useState("");
//   const [emailPat, setEmailPat] = useState("");
//   const [appointmentDate, setappointmentDate] = useState("");
//   const [time, settime] = useState("");
//   const [phone, setphone] = useState("");
//   const [description, setdescription] = useState("");
//   const [duration, setduration] = useState("");

//   const [characterCount, setCharacterCount] = useState(0);

//   const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT, {
//     update(cache, { data: { addAppointment } }) {
//       try {
//         const { appointments } = cache.readQuery({ query: QUERY_APPOINTMENTS });

//         cache.writeQuery({
//           query: QUERY_APPOINTMENTS,
//           data: { appointments: [addAppointment, ...appointments] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       // update me object's cache
//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: {
//           me: { ...me, appointments: [...me.appointments, addAppointment] },
//         },
//       });
//     },
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addAppointment({
//         variables: {
//           firstNamePat,
//           lastNamePat,
//           // Auth.getProfile().data.username,
//           emailPat,
//           phone,
//           appointmentDate,
//           time,
//           description,
//           duration,
//         },
//       });

//       setfirstNamePat("");
//       setlastNamePat("");
//       setEmailPat("");
//       setphone("");
//       setappointmentDate("");
//       settime("");
//       setdescription("");
//       setduration("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "description" && value.length <= 280) {
//       setdescription(value);
//       setCharacterCount(value.length);
//     }
//   };

//   return (
//     <div>
//       <h3>Book an Appointment Here</h3>

//       {Auth.loggedIn() ? (
//         <>
//           <p
//             className={`m-0 ${
//               characterCount === 280 || error ? "text-danger" : ""
//             }`}
//           >
//             Character Count: {characterCount}/280
//           </p>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="firstNamePat"
//                 placeholder="firstname"
//                 value={firstNamePat}
//                 className="form-input w-100"
//                 style={{ lineHeight: "1.5", resize: "vertical" }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="lastNamePat"
//                 placeholder="lastName"
//                 value={lastNamePat}
//                 className="form-input w-100"
//                 style={{ lineHeight: "1.5", resize: "vertical" }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="emailPat"
//                 placeholder="email"
//                 value={emailPat}
//                 className="form-input w-100"
//                 style={{ lineHeight: "1.5", resize: "vertical" }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="phone"
//                 placeholder="phone number"
//                 value={phone}
//                 className="form-input w-100"
//                 style={{ lineHeight: "1.5", resize: "vertical" }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="col-12 col-lg-9">
//               {/* <Calendar value={appointmentDate} /> */}
//               <textarea
//                 name="Date"
//                 placeholder="Pick a Date"
//                 value={appointmentDate}
//                 className="form-input w-100"
//                 style={{ lineHeight: "1.5", resize: "vertical" }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="time"
//                 placeholder="time"
//                 value={time}
//                 className="form-input w-100"
//                 style={{ lineHeight: "1.5", resize: "vertical" }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="Description"
//                 placeholder="Reason for appointment"
//                 value={description}
//                 className="form-input w-100"
//                 style={{ lineHeight: "1.5", resize: "vertical" }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label>Duration</label>
//               <select
//                 onChange={handleChange}
//                 className="form-control"
//                 value={this.state.duration}
//               >
//                 <option value="15">15 min</option>
//                 <option value="30">30 min</option>
//                 <option value="45">45 min</option>
//                 <option value="60">60 min</option>
//               </select>
//             </div>

//             <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Add Appointment
//               </button>
//             </div>
//             {error && (
//               <div className="col-12 my-3 bg-danger text-white p-3">
//                 {error.message}
//               </div>
//             )}
//           </form>
//         </>
//       ) : (
//         <p>
//           You need to be logged in to Book an Appointment. Please{" "}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
//     </div>
//   );
// };

// export default AppointmentForm;

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../utils/mutations";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import Auth from "../utils/auth";

const AppointmentForm = () => {
  const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);
  const [appointmentInput, setAppointmentInput] = useState({
    firstNamePat: "",
    lastNamePat: "",
    emailPat: "",
    phone: "",
    appointmentDate: "",
    time: "",
    description: "",
    duration: "",
  });
  const userToken = Auth.getProfile();
  const userId = userToken.data._id;
  const handleFormSubmit = async (appointment) => {
    appointment.preventDefault();
    try {
      console.log({
        variables: {
          firstNamePat: appointmentInput.firstNamePat,
          lastNamePat: appointmentInput.lastNamePat,
          emailPat: appointmentInput.emailPat,
          appointmentDate: appointmentInput.appointmentDate,
          time: appointmentInput.time,
          description: appointmentInput.description,
          duration: appointmentInput.duration,
        },
      });
      await addAppointment({
        variables: {
          firstNamePat: appointmentInput.firstNamePat,
          lastNamePat: appointmentInput.lastNamePat,
          emailPat: appointmentInput.emailPat,
          appointmentDate: appointmentInput.appointmentDate,
          time: appointmentInput.time,
          description: appointmentInput.description,
          duration: appointmentInput.duration,
          userId: userId,
        },
      });
      setAppointmentInput({
        firstNamePat: "",
        lastNamePat: "",
        emailPat: "",
        phone: "",
        appointmentDate: "",
        time: "",
        description: "",
        duration: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-light bg-dark p-5">
      <Container>
        <h1>Add an Appointment</h1>
        <Form onSubmit={handleFormSubmit}>
          <Row>
            <Col xs={12} md={8}>
              <Form.Control
                name="firstName"
                value={appointmentInput.firstNamePat}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    firstNamePat: e.target.value,
                  })
                }
                type="text"
                size="lg"
                placeholder="First Name"
                required
              />
              <Form.Control
                name="lastName"
                value={appointmentInput.lastNamePat}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    lastNamePat: e.target.value,
                  })
                }
                type="text"
                size="lg"
                placeholder="Last Name"
                required
              />
              <Form.Control
                name="email"
                value={appointmentInput.emailPat}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    cost: e.target.value,
                  })
                }
                type="number"
                size="lg"
                placeholder="Email"
                step="0.01"
                min="0"
                required
              />
              <Form.Control
                name="phone"
                value={appointmentInput.phone}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    location: e.target.value,
                  })
                }
                type="text"
                size="lg"
                placeholder="Phone Number"
                required
              />
              <Form.Control
                name="date"
                value={appointmentInput.appointmentDate}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    date: e.target.value,
                  })
                }
                type="datetime-local"
                size="lg"
                placeholder="Appointment Date"
                required
              />
              <Form.Control
                name="time"
                value={appointmentInput.time}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    date: e.target.value,
                  })
                }
                type="datetime-local"
                size="lg"
                placeholder="Appointment Time"
                required
              />
              <Form.Control
                name="date"
                value={appointmentInput.description}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    date: e.target.value,
                  })
                }
                type="datetime-local"
                size="lg"
                placeholder="Reason for the Appointment"
                required
              />
              <Form
                name="date"
                value={appointmentInput.duration}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    date: e.target.value,
                  })
                }
                type="datetime-local"
                size="lg"
                placeholder="Appointment Duration"
                required
              />

              <Button type="submit" variant="success" size="lg">
                Create Event
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default AppointmentForm;
