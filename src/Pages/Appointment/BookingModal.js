import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const {_id, name, slots } = treatment;


  const handleBooking = event => {
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id, name, slot);
      setTreatment(null)
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-secondary text-white btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking For:{name}</h3>
          <form onSubmit={handleBooking} className="mt-5">
            <input
              className="input input-bordered w-full max-w-xs my-1"
              type="text"
              name="name"
              value={format(date, "PP")}
              disabled
            ></input>
            <select name="slot" class="input-bordered select w-full max-w-xs my-1">
              {
                  slots.map(slot =><option value={slot}>{slot}</option>)
              }
            </select>
            <input
              className="input input-bordered w-full max-w-xs my-1"
              type="text"
              name="name"
              placeholder="Your Name"
            ></input>
            <input
              className="input input-bordered w-full max-w-xs my-1"
              type="email"
              name="email"
              placeholder="Your Email"
            ></input>
            <input
              className="input input-bordered w-full max-w-xs my-1"
              type="text"
              name="number"
              placeholder="Your Phone Number"
              value=''
            ></input>
            
            <input
              className="input input-bordered w-full max-w-xs my-1 btn btn-primary text-white"
              type="submit"
              value="Submit"
            />
          </form>
          <div class="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
