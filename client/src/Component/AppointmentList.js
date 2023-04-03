import React from "react";
import { Link } from "react-router-dom";

const AppointmentList = ({ appointments = [] }) => {
  if (!appointments.length) {
    return <h3>No appointments Yet</h3>;
  }

  return (
    <div>
      {appointments &&
        appointments.map((appointment) => (
          <div key={appointment._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {appointment.firstNamePat} commented{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {appointment.appointmentDate} and at {appointment.time}
                  </span>
                </h5>
                <p className="card-body">{appointment.description}</p>
              </div>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{appointment.description}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/appointments/${appointment._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AppointmentList;
