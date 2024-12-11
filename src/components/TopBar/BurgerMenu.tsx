"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { Separator } from "../ui/Separator";
import { NavItem } from "./TopBar";

interface BurgerMenuProps {
  authLinks: NavItem[];
  navLinks: NavItem[];
}

const BurgerMenu: FC<BurgerMenuProps> = ({ authLinks, navLinks }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const lineClassName = "absolute block h-[2px] w-4 rounded bg-foreground transition-transform";

  const toggleMenu = () => setIsBurgerMenuOpen(prev => !prev);
  return (
    <>
      <Button
        onClick={toggleMenu}
        variant="ghost"
        data-test="burger-menu-trigger"
        className="z-[21] flex h-10 w-10 items-center justify-center rounded-lg hover:scale-110 hover:bg-transparent focus:scale-105 focus:bg-transparent md:hidden"
      >
        <div className="z-21 absolute flex flex-col items-center justify-center transition-transform duration-300 ease-in-out">
          <span
            className={cn(lineClassName, isBurgerMenuOpen ? "rotate-45" : "translate-y-[-6px]")}
          />
          <span className={cn(lineClassName, isBurgerMenuOpen && "scale-x-0")} />
          <span
            className={cn(lineClassName, isBurgerMenuOpen ? "-rotate-45" : "translate-y-[6px]")}
          />
        </div>
      </Button>
      <div
        data-test="burger-menu-content"
        className={cn(
          "fixed right-0 top-[56px] z-20 flex h-[calc(100dvh-56px)] w-full flex-col bg-background/30 p-2 transition-all duration-300 ease-in-out",
          isBurgerMenuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0",
        )}
        onClick={toggleMenu}
      >
        <div className="h-full w-full rounded-2xl bg-nav p-4">
          <div className="flex h-full flex-col items-center gap-3">
            {navLinks.map((link, id) => (
              <div className="flex w-full flex-col items-center gap-2" key={link.href}>
                <Button key={link.name} variant="link">
                  {link.name}
                </Button>
                <Separator className={cn("bg-white/20", id === navLinks.length - 1 && "hidden")} />
              </div>
            ))}
            <div className="mt-auto flex w-full flex-row justify-between">
              <Button variant="link" className="mx-auto">
                {authLinks[0].name}
              </Button>
              <Separator className="h-8 bg-white/20" orientation="vertical" />
              <Button variant="link" className="mx-auto">
                {authLinks[1].name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
