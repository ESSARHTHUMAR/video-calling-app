"use client"

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import sidebarLinks from "@/Constants/index";
import { cn } from "@/lib/utils";
import { usePathname } from "@/node_modules/next/navigation";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger menu"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="icons/logo.svg"
              width={32}
              height={32}
              alt="Doom"
              className="max-sm:size-10"
            />
            <p className="text-white text-[26px] font-extrabold uppercase">
              Doom
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            
              <section className="flex h-full flex-col gap-6 pt-16 texr-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathName === link.route ||
                    pathName.startsWith(`${link.route}/`);

                  return (
                    <SheetClose asChild key={link.route}>
                    <Link
                      href={link.route}
                      key={link.label}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg w-full max-w-60",
                        { "bg-blue-1": isActive }
                      )}
                    >
                      <Image
                        src={link.imgUrl}
                        alt={link.label}
                        width={20}
                        height={20}
                      />
                      <p className="font-semibold text-white">
                        {link.label}
                      </p>
                    </Link>
                    </SheetClose>
                  );
                })}
              </section>
            
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
