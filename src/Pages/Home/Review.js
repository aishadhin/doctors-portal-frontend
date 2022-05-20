import React from "react";

const Review = ({ review }) => {
  const { description, name, city, img } = review;
  return (
    <div className="card mt-4 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions pt-4">
          <img className="w-16 border-2 rounded-full border-primary" src={img} alt="" />
          <div>
            <h3 className="font-normal text-lg">{name}</h3>
            <p className="text-sm">{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
