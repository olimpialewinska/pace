import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { URLS } from "@/constants/urls";
import { Button } from "../ui/Button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/NavigationMenu";
import BurgerMenu from "./BurgerMenu";

const TopBar: FC = () => {
  const navLinks = [
    { name: "Solutions", href: URLS.SOLUTIONS },
    { name: "Pricing", href: URLS.PRICING },
    { name: "Blog", href: URLS.BLOG },
    { name: "Use Cases", href: URLS.USE_CASES },
    { name: "Docs", href: URLS.DOCS },
  ];

  const authLinks = [
    { name: "Log In", href: URLS.LOG_IN },
    { name: "Sign Up", href: URLS.SIGN_UP },
  ];

  return (
    <div className="flex w-screen items-center justify-center p-2">
      <NavigationMenu className="flex h-12 w-full max-w-screen-3xl items-center justify-between rounded-2xl bg-nav px-4 sm:px-6">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={34} height={34} />
        </Link>
        <NavigationMenuList className="hidden md:flex">
          {navLinks.map(link => (
            <NavigationMenuItem key={link.name}>
              <Link href={link.href} passHref>
                <Button variant="link">{link.name}</Button>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuList className="hidden md:flex">
          {authLinks.map(link => (
            <NavigationMenuItem key={link.name}>
              <Link href={link.href} passHref>
                <Button variant="link">{link.name}</Button>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <BurgerMenu />
      </NavigationMenu>
    </div>
  );
};

export default TopBar;
