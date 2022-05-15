import React from "react";
import quote from "../../../src/assets/icons/quote.svg";
import people1 from "../../../src/assets/images/people1.png";
import people2 from "../../../src/assets/images/people2.png";
import people3 from "../../../src/assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      city: "California",
      img: people1,
    },
    {
      _id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Wonder Women",
      city: "New York",
      img: people2,
    },
    {
      _id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Herry Potter",
      city: "Silicon valley",
      img: people3,
    },
  ];

  return (
    <div className="p-12">
      <div className="flex justify-between align-center ">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-36" src={quote} alt="" />
        </div>
      </div>
      <div className="lg:flex justify-between">
          {
              reviews.map(review => <Review key={review._id} review={review}></Review>)
          }
      </div>
    </div>
  );
};

export default Testimonial;
