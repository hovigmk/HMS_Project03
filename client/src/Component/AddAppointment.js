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
    startDate: "",
    endDate: "",
    description: "",
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
          phone: appointmentInput.phone,
          startDate: appointmentInput.startDate,
          endDate: appointmentInput.endDate,
          description: appointmentInput.description,
        },
      });
      await addAppointment({
        variables: {
          firstNamePat: appointmentInput.firstNamePat,
          lastNamePat: appointmentInput.lastNamePat,
          emailPat: appointmentInput.emailPat,
          phone: appointmentInput.phone,
          startDate: appointmentInput.startDate,
          endDate: appointmentInput.endDate,
          description: appointmentInput.description,
          userId: userId,
        },
      });
      setAppointmentInput({
        firstNamePat: "",
        lastNamePat: "",
        emailPat: "",
        phone: "",
        startDate: "",
        endDate: "",
        description: "",
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
                    emailPat: e.target.value,
                  })
                }
                type="text"
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
                    phone: e.target.value,
                  })
                }
                type="number"
                size="lg"
                placeholder="Phone Number"
                required
              />
              <Form.Control
                name="date"
                value={appointmentInput.startDate}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    startDate: e.target.value,
                  })
                }
                type="datetime-local"
                size="lg"
                placeholder="Appointment Date"
                required
              />
              <Form.Control
                name="time"
                value={appointmentInput.endDate}
                onChange={(e) =>
                  setAppointmentInput({
                    ...appointmentInput,
                    endDate: e.target.value,
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
                    description: e.target.value,
                  })
                }
                type="text"
                size="lg"
                placeholder="Reason for the Appointment"
                required
              />

              <Button type="submit" variant="success" size="lg">
                Add Appointment
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default AppointmentForm;
