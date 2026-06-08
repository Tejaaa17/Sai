import TemplatePageClient from "../../_components/TemplatePageClient";
import fs from "node:fs";
import path from "node:path";

function loadTemplateBodyHtml() {
  const sourcePath = path.join(process.cwd(), "src-templates", "chart", "apexchart.html");
    let raw;
  try {
    raw = fs.readFileSync(sourcePath, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      return `<div style="padding:2rem;font-family:system-ui, sans-serif;text-align:center;">
        <h1>404</h1>
        <p>Template not found: ${path.relative(process.cwd(), sourcePath)}</p>
      </div>`;
    }
    throw error;
  }


  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    return "<div>Missing &lt;body&gt; in chart/apexchart.html</div>";
  }

  let bodyHtml = bodyMatch[1];
  bodyHtml = bodyHtml.replace(
    /<!--\s*begin::GXON Page Scripts\s*-->[\s\S]*?<!--\s*end::GXON Page Scripts\s*-->/i,
    "",
  );

  bodyHtml = bodyHtml.replace(/(href|src)="(?!\/|http|https|javascript:|#)([^"]+)"/g, '$1="/$2"')
  
  // Clean up relative/static .html links to resolve correctly as absolute Next.js routes
  bodyHtml = bodyHtml.replace(/href="([^"]+)\.html"/g, (match, p) => {
    if (p.startsWith('http') || p.startsWith('//') || p.startsWith('#')) return match;
    let cleanPath = p.startsWith('../') ? p.substring(3) : p;
    cleanPath = cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath;
    if (cleanPath === '/index') cleanPath = '/';
    return `href="${cleanPath}"`;
  });

  return bodyHtml;
}

export default function ApexChartPage() {
  const html = loadTemplateBodyHtml();
  return <TemplatePageClient html={html} />;
}


