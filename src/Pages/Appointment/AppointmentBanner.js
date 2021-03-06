import React from "react";
import chair from "../../../src/assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../../src/assets/images/bg.png";

const AppointmentBanner = ({date , setDate}) => {

  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          
        </div>
        
      </div>
    </div>
  );
};

export default AppointmentBanner;
