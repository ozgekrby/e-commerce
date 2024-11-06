import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
import ProductCard from "@/components/custom/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetail,
  fetchProducts,
} from "@/redux/actions/thunkActions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function PageContentProduct() {
  {
    /* TODO design fix */
  }
  const { productId, categoryId } = useParams();
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = useSelector((state) => state.product.productList);
  const productDetail = useSelector((state) => state.product.productDetail);
  const brandCount = 6;

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [productId, dispatch]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  const handleNext = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % (productDetail.images?.length || 1)
    );
  };

  const handlePrevious = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + (productDetail.images?.length || 1)) %
        (productDetail.images?.length || 1)
    );
  };

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProducts(`category=${categoryId}`));
    }
  }, [categoryId, dispatch]);

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

      <section className="w-3/4 mx-auto flex flex-col lg:flex-row lg:gap-12 py-8">
        <article className="lg:w-2/3"> 
          <Carousel className="w-full relative cursor-pointer">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={productDetail.images?.[currentSlide]?.url}
                      alt={`${productDetail.name} image ${currentSlide + 1}`}
                      className="w-full object-cover h-full transition-transform duration-300 transform hover:scale-110"
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
            {productDetail.images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-20 h-20 border-2 ${
                  currentSlide === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </button>
            ))}
          </div>
        </article>
        <article className="lg:w-1/3 space-y-4">
          <h1 className="text-h2-lg font-bold text-accent">
            {productDetail.name}
          </h1>

          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-5 h-5 ${
                  i < productDetail.rating ? "text-primary" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-h5-lg text-accent/60">
              {productDetail.sell_count} Reviews
            </span>
          </div>

          <p className="text-h2-lg font-bold text-accent">
            ${productDetail.price?.toFixed(2)}
          </p>

          <p className="text-h5-lg">
            <span className="font-semibold text-accent">Availability:</span>{" "}
            <span className="text-accent/60">
              {productDetail.stock > 0
                ? `In Stock (${productDetail.stock})`
                : "Out of Stock"}
            </span>
          </p>

          <p className="text-h5-lg text-accent/60">
            {productDetail.description}
          </p>

          <hr className="border-accent/20" />

          <div className="flex space-x-2">
            {["bg-secondary", "bg-primary", "bg-accent", "bg-gray-700"].map(
              (color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full ${color} cursor-pointer`}
                ></div>
              )
            )}
          </div>

          <div className="flex space-x-2">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
              disabled={productDetail.stock === 0}
            >
              {productDetail.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <HeartIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ShoppingCartIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <EyeIcon className="h-4 w-4" />
            </Button>
          </div>
        </article>
      </section>

      <section className="w-3/4 mx-auto py-8">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger
              value="description"
              className="flex items-center text-h5-lg text-accent"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="info"
              className="flex items-center text-h5-lg text-accent"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="flex items-center text-h5-lg text-accent"
            >
              Reviews ({productDetail.sell_count})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="bg-white rounded-lg p-8">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <figure className="lg:w-1/3 mb-4 lg:mb-0 cursor-pointer ">
                <img
                  src={productDetail.images?.[0]?.url}
                  className="w-full object-cover h-full rounded-lg transition-transform duration-300 transform hover:scale-110"
                  alt={productDetail.name}
                />
              </figure>

              <div className="lg:w-2/3 flex flex-col lg:flex-row lg:gap-8">
                <article className="mb-6 lg:m-0 lg:w-1/2">
                  <h2 className="text-h2-lg font-bold text-accent mb-4">
                    {productDetail.description}
                  </h2>
                </article>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="info" className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="space-y-4">
                <h3 className="text-h3-lg font-bold text-accent">
                  Product Information
                </h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-center text-h5-lg">
                    <span className="font-semibold text-accent w-32">
                      Name:
                    </span>
                    <span className="text-accent/60">{productDetail.name}</span>
                  </li>
                  <li className="flex items-center text-h5-lg">
                    <span className="font-semibold text-accent w-32">
                      Stock:
                    </span>
                    <span className="text-accent/60">
                      {productDetail.stock} units
                    </span>
                  </li>
                  <li className="flex items-center text-h5-lg">
                    <span className="font-semibold text-accent w-32">
                      Category ID:
                    </span>
                    <span className="text-accent/60">
                      {productDetail.category_id}
                    </span>
                  </li>
                  <li className="flex items-center text-h5-lg">
                    <span className="font-semibold text-accent w-32">
                      Store ID:
                    </span>
                    <span className="text-accent/60">
                      {productDetail.store_id}
                    </span>
                  </li>
                </ul>
              </article>

              <article className="space-y-4">
                <h3 className="text-h3-lg font-bold text-accent">
                  Sales Information
                </h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-center text-h5-lg">
                    <span className="font-semibold text-accent w-32">
                      Price:
                    </span>
                    <span className="text-accent/60">
                      ${productDetail.price?.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex items-center text-h5-lg">
                    <span className="font-semibold text-accent w-32">
                      Sold:
                    </span>
                    <span className="text-accent/60">
                      {productDetail.sell_count} units
                    </span>
                  </li>
                  <li className="flex items-center text-h5-lg">
                    <span className="font-semibold text-accent w-32">
                      Rating:
                    </span>
                    <span className="text-accent/60">
                      {productDetail.rating} / 5
                    </span>
                  </li>
                  <li className="flex items-center text-h5-lg">
                    <span className="font-semibold text-accent w-32">
                      Status:
                    </span>
                    <span className="text-accent/60">
                      {productDetail.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </li>
                </ul>
              </article>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="bg-white rounded-lg p-8">
            <div className="text-center text-accent/60">
              No reviews yet. Be the first to review this product!
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="flex flex-col items-center gap-[3.7rem] py-8">
        <h2 className="text-h2-lg font-bold text-accent w-3/4 text-start">
          RELATED PRODUCTS
        </h2>
        <article className="grid grid-cols-1 gap-[1.875rem] w-full lg:w-3/4 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </article>
      </section>

      <section className="py-[3.7rem]">
        <article className="w-3/4 flex flex-col lg:flex-row mx-auto justify-between gap-4 lg:gap-0">
          {Array.from({ length: brandCount }).map((_, index) => (
            <figure key={index} className="mx-auto lg:m-0">
              <img
                src={`/assets/brandlogos/${index + 1}.png`}
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
