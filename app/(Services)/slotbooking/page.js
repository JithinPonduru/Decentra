"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/AppointmentPage/Header";
import CalendarComponent from "@/components/AppointmentPage/CalendarComponent";
import ServiceDetails from "@/components/AppointmentPage/ServiceDetails";
import SlotSelector from "@/components/AppointmentPage/SlotSelector";
import { generateTimeSlots as generateSlotsUtil } from "@/components/AppointmentPage/timeSlots";

const SlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const initialAvailability = {
    "10:00 AM": 5,
    "11:00 AM": 5,
    "12:00 PM": 5,
    "1:00 PM": 5,
    "2:00 PM": 5,
    "3:00 PM": 5,
    "4:00 PM": 5,
  };

  const [slotAvailability, setSlotAvailability] = useState(initialAvailability);

  const handleDateChange = (date) => {
    if (date.getDay() === 0 || date.getDay() === 6) {
      setErrorMessage(
        "No slots available on weekends. Redirecting to the next available Monday..."
      );
      const nextMonday = new Date(date);
      nextMonday.setDate(date.getDate() + ((8 - date.getDay()) % 7));
      setTimeout(() => {
        setSelectedDate(nextMonday);
        setSelectedTime("");  // Reset the time when date is updated
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
    if (date < today) return "react-calendar__tile--past";
    if (date.getDay() === 0 || date.getDay() === 6) return "react-calendar__tile--weekend";
    return null;
  };

  const generateTimeSlots = useMemo(
    () => generateSlotsUtil(selectedDate),
    [selectedDate]
  );

  const handleSlotSelection = (slot) => {
    if (slotAvailability[slot] > 0) {
      setSelectedTime(slot);
      setSlotAvailability((prev) => ({
        ...prev,
        [slot]: prev[slot] - 1,
      }));
    }
  };

  return (
    <div className="p-4 lg:p-10 xl:p-20">
      <Header />
      <main className="flex flex-col lg:flex-row justify-between mt-10 gap-6">
        <section className="lg:w-2/3 px-4 lg:px-6">
          <div className="flex justify-between border-b pb-4 border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800">
              Select a Date and Time
            </h2>
            <h3 className="text-gray-600 font-semibold">
              India Standard Time (IST)
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-6">
            <CalendarComponent
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              tileClassName={tileClassName}
            />
            <SlotSelector
              selectedDate={selectedDate}
              generateTimeSlots={generateTimeSlots}
              slotAvailability={slotAvailability}
              selectedTime={selectedTime}
              onSlotSelect={handleSlotSelection}
            />
          </div>
          {errorMessage && (
            <div className="mt-4 text-red-500 font-semibold">{errorMessage}</div>
          )}
        </section>
        <ServiceDetails selectedDate={selectedDate} selectedTime={selectedTime} />
      </main>
    </div>
  );
};

export default SlotBooking;
