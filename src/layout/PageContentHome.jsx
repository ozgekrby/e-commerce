import CarouselHome from "@/components/custom/Carousel";
import FeaturedPost from "@/components/custom/FeaturedPost";
import PickCard from "@/components/custom/PickCard";
import ProductCard from "@/components/custom/ProductCard";
import { Button } from "@/components/ui/button";
import React from "react";

const PageContent = () => {
  const itemCount = 8;
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=1",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=2",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=2",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=2",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=2",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=2",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=2",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=2",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];
  return (
    <main className="flex flex-col gap-[7.5rem]">
      <CarouselHome />
      <section className="flex flex-col items-center text-center gap-[3.7rem] ">
        <div className="flex flex-col gap-[0.625rem] mb-[3.75rem]">
          <h2 className="text-h2 font-bold">EDITOR'S PICK</h2>
          <p className="text-base">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <article className="grid w-full gap-x-[1.875rem] gap-y-[0.9375rem] grid-cols-1 lg:w-3/4 lg:grid-cols-4 lg:grid-rows-2">
          <div className="h-[30rem] lg:col-span-2 lg:row-span-2">
            <PickCard
              category="MEN"
              imageUrl="https://picsum.photos/800/1200?random=1"
            />
          </div>
          <div className="h-[30rem] lg:col-span-1 lg:row-span-2">
            <PickCard
              category="WOMEN"
              imageUrl="https://picsum.photos/800/1200?random=2"
            />
          </div>
          <div className="h-[30rem] lg:h-[14.5rem] lg:col-span-1 lg:row-span-1">
            <PickCard
              category="ACCESSORIES"
              imageUrl="https://picsum.photos/800/600?random=3"
            />
          </div>
          <div className="h-[30rem] lg:h-[14.5rem] lg:col-span-1 lg:row-span-1">
            <PickCard
              category="KIDS"
              imageUrl="https://picsum.photos/800/600?random=4"
            />
          </div>
        </article>
      </section>
      <section className="flex flex-col items-center text-center gap-[3.7rem]">
        <div className="flex flex-col gap-[0.625rem] mb-[3.75rem]">
          <h3 className="text-h3 font-semibold text-secondary">
            Featured Products
          </h3>
          <h2 className="text-h2 font-bold">BESTSELLER PRODUCTS</h2>
          <p className="text-base">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <article className="grid grid-cols-1 gap-[1.875rem] w-full lg:w-3/4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                title={product.title}
                department={product.department}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                imageUrl={product.imageUrl}
                colors={product.colors}
              />
            </div>
          ))}
        </article>
      </section>
      <section>
        <CarouselHome />

        <div className="flex flex-col lg:flex-row">
          <figure className="lg:w-1/2">
            <img
              src="https://picsum.photos/800/600?random=5"
              className="object-cover w-full h-full min-h-[30rem]"
              alt="Summer collection"
            />
          </figure>
          <article className="lg:w-1/2 flex flex-col justify-center lg:px-[7.5rem]">
            <div className="flex flex-col gap-[1.875rem]">
              <span className="text-h6 text-accent/60 tracking-[0.2px] uppercase">
                Summer 2020
              </span>
              <h2 className="text-h2 font-bold tracking-[0.2px]">
                Part of the Neural Universe
              </h2>
              <p className="text-h5 tracking-[0.2px]">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="flex gap-[0.625rem]">
                <Button className="btn-text bg-primary hover:bg-primary/90 text-white border-none">
                  BUY NOW
                </Button>
                <Button
                  variant="outline"
                  className="btn-text border-primary text-primary hover:bg-primary hover:text-white"
                >
                  READ MORE
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col items-center text-center px-[1.875rem]">
        <div className="flex flex-col gap-[0.625rem] mb-[3.75rem]">
          <h3 className="text-h3 font-semibold text-secondary">
            Practice Advice
          </h3>
          <h2 className="text-h2 font-bold">Featured Posts</h2>
          <p className="text-h5">
            Problems trying to resolve the conflict between the two major
          </p>
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.875rem] w-full lg:w-3/4">
          <FeaturedPost />
          <FeaturedPost />
          <FeaturedPost />
        </article>
      </section>
    </main>
  );
};

export default PageContent;
