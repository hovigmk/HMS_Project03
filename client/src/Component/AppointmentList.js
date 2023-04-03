import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_APPOINTMENTS } from "../utils/queries";
import hero from "../Source/Image/doctor.png";

const AppointmentList = () => {
  const { loading, data } = useQuery(QUERY_APPOINTMENTS);

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  const appointments = data.appointments;

  return <div>error</div>;
};

export default AppointmentList;
