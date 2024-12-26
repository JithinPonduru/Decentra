import React from 'react';
import InputField from '@/components/LandingPagecomponents/InputField';

const Form = ({ formData, handleInputChange, handleSubmit }) => {
    // Form fields
    const fields = [
        { id: 'firstName', label: 'First Name', type: 'text' },
        { id: 'middleName', label: 'Middle Name', type: 'text' },
        { id: 'lastName', label: 'Last Name', type: 'text' },
        { id: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
        { id: 'fathersName', label: "Father's Name", type: 'text' },
        { id: 'mothersName', label: "Mother's Name", type: 'text' },
        { id: 'spousesName', label: "Spouse's Name (if applicable)", type: 'text' },
        { id: 'placeOfBirth', label: 'Place of Birth (City, Country)', type: 'text' },
        { id: 'phoneNumber', label: 'Phone Number', type: 'tel' },
        { id: 'emailAddress', label: 'Email Address', type: 'email' },
        { id: 'residentialAddress', label: 'Residential Address', type: 'text' },
        { id: 'nationality', label: 'Nationality/Citizenship', type: 'text' },
        {
            id: 'gender',
            label: 'Gender',
            type: 'radio',
            options: ['Male', 'Female', 'Other']
        },
        {
            id: 'maritalStatus',
            label: 'Marital Status',
            type: 'radio',
            options: ['Single', 'Married', 'Divorced']
        },
        {
            id:'Passport Type',
            label:'Passport Type',
            type:'radio',
            options:['New Passport','Renewal of Passport','Lost Passport','Damaged Passport','Tatkal ']
        }
        
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
                                        checked={formData[id] === option}
                                        onChange={handleInputChange}
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
                            value={formData[id]}
                            onChange={handleInputChange}
                        />
                    )}
                </div>
            ))}
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

export default Form;
