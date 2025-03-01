"use client";
import React from "react";

const SlotSelector = ({
  selectedDate,
  generateTimeSlots,
  slotAvailability,
  selectedTime,
  onSlotSelect,
}) => (
  <div className="w-full lg:w-auto mt-6 lg:mt-0">
    <h2 className="text-xl font-semibold text-center font-mono">{selectedDate.toDateString()}</h2>
    <div className="grid grid-cols-2 gap-4 mt-4 font-Ubuntu">
      {selectedDate.getDay() !== 0 && selectedDate.getDay() !== 6 ? (
        generateTimeSlots.length > 0 ? (
          generateTimeSlots.map((slot) => (
            <button
              key={slot}
              disabled={slotAvailability[slot] === 0}
              className={`border p-2 px-8 ${
                selectedTime === slot ? "bg-gray-300" : ""
              } ${
                slotAvailability[slot] === 0
                  ? "bg-gray-200 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onSlotSelect(slot)}
            >
              {slot}
            </button>
          ))
        ) : (
          <p className="text-red-500 font-semibold text-center col-span-2">
            No slots available for the selected date.
          </p>
        )
      ) : (
        <p className="text-red-500 font-semibold text-center col-span-2">
          No slots available on weekends.
        </p>
      )}
    </div>
    {selectedTime && (
      <p className="mt-4 text-center">
        You have selected <strong className="font-Ubuntu">{selectedTime}</strong> on{" "}
        <strong className="font-Ubuntu">{selectedDate.toDateString()}</strong>.
      </p>
    )}
  </div>
);

export default SlotSelector;
