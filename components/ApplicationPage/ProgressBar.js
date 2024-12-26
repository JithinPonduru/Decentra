"use client";
import React from "react";

export default function Home({ activeStep, totalSteps, setActiveStep }) {

  const handleClick = (step) => {
    setActiveStep(step); // Update the active step when a step number is clicked
  };

  return (
    <div className="w-full flex justify-center items-center py-4">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center w-full px-6 py-2 font-Ubuntu">
          {Array.from({ length: totalSteps - 1 }).map((_, i) => (
            <div key={i} className="flex items-center flex-grow ">
              <div
                className={`flex justify-center items-center w-10 h-10 rounded-full shadow-lg cursor-pointer transition-all duration-300 ${
                  i + 1 <= activeStep
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-500 border-2 border-gray-300"
                }`}
                onClick={() => handleClick(i + 1)} // Trigger step change on click
              >
                <h1 className="text-sm font-semibold">{i + 1}</h1>
              </div>
              {i < totalSteps - 1 && (
                <div
                  className={`${
                    i + 1 < activeStep ? "bg-blue-500" : "bg-gray-300"
                  } flex-grow`}
                  style={{
                    height: "2px",
                  }}
                ></div>
              )}
            </div>
          ))}

          <div className="flex items-center">
            <div
              className={`flex justify-center items-center w-10 h-10 rounded-full shadow-lg cursor-pointer transition-all duration-300 ${
                totalSteps <= activeStep
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-500 border-2 border-gray-300"
              }`}
              onClick={() => handleClick(totalSteps)} // Trigger step change on click
            >
              <h1 className="text-sm font-semibold">{totalSteps}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
