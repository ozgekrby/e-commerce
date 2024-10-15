import React from "react";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingBasket,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
export default function Header() {
  return (
    <div>
      <div className="lg:w-full lg:bg-accent hidden lg:flex justify-center">
        <div className="flex items-center w-3/4 justify-between gap-8">
          <div className="flex items-center gap-8">
            <Button variant="link" className="p-0">
              <PhoneIcon size={16} strokeWidth={2.5} className="text-white" />
              <h6 className="text-white"> (225) 555-0118</h6>
            </Button>
          </div>

          <div className="flex items-center gap-8">
            <Button variant="link">
              <MailIcon size={16} strokeWidth={2.5} className="text-white" />
              <h6 className="text-white"> michelle.rivera@example.com</h6>
            </Button>
          </div>

          <div className="flex items-center gap-8">
            <Button variant="link">
              <h6 className="text-white">
                Follow Us and get a chance to win 80% off
              </h6>
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <h6 className="text-white">Follow Us :</h6>
            <InstagramIcon size={16} strokeWidth={2.5} className="text-white" />
            <FaYoutube size={16} className="text-white" />
            <FaFacebook size={16} className="text-white" />
            <FaTwitter size={16} className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center w-3/4 justify-between">
          <h2>BrandName</h2>
            <div className="w-2/3 ">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col justify-center lg:flex-row"> 
                  <NavigationMenuItem>
                    <a href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Home
                      </NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        About
                      </NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Blog
                      </NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contact
                      </NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Pages
                      </NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="w-1/4 flex items-center">
              <User2Icon
                size={16}
                strokeWidth={2.5}
                className="text-secondary"
              />
              <Button variant="link" className="hidden lg:block">
                <h6 className="text-secondary"> Login</h6>
              </Button>
              <h6 className="text-secondary hidden lg:block" >/</h6>
              <Button variant="link" className="hidden lg:block">
                <h6 className="text-secondary"> Register</h6>
              </Button>
              <div className="flex gap-3">
                <SearchIcon
                  size={16}
                  strokeWidth={2.5}
                  className="text-secondary"
                />
                <ShoppingCartIcon
                  size={16}
                  strokeWidth={2.5}
                  className="text-secondary"
                />
                <HeartIcon
                  size={16}
                  strokeWidth={2.5}
                  className="text-secondary"
                />
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
