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
        <form 
        onSubmit={handleSubmit} 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-black"
    >
        {fields.map(({ id, label, type, options }) => (
            <div 
                key={id} 
                className={`flex flex-col space-y-3 ${id === 'passportType' ? 'md:col-span-2 w-full' : ''}`}
            >
                <label htmlFor={id} className="text-lg font-semibold text-gray-800">
                    {label}
                </label>
    
                {/* Full-Width Passport Type Selection */}
                {type === 'radio' && id === 'passportType' ? (
                    <div className="flex flex-col gap-3 w-full">
                        {options.map((option) => (
                            <label 
                                key={`${id}-${option}`} 
                                className="relative w-full cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    id={`${id}-${option}`}
                                    name={id}
                                    value={option}
                                    checked={formData[id] === option}
                                    onChange={handleInputChange}
                                    className="hidden peer"
                                />
                                <span className="block w-full px-5 py-3 text-black bg-gray-200 border border-gray-400 rounded-lg text-center cursor-pointer transition-all duration-300 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:bg-gray-300">
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                ) : type === 'radio' ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                        {options.map((option) => (
                            <label 
                                key={`${id}-${option}`} 
                                className="relative w-full cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    id={`${id}-${option}`}
                                    name={id}
                                    value={option}
                                    checked={formData[id] === option}
                                    onChange={handleInputChange}
                                    className="hidden peer"
                                />
                                <span className="block w-full px-4 py-3 text-black  border border-gray-400 rounded-lg text-center cursor-pointer transition-all duration-300  peer-checked:bg-gray-400 peer-checked:text-black peer-checked:border-gray-400  hover:bg-gray-300">
                                    {option}
                                </span>
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
                        className="w-full p-3  text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        autoComplete="off"

                    />
                )}
            </div>
        ))}
    
        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 mt-6">
            <button
                type="submit"
                className="w-full bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
            >
                Next Page
            </button>
        </div>
    </form>
    
    );
};

export default Form;
