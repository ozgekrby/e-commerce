import CarouselHome from "@/components/custom/Carousel";
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
        <div className="flex flex-col items-center h-2/3">
          <h2>EDITOR’S PICK </h2>
          <p>Problems trying to resolve the conflict between </p>
          <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-4 md:grid-rows-2 gap-4 w-3/4">
            <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 h-96 ">
              <PickCard />
            </div>

            <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-2">
              <PickCard />
            </div>

            <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1  ">
              <PickCard />
            </div>

            <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 ">
              <PickCard />
            </div>
          </div>
        </div>
        <div className=" w-full flex items-center justify-center flex-col">
          <h3>Featured Products</h3>
          <h2>BESTSELLER PRODUCTS </h2>
          <p>Problems trying to resolve the conflict between </p>
          <div className="flex flex-col w-3/4 items-center justify-between lg:flex-row lg:flex-wrap lg:gap-x-4 lg:gap-y-8">
            {Array.from({ length: itemCount }).map((_, index) => (
              <div className="w-1/5">
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
        <CarouselHome />
        <div className="w-full flex">
          <div className="lg:w-1/3">
            <img
              src="https://picsum.photos/400/300"
              className="object-cover w-full"
            />
          </div>
          <div className="lg:w-2/3">
            <h3>Summer 2020</h3>
            <h2>BESTSELLER PRODUCTS </h2>
            <p>
              We know how large objects will act, but things on a small scale.{" "}
            </p>
            <Button>
              Buy Now
            </Button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
