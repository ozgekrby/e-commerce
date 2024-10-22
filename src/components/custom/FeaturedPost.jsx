import React from "react";
import { Button } from "../ui/button";
import { AlarmClockCheckIcon, ChartAreaIcon, ChevronRight } from "lucide-react";

export default function FeaturedPost() {
  return (
    <div className="px-8">
      <div className="relative">
        <img
          src="https://picsum.photos/400/300"
          className="w-full object-cover "
        />
        <span className="absolute top-2 left-2 bg-red-500 text-text-light text-sm font-bold px-3 py-2 rounded text-white">
          NEW
        </span>
      </div>
      <div className="p-4">
        <div className="text-sm text-text-secondary space-x-2">
          <span className="text-secondary">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>
        <h3 className=" text-xl mt-2">Loudest à la Madison #1 (L'integral)</h3>
        <p className="text-text-secondary mt-2">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="mt-4 text-sm text-text-secondary flex justify-between">
          <div className="flex items-center space-x-1">
            <span>
              <AlarmClockCheckIcon className="text-secondary" size={16} />
            </span>
            <span>22 April 2021</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>
              <ChartAreaIcon className="text-secondary" size={16} />
            </span>
            <span>10 comments</span>
          </div>
        </div>
        <Button href="#" variant="ghost" className="px-0 items-center">
          <span>Learn More</span>

          <ChevronRight className="text-secondary" size={24} />
        </Button>
      </div>
    </div>
  );
}
