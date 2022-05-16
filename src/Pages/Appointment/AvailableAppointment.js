import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";

const AvailableAppointment = ({ date }) => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <p className="text-xl text-secondary text-center">
        Available appointment on {format(date, "PP")}.
      </p>

      <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AppointmentService key={service._id} service={service} ></AppointmentService>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
