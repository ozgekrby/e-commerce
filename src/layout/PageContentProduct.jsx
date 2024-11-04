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
  ChevronLeft,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Info, MessageCircle } from "lucide-react";
import ProductCard from "@/components/custom/ProductCard";
import { useSelector } from "react-redux";

export default function PageContentProduct() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = useSelector((state) => state.product.productList);
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
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <main className="flex flex-col">
      <section className="bg-slate-100 py-6">
        <nav className="w-3/4 mx-auto">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center flex-row">
              <NavigationMenuItem>
                <Link to="/home" className="text-accent font-bold">
                  Home
                </Link>
              </NavigationMenuItem>
              <ChevronRight className="text-accent/60" size={24} />
              <NavigationMenuItem>
                <Link to="/shop" className="text-accent/60">
                  Shop
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </section>

      <section className="w-3/4 mx-auto flex flex-col lg:flex-row lg:gap-12">
        <article className="lg:w-2/3">
          <Carousel className="w-full relative">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={images[currentSlide]}
                      alt={`Product image ${currentSlide + 1}`}
                      className="w-full h-auto"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>

            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="text-accent" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="text-accent" />
            </button>
          </Carousel>

          <div className="flex justify-start mt-4 space-x-2">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-20 h-20 border-2 ${
                  currentSlide === index ? "border-primary" : "border-transparent"
                }`}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </article>

        <article className="lg:w-1/3 space-y-4">
          <h1 className="text-h2-lg font-bold text-accent">Floating Phone</h1>

          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-5 h-5 ${i < 4 ? "text-primary" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-2 text-h5-lg text-accent/60">10 Reviews</span>
          </div>

          <p className="text-h2-lg font-bold text-accent">$1,139.33</p>

          <p className="text-h5-lg">
            <span className="font-semibold text-accent">Availability:</span>{" "}
            <span className="text-accent/60">In Stock</span>
          </p>

          <p className="text-h5-lg text-accent/60">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>

          <hr className="border-accent/20" />

          <div className="flex space-x-2">
            {["bg-secondary", "bg-primary", "bg-accent", "bg-gray-700"].map(
              (color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full ${color}`}
                ></div>
              )
            )}
          </div>

          <div className="flex space-x-2">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
              Select Options
            </Button>
            <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
              <HeartIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
              <ShoppingCartIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
              <EyeIcon className="h-4 w-4" />
            </Button>
          </div>
        </article>
      </section>

      <section className="w-3/4 mx-auto">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="description" className="flex items-center text-h5-lg text-accent">
              Description
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center text-h5-lg text-accent">
              Additional Information
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center text-h5-lg text-accent">
              Reviews (0)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="bg-white rounded-lg p-8">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <figure className="lg:w-1/3 mb-4 lg:mb-0">
                <img
                  src="https://picsum.photos/600/400?random=4"
                  className="w-full object-cover h-full"
                  alt="Product description"
                />
              </figure>

              <div className="lg:w-2/3 flex flex-col lg:flex-row lg:gap-8">
                <article className="mb-6 lg:m-0 lg:w-1/2">
                  <h2 className="text-h2-lg font-bold text-accent mb-4">
                    The quick fox jumps over
                  </h2>
                  <div className="text-h5-lg text-accent/60 space-y-4">
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                      RELIT official consequent door ENIM RELIT Mollie.
                    </p>
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                      RELIT official consequent door ENIM RELIT Mollie.
                    </p>
                    <p>
                      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                      RELIT official consequent door ENIM RELIT Mollie.
                    </p>
                  </div>
                </article>

                <div className="flex flex-col lg:gap-8">
                  <article className="w-full mb-6">
                    <h3 className="text-h3-lg font-bold text-accent mb-2">
                      The quick fox jumps over
                    </h3>
                    <ul className="list-none space-y-2">
                      {[1, 2, 3, 4].map((_, index) => (
                        <li key={index} className="flex items-center text-h5-lg text-accent/60">
                          <ChevronRight className="mr-2 text-accent" size={16} />
                          The quick fox jumps over the lazy dog
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className="w-full mb-6">
                    <h3 className="text-h3-lg font-bold text-accent mb-2">
                      The quick fox jumps over
                    </h3>
                    <ul className="list-none space-y-2">
                      {[1, 2, 3, 4].map((_, index) => (
                        <li key={index} className="flex items-center text-h5-lg text-accent/60">
                          <ChevronRight className="mr-2 text-accent" size={16} />
                          The quick fox jumps over the lazy dog
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="flex flex-col items-center gap-[3.7rem]">
        <h2 className="text-h2-lg font-bold text-accent w-3/4 text-start">
          BESTSELLER PRODUCTS
        </h2>
        <article className="grid grid-cols-1 gap-[1.875rem] w-full lg:w-3/4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </article>
      </section>
      <section className="py-[3.7rem]">
        <article className="w-3/4 flex flex-col lg:flex-row mx-auto justify-between gap-4 lg:gap-0">
          {Array.from({ length: brandCount }).map((_, index) => (
            <figure key={index} className="mx-auto lg:m-0 ">
              <img 
                src={`assets/brandlogos/${index + 1}.png`} 
                alt={`Brand ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </figure>
          ))}
        </article>
      </section>
    </main>
  );
}