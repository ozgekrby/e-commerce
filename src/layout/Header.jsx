import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  User2Icon,
  MenuIcon,
} from "lucide-react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="font-inter">
      <div className="flex items-center justify-between p-4 lg:hidden">
        <h1 className="text-h1 font-bold">Bandage</h1>
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
            <li><a href="/" className="block py-2 text-base text-accent hover:text-primary">Home</a></li>
            <li><a href="/shop" className="block py-2 text-base text-accent hover:text-primary">Shop</a></li>
            <li><a href="/about" className="block py-2 text-base text-accent hover:text-primary">About</a></li>
            <li><a href="/blog" className="block py-2 text-base text-accent hover:text-primary">Blog</a></li>
            <li><a href="/contact" className="block py-2 text-base text-accent hover:text-primary">Contact</a></li>
            <li><a href="/pages" className="block py-2 text-base text-accent hover:text-primary">Pages</a></li>
          </ul>
        </nav>
      )}

      <div className="hidden lg:block">
        <div className="w-full bg-accent flex justify-center">
          <div className="flex items-center w-3/4 justify-between gap-8 py-2">
            <div className="flex items-center gap-8">
              <Button variant="link" className="p-0 text-white text-base hover:text-primary">
                <PhoneIcon size={16} className="mr-2" />
                (225) 555-0118
              </Button>
              <Button variant="link" className="p-0 text-white text-base hover:text-primary">
                <MailIcon size={16} className="mr-2" />
                michelle.rivera@example.com
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white text-base">Follow Us and get a chance to win 80% off</span>
              <div className="flex items-center gap-2">
                <span className="text-white text-base">Follow Us :</span>
                <InstagramIcon size={16} className="text-white hover:text-primary cursor-pointer" />
                <FaYoutube size={16} className="text-white hover:text-primary cursor-pointer" />
                <FaFacebook size={16} className="text-white hover:text-primary cursor-pointer" />
                <FaTwitter size={16} className="text-white hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-4">
          <div className="flex items-center w-3/4 justify-between">
            <h2 className="text-h2 font-bold">Bandage</h2>
            <NavigationMenu className="navigation-menu">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base text-accent hover:text-primary">Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex p-4 w-[400px]">
                      <div className="w-1/2">
                        <h3 className="text-h6 font-bold mb-2 text-accent">Kadın</h3>
                        <ul>
                          <li><a href="/shop" className="text-base text-accent hover:text-primary">Bags</a></li>
                          <li><a href="/shop" className="text-base text-accent hover:text-primary">Belts</a></li>
                          <li><a href="/shop" className="text-base text-accent hover:text-primary">Cosmetics</a></li>
                          <li><a href="/shop" className="text-base text-accent hover:text-primary">Hats</a></li>
                        </ul>
                      </div>
                      <div className="w-1/2">
                        <h3 className="text-h6 font-bold mb-2 text-accent">Erkek</h3>
                        <ul>
                          <li><a href="/shop/erkek/bags" className="text-base text-accent hover:text-primary">Bags</a></li>
                          <li><a href="/shop/erkek/belts" className="text-base text-accent hover:text-primary">Belts</a></li>
                          <li><a href="/shop/erkek/cosmetics" className="text-base text-accent hover:text-primary">Cosmetics</a></li>
                          <li><a href="/shop/erkek/hats" className="text-base text-accent hover:text-primary">Hats</a></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/blog" className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}>
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}>
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/pages" className={`${navigationMenuTriggerStyle()} text-base text-accent hover:text-primary`}>
                    Pages
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
            <a href="/signup">
              <Button variant="link" className="text-secondary text-base hover:text-primary">
                <User2Icon size={16} className="mr-2" />
                
                Login / Register
                
              </Button>
              </a>
              <SearchIcon size={16} className="text-secondary hover:text-primary cursor-pointer" />
              <ShoppingCartIcon size={16} className="text-secondary hover:text-primary cursor-pointer" />
              <HeartIcon size={16} className="text-secondary hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}