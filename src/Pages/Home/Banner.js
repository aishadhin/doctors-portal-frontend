import React from "react";
import chair from "../../../src/assets/images/chair.png";
import bg from "../../../src/assets/images/bg.png";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen px-12" style={{backgroundImage: `url(${bg})`}}>
        <div class="hero-content flex-col lg:flex-row-reverse gap-x-32">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div class="md:w-1/2 lg:w-1/2">
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
