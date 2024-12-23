import React from "react";

const EventShedule = () => {
  const EventData = {
    "Date Selection":
      "Choose a suitable date for your document verification appointment from available options. This feature ensures flexibility, allowing you to select a convenient time that fits your schedule, enhancing the user experience.",
    "Verification Process":
      "Present your documents for blockchain-based authentication. The process is quick, secure, and transparent, ensuring accurate verification with tamper-proof integrity, privacy, efficiency, real-time updates, and complete reliability throughout the procedure.",

    "Confirmation":
      "Once your documents are verified, you will receive instant confirmation and can proceed with the passport application. Your data is securely stored and only accessible to authorized personnel, ensuring privacy and protection throughout.",
  };

  return (
    <div>
      <div className="w-full border-t-[1px] border-black border-b-[1px] px-[7vh]">
        <h1 className="text-3xl md:text-5xl font-Ubuntu font-bold p-6 text-gray-800">EVENT SCHEDULE</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {Object.keys(EventData).map((event, index) => (
            <div
              key={index}
              className="p-8 border-r-[1px] border-b-[1px] border-black flex flex-col justify-between"
            >
              <h1 className="text-2xl mb-4">{event}</h1>{" "}
              {/* Added margin-bottom */}
              <p className="text-gray-800">{EventData[event]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventShedule;
