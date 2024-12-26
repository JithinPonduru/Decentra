'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ApplicationPage/ProgressBar';
import FormStep1 from '@/components/ApplicationPage/Step1';
import FormStep2 from '@/components/ApplicationPage/Step2';
import FormStep3 from '@/components/ApplicationPage/Step3';

const ApplicationPage = () => {
  const router = useRouter(); 
  const totalSteps = 3; 
  const [activeStep, setActiveStep] = useState(1);

  const headers = ['Personal Details', 'Proof of Identity', 'Payment Details'];

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    fathersName: '',
    mothersName: '',
    spousesName: '',
    placeOfBirth: '',
    phoneNumber: '',
    emailAddress: '',
    residentialAddress: '',
    nationality: '',
    gender: '',
    maritalStatus: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep === totalSteps) return; // Prevent form submission on the last step
    setActiveStep((prevStep) => prevStep + 1); // Update step dynamically

    console.log(formData);
    
    // router.push('/next-page');
  };

  const renderFormStep = () => {
    switch (activeStep) {
      case 1:
        return <FormStep1 formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />;
      case 2:
        return <FormStep2 formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />;
      case 3:
        return <FormStep3 formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-hidden">
      <ProgressBar activeStep={activeStep} totalSteps={totalSteps} setActiveStep={setActiveStep} />

      <div className="flex justify-center items-center">
        <div className="w-full w-4xl  px-6 py-8">
          <h1 className="text-3xl font-semibold underline underline-offset-4 mb-8">
            {headers[activeStep - 1]}
          </h1>
          {renderFormStep()}
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
