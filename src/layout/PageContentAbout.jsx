import TeamMember from "@/components/custom/TeamMember";
import { Button } from "@/components/ui/button";
import React from "react";
export default function PageContentAbout() {
  const stats = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries Worldwide" },
    { value: "100+", label: "Top Partners" },
  ];
  const memberCount = 3;
  const brandCount=6;
  return (
    <div>
      <div className="mx-auto w-full lg:w-3/4 flex flex-col lg:flex-row items-center text-center lg:text-left gap-8 ">
        <div className="lg:w-1/2 lg:px-48 lg:space-y-10">
          <h2 className="text-sm font-semibold text-gray-600 uppercase mb-2">
            ABOUT COMPANY
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT US</h1>
          <p className="text-gray-600 mb-6">
            We know how large objects will act, but things on a small scale
          </p>
          <Button className="bg-secondary">Get Quote Now</Button>
        </div>
        <div className="lg:w-1/2 flex lg:justify-center">
          <img
            src="assets/aboutImg/aboutImg.png"
            className="object-cover lg:w-3/4"
          />
        </div>
      </div>
      <div className="w-3/4 mx-auto px-4 py-12 md:py-20 ">
        <div className="md:flex  md:items-start mb-12 md:mb-20 flex md:justify-around">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-sm font-semibold text-[#E74040] uppercase mb-2">
              Problems trying
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#252B42] mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <div className="md:w-1/3">
            <p className="text-sm text-gray-600">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className=" md:flex gap-4 md:gap-8 flex md:justify-around">
          {stats.map((stat, index) => (
            <div key={index} className="text-center mb-8 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <video className="w-2/3 mx-auto rounded-x" controls>
          <source
            src="assets/aboutVideo/2759484-uhd_3840_2160_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="w-full lg:w-3/4 mx-auto mt-16">
        <h1 className="text-center text-2xl lg:text-4xl font-bold mb-8">MEET OUR TEAM</h1>
        <p className="text-center text-lg lg:text-2xl mb-8 lg:w-1/3 mx-auto">Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: memberCount }).map((_, index) => (
            <div key={index}>
              <TeamMember />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-3/4 mx-auto">
      <h1 className="text-center text-2xl lg:text-4xl font-bold mb-8">Big Companies Are Here</h1>
        <p className="text-center text-lg lg:text-2xl mb-8 lg:w-1/3 mx-auto">Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics </p>
        <div className="flex flex-col md:flex-row mx-auto justify-between gap-4 md:gap-0">
          {Array.from({ length: brandCount }).map((_, index) => (
            <div className="mx-auto md:m-0 ">
              <img src={`assets/brandlogos/${index + 1}.png`} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
      <div className="bg-blue-500 p-8 md:w-1/2 text-white  flex flex-col justify-center">
        <h2 className="uppercase  text-white text-sm font-semibold mb-4">Work with us</h2>
        <h1 className="text-4xl  text-white font-bold mb-4">Now Let's grow Yours</h1>
        <p className="mb-6">
          The gradual accumulation of information about atomic and 
          small-scale behavior during the first quarter of the 20th
        </p>
        <Button variant="outline" className=" bg-blue-500 w-1/6 h-12">
          Button
        </Button>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://picsum.photos/600/400?random=0611"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </div>
  );
}
