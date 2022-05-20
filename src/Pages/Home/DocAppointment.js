import React from "react";
import appointment from "../../../src/assets/images/appointment.png";
import doctor from "../../../src/assets/images/doctor.png";

const DocAppointment = () => {
  return (
    <div>
      <div
        className="hero px-12 mt-[100px] "
        style={{ backgroundImage: `url(${appointment})` }}
      >
        <div className="flex items-center flex-col lg:flex-row-reverse">
          <div className=" text-white">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
          <div className="w-1/2 hidden lg:block"> 
            <img src={doctor} className="mt-[-100px] max-w-sm rounded-lg w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocAppointment;
