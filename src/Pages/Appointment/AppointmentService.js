import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-center text-xl">{name}</h2>
        <p className="text-center">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-400">Try another date.</span>
          )}
        </p>
        <p className="text-center">
          Available {slots.length > 1 ? "spaces" : "space"}: {slots.length}
        </p>
        <div class="lg:w-1/2 mx-auto">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="my-modal-6"
            class="card-actions after: items-center justify-center btn btn-primary text-white modal-button"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
