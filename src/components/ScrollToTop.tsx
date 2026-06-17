"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force immediate scroll reset to the top of the viewport
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior
    });
  }, [pathname]);

  return null;
}
