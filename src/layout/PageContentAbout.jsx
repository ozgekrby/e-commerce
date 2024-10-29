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
  const brandCount = 6;
  const handlePlayClick = () => {
    const thumbnail = document.querySelector('.thumbnail-container');
    const playButton = document.querySelector('.play-button');
    const video = document.querySelector('.video-element') ;

    if (thumbnail && playButton && video) {
      thumbnail.classList.add('hidden');
      playButton.classList.add('hidden');
      video.classList.remove('hidden');
    }
  };
  return (
    <main className="flex flex-col gap-[7.5rem]">
      <section className="mx-auto w-full lg:w-3/4 flex flex-col lg:flex-row items-center text-center lg:text-left gap-8">
        <article className="">
          <div className="flex flex-col gap-6">
            <span className="text-h6-lg font-medium uppercase">
              ABOUT COMPANY
            </span>
            <h1 className="text-4xl font-bold ">ABOUT US</h1>
            <p className="text-h5-lg">
              We know how large objects will act, but things on a small scale
            </p>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-white mt-4">
            Get Quote Now
          </Button>
        </article>
        <figure className="lg:w-1/2 flex lg:justify-center">
          <img
            src="assets/aboutImg/aboutImg.png"
            alt="About Company"
            className="object-cover lg:w-3/4"
          />
        </figure>
      </section>

      <section className="w-3/4 mx-auto flex  flex-col gap-[7.5rem]">
        <div className="flex flex-col md:flex-row md:items-start gap-8  ">
          <article className="md:w-1/3  ">
            <h6 className="text-h6-lg text-primary mb-4">Problems trying</h6>
            <h2 className="text-h2-lg font-bold text-accent">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
          </article>
          <article className="w-1/2">
            <p className="text-h5-lg text-accent/60">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </article>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <article key={index} className="text-center">
              <h3 className="text-4xl font-bold text-accent mb-2">
                {stat.value}
              </h3>
              <p className="text-h5-lg font-bold text-accent/60">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-3/4 mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-video thumbnail-container">

          <img
            src="https://picsum.photos/1920/1080?mountains"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 w-20 h-20 bg-[#23A6F0] rounded-full flex items-center justify-center
                 hover:bg-[#23A6F0]/90 transition-all duration-300 shadow-lg play-button"
            aria-label="Play video"
            onClick={handlePlayClick}
          >
            <div
              className="w-0 h-0 border-t-[12px] border-t-transparent 
                    border-l-[20px] border-l-white 
                    border-b-[12px] border-b-transparent 
                    ml-2"
            ></div>
          </button>

          <video className="hidden video-element" controls>
            <source
              src="assets/aboutVideo/2759484-uhd_3840_2160_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>


      <section className="w-full lg:w-3/4 mx-auto">
        <div className="flex flex-col items-center text-center gap-[3.7rem]">
          <div className="flex flex-col gap-[0.625rem] lg:w-1/2">
            <h2 className="text-h2-lg font-bold text-accent">MEET OUR TEAM</h2>
            <p className="text-h5-lg text-accent/60">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {Array.from({ length: memberCount }).map((_, index) => (
              <div key={index}>
                <TeamMember />
              </div>
            ))}
          </article>
        </div>
      </section>


      <section className="w-full lg:w-3/4 mx-auto">
        <div className="flex flex-col items-center text-center gap-[3.7rem]">
          <div className="flex flex-col gap-[0.625rem] lg:w-1/2">
            <h2 className="text-h2-lg font-bold text-accent">
              Big Companies Are Here
            </h2>
            <p className="text-h5-lg text-accent/60">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <article className="flex flex-col md:flex-row mx-auto justify-between gap-4 md:gap-0 w-full">
            {Array.from({ length: brandCount }).map((_, index) => (
              <figure key={index} className="mx-auto md:m-0">
                <img
                  src={`assets/brandlogos/${index + 1}.png`}
                  alt={`Brand ${index + 1}`}
                  className="object-contain"
                />
              </figure>
            ))}
          </article>
        </div>
      </section>

      <section className="flex flex-col md:flex-row">
        <article className="bg-secondary p-8 md:w-1/2 text-white flex flex-col justify-center gap-[1.875rem]">
          <div className="flex flex-col gap-[0.625rem]">
            <span className="text-h6-lg uppercase font-semibold">Work with us</span>
            <h2 className="text-4xl font-bold">Now Let's grow Yours</h2>
            <p className="text-h5-lg">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
          </div>
          <Button
            variant="outline"
            className=" text-white bg-secondary w-1/5"
          >
            Button
          </Button>
        </article>
        <figure className="md:w-1/2">
          <img
            src="https://picsum.photos/600/400?random=0611"
            alt="Work with us"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>
    </main>
  );
}
