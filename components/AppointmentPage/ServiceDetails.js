"use client";
import React from "react";

const handleButtonClick = () => {
  console.log("ASDFASDF");
};

const ServiceDetails = ({ selectedDate, selectedTime }) => (
  <aside className="lg:w-1/3">
    <div className="border p-6 rounded-md">
      <h2 className="font-semibold text-gray-800">Service Details</h2>
      <hr className="my-4 border-gray-300" />
      <h3 className="font-semibold text-gray-800">Document Verification</h3>

      {selectedDate && selectedTime ? (
        <div>
          <p>
            You have selected{" "}
            <strong className="font-Ubuntu">{selectedTime}</strong> on{" "}
            <strong className="font-Ubuntu">{selectedDate.toDateString()}</strong>.
          </p>
        </div>
      ) : (
        <p>Please select a date and time to book the slot.</p>
      )}

      <button
        onClick={handleButtonClick}
        className="w-full py-3 mt-4 text-black border border-black rounded-sm hover:bg-gray-500 hover:text-gray-100 transition-all duration-300"
      >
        Book the Slot
      </button>
    </div>
  </aside>
);

export default ServiceDetails;
