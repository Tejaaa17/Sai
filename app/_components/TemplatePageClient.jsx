"use client";

import { useEffect } from "react";

export default function TemplatePageClient({ html }) {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.initGXONTemplate === "function") {
      window.initGXONTemplate();
    }
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
