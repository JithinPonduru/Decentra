"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/LandingPagecomponents/InputField";

export default function AppointmentPage() {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const checkApplicationStatus = async () => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const isApplicationComplete = await mockCheckApplication(applicationNumber);

      if (isApplicationComplete) {
        router.push("/slotbooking");
      } else {
        setErrorMessage("Application process is not complete. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const mockCheckApplication = (number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number === "123456");
      }, 1500);
    });
  };

  return (
    <div className="flex justify-center items-center p-12">
      <div className="w-full max-w-md text-center p-6 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Check Application</h1>
        <p className="text-gray-600 mb-6">
          Verify the status of your application by entering your application number.(Testing: <span className="font-Ubuntu">123456</span>)
        </p>
        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="relative w-full">
            <InputField
              id="application-number"
              type="text"
              value={applicationNumber}
              onChange={(e) => setApplicationNumber(e.target.value)}
              className="w-full font-Ubuntu autocomplete-off" 
              autoComplete={"off"}
            />
            <label
              htmlFor="application-number"
              className="absolute left-0 top-[-1.5rem] text-gray-600 text-sm"
            >
              Application Number
            </label>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            onClick={checkApplicationStatus}
            className={`w-full py-3 rounded-md font-medium text-white transition ${
              isLoading || !applicationNumber
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={isLoading || !applicationNumber}
          >
            {isLoading ? "Checking..." : "Check Status"}
          </button>
        </div>
      </div>
    </div>
  );
}
