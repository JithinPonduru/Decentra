import React from 'react'



const InputField = ({ label, type = "text", required = false, className = "" }) => (
    <div>
        <label>
            <span className="font-semibold">{label}</span>
            {required && <span className="text-red-500"> *</span>}
        </label>
        {type === "textarea" ? (
            <textarea
            className={`border-b-[1px] border-black mb-4 focus:outline-none w-full ${className}`}
            ></textarea>
        ) : (
            <input
            type={type}
            className={`border-b-[1px] border-black mb-4 focus:outline-none w-full ${className}`}
            />
        )}
    </div>
);
export default InputField