import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function CarouselHome() {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemCount = 5;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [itemCount]);
  
    const goToNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
    };
  
    const goToPrevious = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? itemCount - 1 : prevIndex - 1
      );
    };
  return (
    <div>
      <Carousel className="w-full h-1/2">
        <CarouselContent
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {Array.from({ length: itemCount }).map((_, index) => (
            <CarouselItem key={index} className="w-full p-0 h-full">
              <div className="w-full h-full">
                <img
                  src={`https://picsum.photos/seed/${index}/${window.innerWidth}/800`}
                  className="w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-between absolute inset-0 items-center">
          <Button onClick={goToPrevious} className="bg-white p-2 rounded-full">
            <span className="text-3xl text-black md:text-5xl">‹</span>
          </Button>

          <Button onClick={goToNext} className="bg-white p-2 rounded-full">
            <span className="text-3xl text-black md:text-5xl">›</span>
          </Button>
        </div>
      </Carousel>
    </div>
  )
}
