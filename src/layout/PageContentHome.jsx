import CarouselHome from "@/components/custom/Carousel";
import FeaturedPost from "@/components/custom/FeaturedPost";
import PickCard from "@/components/custom/PickCard";
import ProductCard from "@/components/custom/ProductCard";
import { Button } from "@/components/ui/button";
import React from "react";

const PageContent = () => {
  const itemCount = 8;
  return (
    <>
      <div>
        <CarouselHome />
        <div className="flex flex-col items-center text-center h-2/3">
          <h2>EDITOR’S PICK </h2>
          <p>Problems trying to resolve the conflict between </p>
          <div className="grid grid-cols-1 gap-4 w-3/4 md:grid-cols-4 md:grid-rows-2">
            <div className="h-64 md:h-96 md:col-span-2 md:row-span-2">
              <PickCard />
            </div>

            <div className="h-64 md:h-96 md:col-span-1 md:row-span-2">
              <PickCard />
            </div>

            <div className="h-64 md:h-48 md:col-span-1 md:row-span-1">
              <PickCard />
            </div>

            <div className="h-64 md:h-48 md:col-span-1 md:row-span-1">
              <PickCard />
            </div>
          </div>
        </div>
        <div className=" w-full flex items-center justify-center text-center flex-col">
          <h3>Featured Products</h3>
          <h2>BESTSELLER PRODUCTS </h2>
          <p>Problems trying to resolve the conflict between </p>
          <div className="flex flex-col w-3/4 items-center justify-between lg:flex-row lg:flex-wrap lg:gap-x-4 lg:gap-y-8">
            {Array.from({ length: itemCount }).map((_, index) => (
              <div className="w-full lg:w-1/5">
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
        <CarouselHome />
        <div className="w-full flex flex-col-reverse text-center md:flex-row">
          <div className="lg:w-1/3">
            <img
              src="https://picsum.photos/400/300"
              className="object-cover w-full"
            />
          </div>
          <div className="md:w-2/3 md:flex md:flex-col md:justify-center md:items-center">
            <div className="md:p-12">
              <h3>Summer 2020</h3>
              <h2>Part of the Neural Universe </h2>
              <p>
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="w-full flex gap-4 flex-col justify-center items-center md:flex-row ">
                <Button className="w-1/3 md:w-1/5">Buy Now</Button>
                <Button variant="outline" className="w-1/3 md:w-1/5">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex md:flex-col md:items-center">
        <h3 className="text-secondary text-center">Practice Advice</h3>
              <h2 className=" text-center">Featured Products </h2>
              <p className=" text-center">  
              Problems trying to resolve the conflict between the two major 
              </p>
              <div className="md:flex md:w-2/3 "> 
          <div className="md:w-1/3">
          <FeaturedPost/>
          </div>
          <div className="md:w-1/3">
          <FeaturedPost/>
          </div>
          <div className=" md:w-1/3">
          <FeaturedPost/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
