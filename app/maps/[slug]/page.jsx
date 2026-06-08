import fs from "node:fs";
import path from "node:path";

function loadTemplateBodyHtml(slug) {
  const sourcePath = path.join(process.cwd(), "..", "src", "maps", `${slug}.html`);
  let raw;
  try {
    raw = fs.readFileSync(sourcePath, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      return `<div style="padding:2rem;font-family:system-ui, sans-serif;text-align:center;">
        <h1>404</h1>
        <p>Template not found: maps/${slug}.html</p>
      </div>`;
    }
    throw error;
  }

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return `<div>Missing &lt;body&gt; in maps/${slug}.html</div>`;

  let bodyHtml = bodyMatch[1];
  bodyHtml = bodyHtml.replace(
    /<!--\s*begin::GXON Page Scripts\s*-->[\s\S]*?<!--\s*end::GXON Page Scripts\s*-->/i,
    "",
  );

  bodyHtml = bodyHtml.replaceAll('href="assets/', 'href="/assets/');
  bodyHtml = bodyHtml.replaceAll('src="assets/', 'src="/assets/');
  
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

export default async function MapsRoute({ params }) {
  const { slug } = await params;
  const html = loadTemplateBodyHtml(slug);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
