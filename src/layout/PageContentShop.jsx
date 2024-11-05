import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, LayoutGridIcon, List } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
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
import { setFilter, setOffset } from "@/redux/actions/productActions";
import { Input } from "@/components/ui/input";

export default function PageContentShop() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { gender, category, categoryId } = useParams();

  const categories = useSelector((state) => state.product.categories);
  const total = useSelector((state) => state.product.total);
  const products = useSelector((state) => state.product.productList);
  const filter = useSelector((state) => state.product.filter);
  const limit = useSelector((state) => state.product.limit);
  const offset = useSelector((state) => state.product.offset);
  const [sort, setSort] = useState("");
  const brandCount = 6;

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const handleCategoryClick = useCallback(() => {
    dispatch(setOffset(0));
    dispatch(setFilter(""));
    setSort("");
  }, [dispatch]);

  useEffect(() => {
    if (categoryId) {
      dispatch(setOffset(0));
      dispatch(setFilter(""));
      setSort("");
      history.replace(`/shop/${gender}/${category}/${categoryId}`);
    }
  }, [categoryId, gender, category, dispatch, history]);

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams();

    if (categoryId) params.append("category", categoryId);
    if (filter) params.append("filter", filter);
    if (sort) params.append("sort", sort);
    if (limit) params.append("limit", limit);
    if (offset) params.append("offset", offset);

    return params.toString();
  }, [categoryId, filter, sort, limit, offset]);

  const loadProducts = useCallback(() => {
    const queryString = createQueryString();
    const newUrl = `/shop/${gender}/${category}/${categoryId}${
      queryString ? `?${queryString}` : ""
    }`;
    history.push(newUrl);
    dispatch(fetchProducts(queryString));
  }, [dispatch, createQueryString, history, gender, category, categoryId]);

  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    const urlFilter = params.get("filter");
    const urlSort = params.get("sort");
    const urlOffset = params.get("offset");

    if (urlFilter) dispatch(setFilter(urlFilter));
    if (urlSort) setSort(urlSort);
    if (urlOffset) dispatch(setOffset(parseInt(urlOffset)));
  }, [dispatch, history.location.search]);

  useEffect(() => {
    loadProducts();
  }, [categoryId, filter, sort, offset, loadProducts]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
    dispatch(setOffset(0));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleFilterClick = () => {
    dispatch(setOffset(0));
    loadProducts();
  };

  const currentPage = Math.floor(offset / limit) + 1;
  const startItem = offset + 1;
  const endItem = Math.min(offset + limit, total);

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
              }/${category.id}`}
              className="relative block w-full h-72"
              onClick={handleCategoryClick}
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
            Showing {startItem} to {endItem} of {total} results
          </span>
          <div className="flex gap-2 items-center">
            <p className="text-h5-lg text-accent/60">Views:</p>
            <LayoutGridIcon className="text-accent cursor-pointer" />
            <List className="text-accent/60 cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
            <select
              value={sort}
              onChange={handleSortChange}
              className="border p-2 rounded"
            >
              <option value="">Sort by...</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
              <option value="rating:asc">Rating: Low to High</option>
              <option value="rating:desc">Rating: High to Low</option>
            </select>
            <Input
              type="text"
              placeholder="Filter products..."
              value={filter}
              onChange={handleFilterChange}
              className="max-w-[200px]"
            />
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white"
              onClick={handleFilterClick}
            >
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
                <PaginationPrevious
                  onClick={() =>
                    dispatch(setOffset(Math.max(0, offset - limit)))
                  }
                  className={`text-accent ${
                    offset === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-accent/10"
                  }`}
                  disabled={offset === 0}
                />
              </PaginationItem>

              {Array.from({ length: Math.ceil(total / limit) }).map(
                (_, idx) => {
                  const pageNumber = idx + 1;
                  const pageOffset = idx * limit;
                  const isCurrentPage = offset === pageOffset;
                  const isFirstPage = pageNumber === 1;
                  const isLastPage = pageNumber === Math.ceil(total / limit);
                  const isWithinRange =
                    Math.abs(pageNumber - (Math.floor(offset / limit) + 1)) <=
                    1;

                  if (isFirstPage || isLastPage || isWithinRange) {
                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          onClick={() => dispatch(setOffset(pageOffset))}
                          isActive={isCurrentPage}
                          className={
                            isCurrentPage
                              ? "bg-accent text-white hover:bg-accent/90"
                              : "text-accent hover:bg-accent/10"
                          }
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                  if (
                    (idx === 1 && !isWithinRange) ||
                    (idx === Math.ceil(total / limit) - 2 && !isWithinRange)
                  ) {
                    return (
                      <PaginationItem key={`ellipsis-${idx}`}>
                        <PaginationEllipsis className="text-accent" />
                      </PaginationItem>
                    );
                  }

                  return null;
                }
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => dispatch(setOffset(offset + limit))}
                  className={`text-accent ${
                    offset + limit >= total
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-accent/10"
                  }`}
                  disabled={offset + limit >= total}
                />
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
