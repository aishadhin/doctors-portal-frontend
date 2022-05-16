import React from "react";
import appointment from "../../../src/assets/images/appointment.png";
import doctor from "../../../src/assets/images/doctor.png";

const DocAppointment = () => {
  return (
    <div>
      <div
        class="hero px-12 mt-[100px] "
        style={{ backgroundImage: `url(${appointment})` }}
      >
        <div class="flex items-center flex-col lg:flex-row-reverse">
          <div class=" text-white">
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
          <div className="w-1/2 hidden lg:block"> 
            <img src={doctor} class="mt-[-100px] max-w-sm rounded-lg w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocAppointment;
