import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/Button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@ui/NavigationMenu";
import { URLS } from "@/constants/urls";
import BurgerMenu from "./BurgerMenu";

export interface NavItem {
  name: string;
  href: string;
}

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
        <NavigationMenuList className="mx-auto hidden md:flex">
          {navLinks.map(link => (
            <NavigationMenuItem key={link.name}>
              <Button variant="link" className="md:px-2 lg:px-4" asChild>
                <Link href={link.href} passHref>
                  {link.name}
                </Link>
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuList className="hidden md:flex">
          {authLinks.map(link => (
            <NavigationMenuItem key={link.name}>
              <Button variant="link" className="md:px-2 lg:px-4" asChild>
                <Link href={link.href} passHref>
                  {link.name}
                </Link>
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <BurgerMenu authLinks={authLinks} navLinks={navLinks} />
      </NavigationMenu>
    </div>
  );
};

export default TopBar;
