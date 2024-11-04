import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  InstagramIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.client.user);

  return (
    <header className="font-inter">
      <div className="flex items-center justify-between p-4 lg:hidden">
        <Link to="/" className="text-h1 font-bold">
          Bandage
        </Link>
        <div className="flex items-center gap-4">
          <User2Icon size={20} className="text-secondary" />
          <SearchIcon size={20} className="text-secondary" />
          <ShoppingCartIcon size={20} className="text-secondary" />
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon size={20} className="text-secondary" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="p-4 bg-white lg:hidden">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block py-2 text-base text-accent hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 text-base text-accent hover:text-primary"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-base text-accent hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 text-base text-accent hover:text-primary"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 text-base text-accent hover:text-primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/pages"
                className="block py-2 text-base text-accent hover:text-primary"
              >
                Pages
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="hidden lg:block">
        <div className="w-full bg-accent flex justify-center">
          <div className="flex items-center w-3/4 justify-between gap-8 py-2">
            <div className="flex items-center gap-8">
              <Button
                variant="link"
                className="p-0 text-white text-base hover:text-primary"
              >
                <PhoneIcon size={16} className="mr-2" />
                (225) 555-0118
              </Button>
              <Button
                variant="link"
                className="p-0 text-white text-base hover:text-primary"
              >
                <MailIcon size={16} className="mr-2" />
                michelle.rivera@example.com
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white text-base">
                Follow Us and get a chance to win 80% off
              </span>
              <div className="flex items-center gap-2">
                <span className="text-white text-base">Follow Us :</span>
                <InstagramIcon
                  size={16}
                  className="text-white hover:text-primary cursor-pointer"
                />
                <FaYoutube
                  size={16}
                  className="text-white hover:text-primary cursor-pointer"
                />
                <FaFacebook
                  size={16}
                  className="text-white hover:text-primary cursor-pointer"
                />
                <FaTwitter
                  size={16}
                  className="text-white hover:text-primary cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-4">
          <div className="flex items-center w-3/4 justify-between">
            <Link to="/" className="text-h2 font-bold">
              Bandage
            </Link>
            <NavigationMenu className="navigation-menu">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base text-accent hover:text-primary">
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex p-4 w-[400px]">
                      <div className="w-1/2">
                        <h3 className="text-h6 font-bold mb-2 text-accent">
                          Kadın
                        </h3>
                        <ul>
                          <li>
                            <Link
                              to="/shop/kadin/bags"
                              className="text-base text-accent hover:text-primary"
                            >
                              Bags
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/kadin/belts"
                              className="text-base text-accent hover:text-primary"
                            >
                              Belts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/kadin/cosmetics"
                              className="text-base text-accent hover:text-primary"
                            >
                              Cosmetics
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/kadin/hats"
                              className="text-base text-accent hover:text-primary"
                            >
                              Hats
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="w-1/2">
                        <h3 className="text-h6 font-bold mb-2 text-accent">
                          Erkek
                        </h3>
                        <ul>
                          <li>
                            <Link
                              to="/shop/erkek/bags"
                              className="text-base text-accent hover:text-primary"
                            >
                              Bags
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/erkek/belts"
                              className="text-base text-accent hover:text-primary"
                            >
                              Belts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/erkek/cosmetics"
                              className="text-base text-accent hover:text-primary"
                            >
                              Cosmetics
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/erkek/hats"
                              className="text-base text-accent hover:text-primary"
                            >
                              Hats
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/blog"
                    className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}
                  >
                    Blog
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    to="/pages"
                    className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}
                  >
                    Pages
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
              {user.name ? (
                <div className="flex items-center gap-2">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                    />
                  ) : (
                    <User2Icon size={16} className="text-gray-600" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-secondary text-sm font-medium">
                      {user.name}
                    </span>
                    <span className="text-gray-400 text-xs">{user.email}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <User2Icon size={16} className="text-gray-600" />
                  <div className="flex items-center">
                    <Button
                      variant="link"
                      className="text-secondary text-sm hover:text-primary transition-colors duration-300"
                    >
                      <Link to="/login">Login</Link>
                    </Button>
                    <span className="text-gray-400 mx-1">/</span>
                    <Button
                      variant="link"
                      className="text-secondary text-sm hover:text-primary transition-colors duration-300"
                    >
                      <Link to="/signup">Register</Link>
                    </Button>
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                <SearchIcon
                  size={16}
                  className="text-secondary hover:text-primary cursor-pointer"
                />
                <ShoppingCartIcon
                  size={16}
                  className="text-secondary hover:text-primary cursor-pointer"
                />
                <HeartIcon
                  size={16}
                  className="text-secondary hover:text-primary cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
