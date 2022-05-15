import React from "react";
import appointment from "../../../src/assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="py-12" style={{ backgroundImage: `url(${appointment})` }}>
      <div className="text-center">
        <h4 className="text-xl text-primary font-bold">Contact Us</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <div className="lg:w-1/2 mx-auto pt-6 px-12">
          <form className="form">
              <input className="rounded w-full p-4 mb-4" type="email" name="email" placeholder="Email"/><br/>
              <input className="rounded w-full p-4 mb-4" type="text" name="subject" placeholder="Subject"/><br/>
              <textarea className="rounded w-full p-4 mb-4" rows="4" cols="50" name="message" placeholder="Your Message"></textarea><br/>
              <input className="px-6 text-center mx-auto block btn btn-primary text-white bg-gradient-to-r from-secondary to-primary" type="submit" value="Submit"/>
          </form>
      </div>
    </div>
  );
};

export default ContactUs;
