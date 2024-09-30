"use client";
import React from "react";
import { useWindowSize } from "usehooks-ts";
import { cn } from "@/lib/cn";
import jotConfig from "@/jot.config";

function NavCollapse({ children }: { children: React.ReactNode }) {
  const { width } = useWindowSize();
  const isMobile = width <= jotConfig.breakpoints.sm;
  return (
    <div className={cn("relative flex-grow w-full ", isMobile && 'absolute -translate-x-[105%] transition-transform duration-300' )}>
      <div className={cn("h-full flex absolute top-0 left-0 right-0 bottom-0 ", isMobile && '-translate-x-[105%] transition-transform duration-300' )}>
        {children}
      </div>
    </div>
  );
}

export default NavCollapse;
