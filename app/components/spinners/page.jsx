import fs from "node:fs";
import path from "node:path";

function loadTemplateBodyHtml() {
  const sourcePath = path.join(process.cwd(), "..", "src", "components", "spinners.html");
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
    return "<div>Missing &lt;body&gt; in components/spinners.html</div>";
  }

  let bodyHtml = bodyMatch[1];
  bodyHtml = bodyHtml.replace(
    /<!--\s*begin::GXON Page Scripts\s*-->[\s\S]*?<!--\s*end::GXON Page Scripts\s*-->/i,
    "",
  );

  bodyHtml = bodyHtml.replaceAll('href="assets/', 'href="/assets/');
  bodyHtml = bodyHtml.replaceAll('src="assets/', 'src="/assets/');

  return bodyHtml;
}

export default function SpinnersPage() {
  const html = loadTemplateBodyHtml();
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
