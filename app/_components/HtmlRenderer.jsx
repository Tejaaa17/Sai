"use client";
import { useEffect, useRef } from "react";

export default function HtmlRenderer({ html }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Inject HTML on the client so scripts can be discovered/executed
    container.innerHTML = html || "";

    // Find script tags in the injected HTML and re-run them
    const scripts = Array.from(container.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      // copy attributes
      for (let i = 0; i < oldScript.attributes.length; i++) {
        const attr = oldScript.attributes[i];
        newScript.setAttribute(attr.name, attr.value);
      }

      if (oldScript.src) {
        // External script: append to body so it downloads and executes
        newScript.src = oldScript.src;
        newScript.async = false;
        document.body.appendChild(newScript);
      } else {
        // Inline script: set textContent and append to container
        newScript.textContent = oldScript.textContent;
        container.appendChild(newScript);
      }
    });

    // Remove original script tags to avoid duplication
    scripts.forEach((s) => s.parentNode && s.parentNode.removeChild(s));
  }, [html]);

  return <div ref={ref} />;
}
