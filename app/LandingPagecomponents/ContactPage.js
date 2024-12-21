import React from "react";
import InputField from "./InputField";


const ContactPage = () => {
    return (
        <div className="flex justify-center w-full border-b-[1px] border-black">
            <div className="p-[2vh] md:p-[7vh] w-1/2">
                <div className="p-6 flex flex-col gap-4">
                    <h1 className="text-2xl md:text-7xl font-Ubuntu font-bold text-gray-800 my-6">
                        CONTACT
                    </h1>
                    <div>
                        <p className="font-semibold">Get in Touch</p>
                        <p>
                            Have a question or need assistance? Feel free to reach out to our
                            team. We are here to help you with any queries regarding our
                            services.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-[4vh] w-1/2 border-l-[1px] border-black">
                <div className="grid grid-cols-2 gap-4 p-4">
                    <InputField label="Name" required />
                    <InputField label="Email" type="email" required />
                    <InputField label="Subject" required />
                    <InputField label="Phone" type="tel" required className="font-sans" />
                    <InputField label="Message" type="textarea" required />
                    <div className="col-span-2">
                        <button className="mt-4 p-2 bg-blue-500 text-white rounded w-full">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
