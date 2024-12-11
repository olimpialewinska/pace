"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const BurgerMenu: FC = () => {
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
          <p>burger menu</p>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
