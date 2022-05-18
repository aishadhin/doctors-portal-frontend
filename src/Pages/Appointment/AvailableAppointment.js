import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {

  const [services, setService] = useState([]);
  const [treatment , setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
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
          <AppointmentService key={service._id} service={service} setTreatment = {setTreatment} ></AppointmentService>
        ))}
      </div>
      {treatment && <BookingModal date={date} setTreatment={setTreatment} treatment = {treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
