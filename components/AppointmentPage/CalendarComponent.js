"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-calendar/dist/Calendar.css";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

const CalendarComponent = ({ selectedDate, onDateChange, tileClassName }) => (
  <div>
    <Calendar
      onChange={onDateChange}
      value={selectedDate}
      tileClassName={tileClassName}
    />
  </div>
);

export default CalendarComponent;
