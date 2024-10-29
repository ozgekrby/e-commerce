import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function CarouselHome() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      season: "SUMMER 2020",
      titleLine1: "NEW COLLECTION",
      titleLine2: "",
      description: "We know how large objects will act, but things on a small scale.",
      buttonText: "SHOP NOW",
      image: "https://picsum.photos/1920/1080?random=1"
    },
    {
      season: "SUMMER 2020",
      titleLine1: "Vita Classic",
      titleLine2: "Product",
      description: "We know how large objects will act, We know how are objects will act, We know",
      price: "$16.48",
      buttonText: "ADD TO CART",
      image: "https://picsum.photos/1920/1080?random=2"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-full">
      <Carousel className="relative w-full h-full">
        <CarouselContent
          className="h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 z-10 px-[4rem] flex items-center">
                  <div className="relative  mx-auto md:mx-0 ">
                    <div className="flex flex-col justify-center gap-4  text-white font-inter">
                      <span className="text-sm md:text-xl font-bold ">
                        {slide.season}
                      </span>
                      <div className="space-y-2 ">
                        <h2 className="text-h1 md:text-5xl font-bold ">
                          {slide.titleLine1}
                        </h2>
                        <h2 className="text-h1 md:text-5xl font-bold ">
                          {slide.titleLine2}
                        </h2>
                      </div>
                      <p className="text-h3  font-normal ">
                        {slide.description}
                      </p>
                      <div className="flex gap-4 items-center">
                        {slide.price && (
                          <span className="text-h2 leading-[3.625rem] font-bold">
                            {slide.price}
                          </span>
                        )}
                        <Button 
                          className="w-fit px-10 py-4 bg-primary text-white rounded
                                   text-base  font-medium"
                        >
                          {slide.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20">
          <button 
            onClick={goToPrevious}
            className="w-16 h-16 flex items-center justify-center rounded-full border-none text-white text-4xl hover:bg-white/10 transition-colors"
          >
            ‹
          </button>
          <button 
            onClick={goToNext}
            className="w-16 h-16 flex items-center justify-center rounded-full  border-none text-white text-4xl hover:bg-white/10 transition-colors"
          >
            ›
          </button>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}