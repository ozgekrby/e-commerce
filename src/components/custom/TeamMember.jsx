import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function TeamMember() {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src="https://picsum.photos/400/300?random=666"
        alt="Profile"
        className="w-full h-64 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Username</div>
        <p className="text-gray-700 text-base">Profession</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center space-x-4">
        <a href="#" className="text-secondary">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-secondary">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-secondary ">
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}
