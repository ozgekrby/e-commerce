import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { InstagramIcon } from "lucide-react";
export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row p-20 gap-4 justify-center lg:w-3/4 lg:gap-0 lg:p-0 lg:justify-between">
      <div className="flex flex-col gap-4">
        <h2>Get In Touch</h2>
        <p>the quick fox jumps over the lazy dog</p>
        <div className="flex gap-4">
          <FaFacebook size={16} className="text-secondary" />
          <InstagramIcon
            size={16}
            strokeWidth={2.5}
            className="text-secondary"
          />
          <FaTwitter size={16} className="text-secondary" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2>Company info</h2>
        <a href=""> About Us</a>
        <a href=""> Carrier</a>
        <a href=""> We are hiring</a>
        <a href=""> Blog</a>
      </div>
      <div className="flex flex-col gap-4">
        <h2>Features</h2>
        <a href=""> Business Marketing</a>
        <a href=""> User Analytic</a>
        <a href=""> Live Chat</a>
        <a href=""> Unlimited Support</a>
      </div>
      <div className="flex flex-col gap-4">
        <h2>Resources</h2>
        <a href=""> IOS & Android</a>
        <a href=""> Watch a Demo</a>
        <a href=""> Customers</a>
        <a href=""> API</a>
      </div>
      </div>
      <div className="flex px-24 gap-4">
        <p>Made With Love By 
        Figmaland All Right Reserved </p>
      </div>
    </div>
  );
}
