import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, LayoutGridIcon, List } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import ShopCategory from "@/components/custom/ShopCategory";
import ProductCard from "@/components/custom/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PageContentShop() {
  const itemCount = 5;
  const brandCount = 6;
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
      imageUrl: "https://picsum.photos/800/1000?random=3",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=4",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=5",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=6",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=7",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=8",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 9,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=9",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 10,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=10",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 11,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=11",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 12,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: 20.0,
      newPrice: 16.0,
      imageUrl: "https://picsum.photos/800/1000?random=12",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="bg-slate-100 flex flex-col py-6 gap-6">
        <div className="flex items-center justify-center ">
          <div className="flex items-center flex-col lg:flex-row lg:w-3/4 lg:justify-between">
            <h2 className="text-h2-lg font-bold text-accent">Shop</h2>
            <nav>
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col justify-center lg:items-center lg:flex-row">
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
          </div>
        </div>

        <article className="flex flex-col lg:flex-row w-3/4 mx-auto lg:justify-between lg:h-72 gap-4 lg:gap-0">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div key={index} className="w-full mx-auto lg:m-0 lg:w-1/6 h-72">
              <ShopCategory />
            </div>
          ))}
        </article>
      </section>

      <section className="flex items-center justify-center py-4 mb-6">
        <div className="flex items-center w-3/4 justify-between flex-col gap-4 lg:flex-row lg:gap-0">
          <span className="text-h5-lg text-accent/60">
            Showing all {products.length} results
          </span>
          <div className="flex gap-2 items-center">
            <p className="text-h5-lg text-accent/60">Views:</p>
            <LayoutGridIcon className="text-accent cursor-pointer" />
            <List className="text-accent/60 cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink className="text-h5-lg text-accent">
                      Popularity
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Filter
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-[3.7rem]">
        <article className="grid grid-cols-1 gap-[1.875rem] w-full lg:w-3/4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </article>

        <nav className="flex justify-center w-full py-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="text-accent" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-accent">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-secondary text-white">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-accent">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className="text-accent" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="text-accent" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </nav>
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