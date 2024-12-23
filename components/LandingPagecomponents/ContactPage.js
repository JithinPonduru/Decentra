import React from "react";

const ContactPage = () => {
    return (
        <div className="flex justify-center w-full border-b-[1px] border-black">
            <div className="p-[2vh] md:p-[7vh] w-1/2">
                {" "}
                {/* Adjusted padding to 4vh */}
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
                    <div>
                        <label className="font-semibold">Name *</label>
                        <input
                            type="text"
                            className="border-b-[1px] border-black mb-4 focus:outline-none w-full"
                        />
                    </div>
                    <div>
                        <label className="font-semibold">Email *</label>
                        <input
                            type="email"
                            className="border-b-[1px] border-black mb-4 focus:outline-none w-full"
                        />
                    </div>
                    <div>
                        <label className="font-semibold">Subject *</label>
                        <input
                            type="text"
                            className="border-b-[1px] border-black mb-4 focus:outline-none w-full"
                        />
                    </div>
                    <div>
                        <label className="font-semibold">Phone *</label>
                        <input
                            type="tel"
                            className="border-b-[1px] border-black mb-4 focus:outline-none w-full font-sans"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="font-semibold">Message *</label>
                        <textarea className="border-b-[1px] border-black mb-4 focus:outline-none w-full"></textarea>
                    </div>
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
