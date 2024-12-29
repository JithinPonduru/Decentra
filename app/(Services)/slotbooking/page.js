"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-calendar/dist/Calendar.css";

// Dynamically load the Calendar to prevent SSR issues
const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

const SlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDateChange = (date) => {
    if (date.getDay() === 0 || date.getDay() === 6) {
      setErrorMessage("No slots available on weekends. Redirecting to the next available Monday...");
      const nextMonday = new Date(date);
      nextMonday.setDate(date.getDate() + ((8 - date.getDay()) % 7)); // Calculate next Monday
      setTimeout(() => {
        setSelectedDate(nextMonday);
        setErrorMessage("");
      }, 2500);
    } else {
      setSelectedDate(date);
      setErrorMessage("");
      setSelectedTime("");
    }
  };

  const tileClassName = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      return "react-calendar__tile--past";
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
      return "react-calendar__tile--weekend";
    }
    return null;
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour <= 16; hour++) {
      const formattedTime = hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`;
      slots.push(formattedTime);
    }
    return slots;
  };

  return (
    <div className="p-4 lg:p-10 xl:p-20">
      <div>
        <h1 className="text-3xl font-semibold text-gray-800">Document Verification</h1>
        <p className="font-semibold font-sans mt-4 text-gray-600">
          Check out our availability and book the date and time that works for you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6">
        <div className="lg:w-2/3 mt-6 lg:mt-0 px-4 lg:px-6">
          <div className="flex justify-between border-b-[1px] border-gray-300 pb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Select a Date and Time</h2>
            <h3 className="text-gray-600 font-semibold">India Standard Time (IST)</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between mt-6">
            <div className="mt-6 lg:mt-0">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileClassName={tileClassName}
              />
            </div>
            <div className="mt-6 lg:mt-0 w-full lg:w-auto">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  {selectedDate.toDateString()}
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {selectedDate.getDay() !== 0 && selectedDate.getDay() !== 6
                    ? generateTimeSlots().map((slot, index) => (
                      <button
                        key={index}
                        className={`border-[1px] border-black p-2 px-8 font-Ubuntu ${selectedTime === slot ? "bg-gray-300" : ""
                          }`}
                        onClick={() => setSelectedTime(slot)}
                      >
                        {slot}
                      </button>
                    ))
                    : (
                      <p className="text-red-500 font-semibold text-center col-span-2">
                        No slots available on weekends.
                      </p>
                    )}
                </div>
                {selectedTime && (
                  <p className="mt-4 text-gray-700 text-center">
                    You have selected <strong className="font-Ubuntu">{selectedTime}</strong> on {" "}
                    <strong className="font-Ubuntu">{selectedDate.toDateString()}</strong>.
                  </p>
                )}
              </div>
            </div>
          </div>
          {errorMessage && (
            <div className="mt-4 text-red-500 font-semibold">{errorMessage}</div>
          )}
        </div>

        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <div className="border-[1px] border-black p-6 rounded-md">
            <h2 className="font-semibold text-gray-800">Service Details</h2>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Document Verification</h3>
            </div>
            <hr className="my-4 border-gray-300" />
            <div>
              <h1 className="font-semibold text-xl font-Ubuntu text-gray-800">50$</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotBooking;
