"use client";

import { LuAlignJustify } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { MdPerson } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };
  return (
    <div className="fixed top-0 z-50 flex h-[100px] w-full items-center justify-center bg-white">
      <div className="flex flex-row items-center space-x-32">
        <LuAlignJustify size={26} onClick={handleOpenMenu} />

        <h2 className="h-[22px] w-[61px] text-[16px] font-bold text-black">
          Fit Flow
        </h2>
        <MdPerson size={26} />
      </div>
      {isMenuOpen && (
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-center">Menu</SheetTitle>
              <SheetDescription>Menu Sidebar</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

export default Header;
