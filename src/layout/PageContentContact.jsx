import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail } from "lucide-react";

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
    <main className="flex flex-col gap-[7.5rem]">

      <section className="bg-slate-100 py-16">
        <div className="mx-auto w-full lg:w-3/4 flex flex-col lg:flex-row items-center text-center lg:text-left gap-8">
          <article className="flex flex-col gap-[2.5rem]">
            <div className="flex flex-col gap-4">
              <span className="text-h6-lg text-accent/60 uppercase">
                CONTACT US
              </span>
              <h1 className="text-h2-lg font-bold text-accent">
                Get in touch today!
              </h1>
              <p className="text-h5-lg text-accent/60">
                We know how large objects will act, but things on a small scale
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-semibold text-accent">Phone : +451 215 215</p>
              <p className="font-semibold text-accent">Fax : +451 215 215</p>
            </div>

            <nav className="flex space-x-4 justify-center lg:justify-start">
              {[
                { Icon: FaTwitter, hover: "hover:text-[#1DA1F2]" },
                { Icon: FaFacebookF, hover: "hover:text-[#4267B2]" },
                { Icon: FaInstagram, hover: "hover:text-[#E4405F]" },
                { Icon: FaLinkedinIn, hover: "hover:text-[#0A66C2]" },
              ].map(({ Icon, hover }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-accent/60 ${hover} transition-colors text-xl`}
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon />
                </a>
              ))}
            </nav>
          </article>

          <figure className="lg:w-1/2 flex lg:justify-center">
            <img
              src="assets/contactImg/contactImg.png"
              alt="Contact illustration"
              className="object-cover lg:w-3/4"
            />
          </figure>
        </div>
      </section>

      <section className="lg:w-3/4 mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col gap-[0.625rem]">
            <span className="text-h6-lg text-accent/60 uppercase">
              VISIT OUR OFFICE
            </span>
            <h2 className="text-h2-lg font-bold text-accent">
              We help small businesses
              <br />
              with big ideas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {contactItems.map((item, index) => (
              <article
                key={index}
                className="p-6 rounded-lg transition-all duration-300 hover:bg-accent group"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <div className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <p className="text-h5-lg group-hover:text-white">{item.email}</p>
                    <p className="text-h5-lg group-hover:text-white">{item.secondary}</p>
                  </div>
                  <p className="font-semibold text-h5-lg group-hover:text-white">
                    Get Support
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-white group-hover:text-accent border-secondary text-secondary"
                  >
                    Submit Request
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:w-3/4 mx-auto px-4 py-16">
        <article className="text-center flex flex-col items-center gap-8">
          <figure className="mb-4">
            <img 
              src="assets/contactImg/Arrow.svg" 
              alt="Decorative arrow"
              className="text-secondary" 
            />
          </figure>
          
          <div className="flex flex-col gap-4">
            <span className="text-h6-lg text-accent/60 uppercase">
              WE CAN'T WAIT TO MEET YOU
            </span>
            <h2 className="text-h2-lg font-bold text-accent">Let's Talk</h2>
          </div>

          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            Try it free now
          </Button>
        </article>
      </section>
    </main>
  );
}