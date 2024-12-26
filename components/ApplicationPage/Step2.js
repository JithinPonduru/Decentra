import React from 'react';
import InputField from '@/components/LandingPagecomponents/InputField';

const FormStep2 = ({ formData, handleInputChange, handleSubmit }) => {
  const fields = [
    { id: 'AadhaarNumber ', label: 'Aadhaar Card:', type: 'file' },
    { id: 'Photographs', label: 'Passport-sized Photographs', type: 'file' },
    
    {
      id: 'Biometrics',
      label: 'Biometric Data ',
      type: 'radio',
      options: ['Male', 'Female', 'Other']
    },

  ];

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {fields.map(({ id, label, type, options }) => (
        <div key={id} className="flex flex-col space-y-2">
          <label htmlFor={id} className="text-lg font-medium text-gray-700">
            {label}
          </label>
          {type === 'radio' ? (
            <div className="flex flex-wrap gap-4">
              {options.map((option) => (
                <label key={`${id}-${option}`} className="flex items-center gap-2">
                  <InputField
                    type={type}
                    id={`${id}-${option}`}
                    name={id}
                    value={option}
                    checked={formData[id] === option} // Check if the option is selected
                    onChange={handleInputChange} // Update state on change
                  />
                  <span className="text-gray-600">{option}</span>
                </label>
              ))}
            </div>
          ) : (
            <InputField
              id={id}
              type={type}
              name={id}
              value={formData[id]} // Bind the input field to state
              onChange={handleInputChange} // Update state on change
            />
          )}
        </div>
      ))}
      {/* Submit button inside the form */}
      <div className="w-full md:w-full mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Next Page
        </button>
      </div>
    </form>
  );
};

export default FormStep2;
