import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, LayoutGridIcon, List } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/actions/thunkActions";

export default function PageContentShop() {
  const dispatch = useDispatch();
  const { gender, category } = useParams();
  const categories = useSelector((state) => state.product.categories);
  const total = useSelector((state) => state.product.total);
  const product = useSelector((state) => state.product.productList);
  const brandCount = 6;

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {}, [category, gender]);

  const getCategoryId = () => {
    const foundCategory = categories.find(
      (cat) => cat.code.split(":")[1] === category
    );

    return foundCategory?.id;
  };
  const id = getCategoryId();
  const filterProductsByCat = product.filter((item) => item.category_id === id);

  return (
    <main className="flex flex-col">
      <section className="bg-slate-100 flex flex-col py-6 gap-6">
        <div className="flex items-center justify-center">
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
                  {gender && (
                    <>
                      <ChevronRight className="text-accent/60" size={24} />
                      <NavigationMenuItem>
                        <span className="text-accent/60 capitalize">
                          {gender}
                        </span>
                      </NavigationMenuItem>
                    </>
                  )}
                  {category && (
                    <>
                      <ChevronRight className="text-accent/60" size={24} />
                      <NavigationMenuItem>
                        <span className="text-accent/60 capitalize">
                          {category}
                        </span>
                      </NavigationMenuItem>
                    </>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
        </div>

        <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-3/4 mx-auto gap-4">
          {topCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.gender === "k" ? "kadin" : "erkek"}/${
                category.code.split(":")[1]
              }`}
              className="relative block w-full h-72"
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-all duration-300 rounded-md">
                <h3>{category.gender === "k" ? "Kadın" : "Erkek"}</h3>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              </div>
            </Link>
          ))}
        </article>
      </section>

      <section className="flex items-center justify-center py-4 mb-6">
        <div className="flex items-center w-3/4 justify-between flex-col gap-4 lg:flex-row lg:gap-0">
          <span className="text-h5-lg text-accent/60">
            Showing all {total} results
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
          {filterProductsByCat.map((product) => (
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
                <PaginationLink
                  href="#"
                  isActive
                  className="bg-secondary text-white"
                >
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
            <figure key={index} className="mx-auto lg:m-0">
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
