import React from "react";

const Services = () => {
  const services = [
    "New Passport Application",
    "Book Document Verification Slot",
    "Reapply for Passport",
    "Correct Passport Details",
  ];

  const buttonLabels = ["Apply Now", "Book Slot", "Reapply", "Correct Details"];

  return (
    <div className="m-6 sm:m-10 lg:m-[7vh]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-Ubuntu font-semibold p-4 sm:p-6 text-gray-800 text-center">
        SERVICES
      </h1>

      <div className="space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 sm:p-8 border-b border-black m-4 ${
              index === 0 ? "border-t" : ""
            }`}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <h1 className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
                {service}
              </h1>
              <button className="h-12 px-6 text-slate-400 font-medium rounded-md border border-slate-800 bg-gradient-to-r from-[#000103] via-[#1e2631] to-[#000103] hover:from-[#000103] hover:via-[#1e2631] hover:to-[#000103] hover:text-white transition duration-500 ease-in-out">
                {buttonLabels[index]}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;