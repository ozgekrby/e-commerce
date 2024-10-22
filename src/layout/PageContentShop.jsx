import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, LayoutGridIcon, List } from "lucide-react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
  const productCount = 12;
  const brandCount = 6;
  return (
    <div>
      <div className="bg-slate-100">
        <div className="flex items-center justify-center">
          <div className="flex items-center flex-col md:flex-row md:w-3/4 md:justify-between">
            <h2>Shop</h2>
            <div>
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col justify-center lg:items-center lg:flex-row ">
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-3/4 mx-auto md:justify-between md:h-72 gap-4 md:gap-0">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div className=" w-full mx-auto md:m-0 md:w-1/6 h-72">
              <ShopCategory />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex items-center w-3/4 justify-between flex-col gap-4 md:flex-row md:gap-0">
          <p className="text-gray-400">Showing all 12 results </p>
          <div className="flex gap-2">
            <p className="text-gray-400">Views:</p>
            <LayoutGridIcon />
            <List className="text-gray-400" />
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList className="flex justify-center lg:items-center flex-row ">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink>Popularity</NavigationMenuLink>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <Button className="bg-secondary">Filter</Button>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-3/4 mx-auto ">
        {Array.from({ length: productCount }).map((_, index) => (
          <div className="w-full md:w-1/4 p-2">
            <ProductCard />
          </div>
        ))}
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
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
