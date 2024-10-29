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
import { Link } from "react-router-dom";

export default function PageContentTeam() {
  const memberCount = 9;

  return (
    <main className="flex flex-col gap-[7.5rem]">
      <section className="bg-slate-100 py-16">
        <div className="w-full lg:w-3/4 mx-auto px-4 lg:px-0">
          <article className="w-full lg:w-2/3 mx-auto text-center flex flex-col gap-4">
            <div className="flex flex-col gap-[0.625rem]">
              <span className="text-h6-lg text-accent/60 uppercase">
                WHAT WE DO
              </span>
              <h1 className="text-h2-lg font-bold text-accent">
                Innovation tailored for you
              </h1>
            </div>

            <nav className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center flex-row">
                  <NavigationMenuItem>
                    <Link to="/home" className="text-accent font-bold">
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <ChevronRight className="text-accent/60 mx-2" size={20} />
                  <NavigationMenuItem>
                    <Link to="/team" className="text-accent/60">
                      Team
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </article>
        </div>
      </section>

      <section className="w-full  mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <figure className="lg:col-span-2">
            <img
              src="https://picsum.photos/800/600?random=1"
              alt="Team main image"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {[2, 3, 4, 5].map((num) => (
              <figure key={num}>
                <img
                  src={`https://picsum.photos/400/300?random=${num}`}
                  alt={`Team gallery image ${num-1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full lg:w-3/4 mx-auto px-4 lg:px-0">
        <div className="flex flex-col items-center gap-[3.7rem]">
          <h2 className="text-h2-lg font-bold text-accent">MEET OUR TEAM</h2>
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {Array.from({ length: memberCount }).map((_, index) => (
              <div key={index}>
                <TeamMember />
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="w-full lg:w-3/4 mx-auto px-4 py-16">
        <article className="text-center flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-h2-lg font-bold text-accent">
              Start your 14 days free trial
            </h2>
            <p className="text-h5-lg text-accent/60">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent.
            </p>
          </div>
          
          <Button className="bg-secondary hover:bg-secondary/90 text-white w-full lg:w-auto">
            Try it free now
          </Button>
          
          <nav className="flex justify-center gap-6">
            {[FaTwitter, FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="text-secondary hover:text-secondary/80 transition-colors"
                aria-label={`Social media link ${index + 1}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </nav>
        </article>
      </section>
    </main>
  );
}