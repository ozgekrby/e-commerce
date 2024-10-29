import { AlarmClockCheckIcon, ChartAreaIcon, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function FeaturedPost() {
  return (
    <div className="flex flex-col h-full">
      <div className="relative">
        <img
          src="https://picsum.photos/400/300"
          className="w-full h-[18.75rem] object-cover"
          alt="Featured post"
        />
        <span className="absolute top-[1.25rem] left-[1.25rem] bg-[#E74040] text-white text-h6 font-bold px-[0.625rem] py-[0.3125rem] rounded">
          NEW
        </span>
      </div>
      <div className="flex flex-col gap-[1.5rem] p-[1.5rem] flex-grow text-left">
        <div className="flex gap-[1rem] text-h6">
          <span className="text-secondary">Google</span>
          <span >Trending</span>
          <span >New</span>
        </div>
        
        <h3 className="text-h3 font-bold">
          Loudest à la Madison #1 (L'integral)
        </h3>
        
        <p className="text-p">
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </p>
        
        <div className="flex justify-between">
          <div className="flex items-center gap-[0.5rem]">
            <AlarmClockCheckIcon className="text-secondary" size={20} />
            <span className="text-li">22 April 2021</span>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <ChartAreaIcon className="text-secondary" size={20} />
            <span>10 comments</span>
          </div>
        </div>
        <div>
        <Button 
          variant="ghost" 
          className="flex items-center gap-[0.625rem] text-h6  p-0"
        >
          Learn More
          <ChevronRight className="text-secondary hover:text-secondary/90" size={20} />
        </Button>
      </div>
      </div>
    </div>
  );
}