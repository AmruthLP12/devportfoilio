import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
        {/* Phone */}
      <div className="flex items-center space-x-8 ">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="w-2 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.phone}
          </h1>
        </div>
      </div>
      {/* Email */}
      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaEnvelope className="w-2 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">EMail Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.email}
          </h1>
        </div>
      </div>
      {/* Address */}
      <div className="flex items-center space-x-8 ">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaMap className="w-2 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
