"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TemplateInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-initialize template behaviors when path changes
    if (typeof window !== "undefined" && typeof window.initGXONTemplate === "function") {
      // Small timeout to ensure DOM is rendered before querying it
      const timer = setTimeout(() => {
        window.initGXONTemplate();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
