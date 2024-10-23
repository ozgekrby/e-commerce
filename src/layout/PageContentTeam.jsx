import TeamMember from "@/components/custom/TeamMember";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { ChevronRight } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function PageContentTeam() {
  const memberCount = 9;

  return (
    <div className="px-4 lg:px-0">
      <div className="w-full lg:w-3/4 mx-auto items-center">
        <div className="w-full lg:w-2/3 mx-auto text-center">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            WHAT WE DO
          </h2>
          <h1 className="text-2xl lg:text-4xl font-bold text-[#252B42] mb-4">
            Innovation tailored for you
          </h1>

          <div className="flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center flex-row">
                <NavigationMenuItem>
                  <Link to="/home" className="font-bold">
                    Home
                  </Link>
                </NavigationMenuItem>
                <ChevronRight className="text-gray-400 mx-2" size={20} />
                <NavigationMenuItem>
                  <Link to="/team" className="text-gray-400">
                    Team
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full mt-8">
        <div className="lg:col-span-2">
          <img
            src="https://picsum.photos/800/600?random=1"
            alt="Main"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          <img
            src="https://picsum.photos/400/300?random=2"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://picsum.photos/400/300?random=3"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://picsum.photos/400/300?random=4"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
          <img
            src="https://picsum.photos/400/300?random=5"
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-3/4 mx-auto mt-16">
        <h1 className="text-center text-2xl lg:text-4xl font-bold mb-8">MEET OUR TEAM</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: memberCount }).map((_, index) => (
            <div key={index}>
              <TeamMember />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-3/4 mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Start your 14 days free trial
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <Button className="bg-secondary w-full lg:w-auto">Try it free now</Button>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-secondary">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-secondary">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-secondary">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-secondary">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}