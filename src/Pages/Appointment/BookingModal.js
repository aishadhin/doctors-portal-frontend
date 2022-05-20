import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const {_id, name, slots } = treatment;

  const [user] = useAuthState(auth);


  const handleBooking = event => {
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id, name, slot);
      setTreatment(null)
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="my-modal-6"
            className="btn btn-sm btn-secondary text-white btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">Booking For:{name}</h3>
          <form onSubmit={handleBooking} className="mt-5">
            <input
              className="input input-bordered w-full max-w-xs my-1"
              type="text"
              name="name"
              value={format(date, "PP")}
              disabled
            ></input>
            <select name="slot" className="input-bordered select w-full max-w-xs my-1">
              {
                  slots.map((slot , index) =><option key={index} value={slot}>{slot}</option>)
              }
            </select>
            <input
              className="input input-bordered w-full max-w-xs my-1"
              type="text"
              name="name"
              value={user?.displayName || ''}
              disabled
            ></input>
            <input
              className="input input-bordered w-full max-w-xs my-1"
              type="email"
              name="email"
              value={user?.email || ''}
              disabled
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
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
