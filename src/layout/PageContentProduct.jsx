import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  StarIcon,
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon,
  ChevronRight,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Info, MessageCircle } from "lucide-react";
import ProductCard from "@/components/custom/ProductCard";
export default function PageContentProduct() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemCount = 8;
  const brandCount = 6;
  const images = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto flex">
        <NavigationMenu>
          <NavigationMenuList className="flex  justify-center items-center flex-row ">
            <NavigationMenuItem>
              <Link to="/home" className="font-bold">
                Home
              </Link>
            </NavigationMenuItem>
            <ChevronRight className="text-gray-400" size={24} />
            <NavigationMenuItem>
              <Link to="/shop" className="text-gray-400">
                Shop
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="w-3/4 mx-auto p-4 flex flex-col lg:gap-12 lg:flex-row ">
        <div>
          <Carousel className="w-full ">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={images[currentSlide]}
                      alt={`Product image ${currentSlide + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>

            <button
              className="absolute left-2 top-1/2 -translate-y-1/2"
              onClick={handlePrevious}
            >
              {"<"}
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={handleNext}
            >
              {">"}
            </button>
          </Carousel>

          <div className="flex justify-start mt-4 space-x-2">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-20 h-20 border-2 ${
                  currentSlide === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:space-y-4  lg:w-1/3 lg:p-4 ">
          <h2 className="text-2xl font-bold">Floating Phone</h2>

          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-5 h-5 ${
                  i < 4 ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">10 Reviews</span>
          </div>

          <p className="text-3xl font-bold">$1,139.33</p>

          <p className="text-sm">
            <span className="font-semibold">Availability:</span> In Stock
          </p>

          <p className="text-sm text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            ENIM velit mollit Exercitation venial consequent sent nostrum met.
          </p>
          <hr />
          <div className="flex space-x-2">
            {[
              "bg-blue-500",
              "bg-green-500",
              "bg-orange-500",
              "bg-gray-700",
            ].map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full ${color}`}
              ></div>
            ))}
          </div>

          <div className="flex space-x-2">
            <Button className="flex-1">Select Options</Button>
            <Button variant="outline" size="icon">
              <HeartIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ShoppingCartIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <EyeIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto w-3/4">
        <div className="flex justify-center">
          <div className="flex lg:justify-center">
            <div className="flex items-center">
              <Sun className="mr-2" size={16} />
              Description
            </div>
            <div className="flex items-center ">
              <Info className="mr-2" size={16} />
              Additional Information
            </div>
            <div className="flex items-center ">
              <MessageCircle className="mr-2" size={16} />
              Reviews (0)
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="lg:w-1/3 mb-4 lg:mb-0">
              <img
                src="https://picsum.photos/600/400?random=4"
                className="w-full object-cover h-full"
                alt="Product"
              />
            </div>

            <div className="lg:w-2/3 flex flex-col lg:flex-row lg:gap-8">
              <div className="mb-6 lg:m-0 lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                  the quick fox jumps over
                </h2>
                <div className="text-gray-600 mb-4">
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>

              <div className="flex flex-col  lg:gap-8">
                <div className="w-full mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    the quick fox jumps over
                  </h3>
                  <ul className="list-none">
                    {[1, 2, 3, 4].map((item, index) => (
                      <li key={index} className="flex items-center mb-2">
                        <ChevronRight
                          className="mr-2 text-gray-400"
                          size={16}
                        />
                        the quick fox jumps over the lazy dog
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full  mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    the quick fox jumps over
                  </h3>
                  <ul className="list-none">
                    {[1, 2, 3, 4].map((item, index) => (
                      <li key={index} className="flex items-center mb-2">
                        <ChevronRight
                          className="mr-2 text-gray-400"
                          size={16}
                        />
                        the quick fox jumps over the lazy dog
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center text-center flex-col">
        <h2 className="w-3/4 text-start">BESTSELLER PRODUCTS </h2>
        <div className="flex flex-col w-3/4 items-center justify-between lg:flex-row lg:flex-wrap lg:gap-x-4 lg:gap-y-8">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div className="w-full lg:w-1/5">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="w-3/4 flex flex-col md:flex-row mx-auto justify-between gap-4 md:gap-0">
          {Array.from({ length: brandCount }).map((_, index) => (
            <div className="mx-auto md:m-0 ">
              <img src={`assets/brandlogos/${index + 1}.png`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
