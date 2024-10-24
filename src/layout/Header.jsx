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
    <header>
      <div className="flex items-center justify-between p-4 lg:hidden">
        <h2 className="text-xl font-bold">Bandage</h2>
        <div className="flex items-center gap-4">
          <User2Icon size={20} />
          <SearchIcon size={20} />
          <ShoppingCartIcon size={20} />
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon size={20} />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="p-4 bg-white lg:hidden">
          <ul className="space-y-2">
            <li><a href="/" className="block py-2">Home</a></li>
            <li><a href="/shop" className="block py-2">Shop</a></li>
            <li><a href="/about" className="block py-2">About</a></li>
            <li><a href="/blog" className="block py-2">Blog</a></li>
            <li><a href="/contact" className="block py-2">Contact</a></li>
            <li><a href="/pages" className="block py-2">Pages</a></li>
          </ul>
        </nav>
      )}


      <div className="hidden lg:block">

        <div className="w-full bg-accent flex justify-center">
          <div className="flex items-center w-3/4 justify-between gap-8 py-2">
            <div className="flex items-center gap-8">
              <Button variant="link" className="p-0 text-white">
                <PhoneIcon size={16} className="mr-2" />
                (225) 555-0118
              </Button>
              <Button variant="link" className="p-0 text-white">
                <MailIcon size={16} className="mr-2" />
                michelle.rivera@example.com
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white text-sm">Follow Us and get a chance to win 80% off</span>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">Follow Us :</span>
                <InstagramIcon size={16} className="text-white" />
                <FaYoutube size={16} className="text-white" />
                <FaFacebook size={16} className="text-white" />
                <FaTwitter size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center w-3/4 justify-between">
            <h2 className="text-xl font-bold">Bandage</h2>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex p-4 w-[400px]">
                      <div className="w-1/2">
                        <h3 className="font-bold mb-2">Kadın</h3>
                        <ul>
                          <li><a href="/shop/kadin/bags">Bags</a></li>
                          <li><a href="/shop/kadin/belts">Belts</a></li>
                          <li><a href="/shop/kadin/cosmetics">Cosmetics</a></li>
                          <li><a href="/shop/kadin/hats">Hats</a></li>
                        </ul>
                      </div>
                      <div className="w-1/2">
                        <h3 className="font-bold mb-2">Erkek</h3>
                        <ul>
                          <li><a href="/shop/erkek/bags">Bags</a></li>
                          <li><a href="/shop/erkek/belts">Belts</a></li>
                          <li><a href="/shop/erkek/cosmetics">Cosmetics</a></li>
                          <li><a href="/shop/erkek/hats">Hats</a></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/pages" className={navigationMenuTriggerStyle()}>
                    Pages
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
              <Button variant="link" className="text-secondary">
                <User2Icon size={16} className="mr-2" />
                Login / Register
              </Button>
              <SearchIcon size={16} className="text-secondary" />
              <ShoppingCartIcon size={16} className="text-secondary" />
              <HeartIcon size={16} className="text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}