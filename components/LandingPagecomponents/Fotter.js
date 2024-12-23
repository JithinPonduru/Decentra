import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons
import InputField from "./InputField";
import { FaHome, FaInfoCircle, FaEnvelope, FaShieldAlt } from "react-icons/fa"; // Import icons



const Footer = () => {
    const footerData = [
        {
            title: "Contact Information",
            details: [
                "934-----630",
                "decentra.iota@gmail.com"
            ]
        },
        {
            title: "Address",
            details: [
                "SRM University AP, Mangalagiri",
                "Amaravati, Andhra Pradesh 522502, India"
            ]
        },
        {
            title: "Follow Us",
            details: [
                { icon: <FaFacebook />, label: "Facebook", link: "https://www.facebook.com/zithin.chowdhary" },
                { icon: <FaTwitter />, label: "Twitter", link: "https://x.com/Jithin_001" },
                { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/jithin-ponduru-39607022a/" },
                { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/berlin_m_h/" }
            ]
        },
        {
            title: "Quick Links",
            details: [
                <a href="/home" rel="noopener noreferrer">Home</a>,
                <a href="/about" rel="noopener noreferrer">About Us</a>,
                <a href="/contact" rel="noopener noreferrer">Contact</a>,
                <a href="/privacy-policy" rel="noopener noreferrer">Privacy Policy</a>
            ]
        }
    ];

    return (
        <div>
            <div className="w-full border-black border-b-[1px] px-[7vh]">
                <h1 className="text-xl md:text-2xl font-Ubuntu font-bold p-10 text-gray-800">
                    DECENTRA
                </h1>
            </div>

            <div className="border-black border-b-[1px]">
                <div className="">
                    <div className="flex flex-wrap justify-between border-b-[1px] border-gray-300">
                        {footerData.slice(0, 3).map((section, index) => (
                            <div
                                key={index}
                                className={`${section.title === "Follow Us" ? "w-full md:w-1/2" : "w-full md:w-1/4"
                                    } p-12 border-r-[1px] border-black mb-4 md:mb-0`} // Adjust margins for mobile view
                            >
                                <h2 className="font-semibold text-lg text-gray-700">{section.title}</h2>
                                <ul className={`mt-2 flex flex-col space-y-2`}> {/* flex-col ensures vertical stack */}
                                    {section.details.map((detail, i) => (
                                        <li key={i} className="flex items-center space-x-2 text-gray-600">
                                            {section.title === "Follow Us" && detail.icon}
                                            {section.title === "Follow Us" ? (
                                                <a
                                                    href={detail.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-gray-800"
                                                >
                                                    {detail.label}
                                                </a>
                                            ) : (
                                                detail
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Horizontal Rule after first row */}
                <div className="border-b-[1px] border-black"></div>

                {/* Quick Links Section */}
                <div className="flex flex-wrap justify-between ">
                    <div className="w-full md:w-1/3 p-12 border-r-[1px] border-black">
                        <h2 className="font-semibold text-lg text-gray-700">Quick Links</h2>
                        <ul className="mt-2 space-y-2">
                            {footerData[3].details.map((link, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                    {/* Choose appropriate icons for each link */}
                                    {index === 0 && <FaHome className="mr-2" />}
                                    {index === 1 && <FaInfoCircle className="mr-2" />}
                                    {index === 2 && <FaEnvelope className="mr-2" />}
                                    {index === 3 && <FaShieldAlt className="mr-2" />}
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="w-full md:w-2/3 mb-4 p-4">
                        <h2 className="font-semibold text-lg text-gray-700">Subscribe to Our Newsletter</h2>
                        <p className="mt-2 text-gray-600">Enter Your Email Address</p>
                        <div className="mt-2">
                            <InputField
                                type="email"
                                placeholder="Your email address"
                            />
                        </div>
                        <button className="mt-4 w-full p-3 border-[1px] border-black rounded-sm hover:bg-gray-300 focus:outline-none">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

