import React from "react";

const InputField = ({
    label,
    type = "text",
    required = false,
    className = "",
    name,
    value,
    onChange,
    id,
    autoComplete,
}) => (
    <div>
        <label htmlFor={id} className="flex items-center space-x-1">
            <span className="font-semibold">{label}</span>
        </label>
        {type === "textarea" ? (
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required} // Add required prop to textarea
                className={`border-b-[1px] border-black mb-4 focus:outline-none w-full ${className}`}
            ></textarea>
        ) : type === "file" ? (
            <div className="flex flex-col">
                <input
                    id={id}
                    type="file"
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="hidden"
                    autoComplete={autoComplete} 
                />
                <label
                    htmlFor={id}
                    className={`cursor-pointer inline-block border-2 border-black bg-white text-black font-semibold py-3 px-6 rounded-lg text-center hover:border-gray-500 focus:border-gray-500 transition-all duration-300 focus:outline-none ${className}`}
                >
                    {value ? "File Selected" : "Choose File"}
                </label>
                {value && (
                    <span className="mt-2 text-gray-500 text-sm">
                        {value.split("\\").pop()}
                    </span>
                )}
            </div>
        ) : (
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required} // Add required prop to input
                autoComplete={autoComplete} 
                className={`border-b-[1px] border-black mb-4 focus:outline-none w-full ${className}`}
            />
        )}
    </div>
);

export default InputField;
