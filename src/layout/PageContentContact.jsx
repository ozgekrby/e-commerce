import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, ArrowDown } from "lucide-react";
export default function PageContentContact() {
  const contactItems = [
    {
      icon: Phone,
      email: "georgia.young@example.com",
      secondary: "georgia.young@ple.com",
    },
    {
      icon: MapPin,
      email: "georgia.young@example.com",
      secondary: "georgia.young@ple.com",
    },
    {
      icon: Mail,
      email: "georgia.young@example.com",
      secondary: "georgia.young@ple.com",
    },
  ];
  return (
    <div>
      <div className="mx-auto w-full lg:w-3/4 flex flex-col lg:flex-row items-center text-center lg:text-left gap-8">
        <div className="lg:w-1/2 lg:px-48 lg:space-y-10">
          <h2 className="text-sm font-semibold text-gray-600 uppercase mb-2">
            CONTACT US
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get in touch today!
          </h1>
          <p className="text-gray-600 mb-6">
            We know how large objects will act, but things on a small scale
          </p>
          <div className="space-y-4">
            <p className="font-semibold">Phone : +451 215 215</p>
            <p className="font-semibold">Fax : +451 215 215</p>
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <FaTwitter className="text-gray-600 hover:text-blue-400 cursor-pointer text-xl" />
            <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl" />
            <FaInstagram className="text-gray-600 hover:text-pink-600 cursor-pointer text-xl" />
            <FaLinkedinIn className="text-gray-600 hover:text-blue-700 cursor-pointer text-xl" />
          </div>
        </div>
        <div className="lg:w-1/2 flex lg:justify-center">
          <img
            src="assets/contactImg/contactImg.png"
            className="object-cover lg:w-3/4"
          />
        </div>
      </div>
      <div className="lg:w-3/4 mx-auto px-4 py-12 text-center">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">
          VISIT OUR OFFICE
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          We help small businesses
          <br />
          with big ideas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-white group"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <p className="text-sm mb-1">{item.email}</p>
              <p className="text-sm mb-4">{item.secondary}</p>
              <p className="font-semibold mb-4">Get Support</p>
              <Button
                variant="outline"
                className="group-hover:bg-white group-hover:text-gray-800 transition-colors duration-300 border-secondary  text-secondary"
              >
                Submit Request
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-3/4 mx-auto px-4 py-16 text-center">
        <div className="mb-4 flex justify-center">
        <img src="assets/contactImg/Arrow.svg"
      className="text-secondary"
      />
        </div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
          WE CAN'T WAIT TO MEET YOU
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Let's Talk
        </h1>
        <Button className="bg-secondary ">Try it free now</Button>
      </div>
    </div>
  );
}
