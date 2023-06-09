import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_APPOINTMENT } from "../utils/queries";

const SingleAppointment = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { appointmentId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_APPOINTMENT, {
    // pass URL parameter
    variables: { appointmentId: appointmentId },
  });

  const appointment = data?.appointment || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {appointment.firstNamePat}
          {appointment.lastNamePat}
          {appointment.emailPat}
          {appointment.phone}
          {appointment.startDate}
          {appointment.endDate}
          {appointment.description}
          {appointment.createdAt}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleAppointment;
