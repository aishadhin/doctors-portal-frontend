import React from "react";

const AppointmentService = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-center text-xl">{name}</h2>
        <p className="text-center">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-400">
              Try another date.
            </span>
          )}
        </p>
        <p className="text-center">
          Available {slots.length > 1 ? "spaces" : "space"}: {slots.length}
        </p>
        <div class="card-actions justify-center">
          <button
            disabled={slots.length === 0}
            class="btn btn-primary text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
