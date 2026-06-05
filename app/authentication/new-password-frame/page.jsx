import fs from "node:fs";
import path from "node:path";

function loadTemplateBodyHtml() {
  const sourcePath = path.join(
    process.cwd(),
    "..",
    "src",
    "authentication",
    "new-password-frame.html",
  );
  const raw = fs.readFileSync(sourcePath, "utf8");

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    return "<div>Missing &lt;body&gt; in authentication/new-password-frame.html</div>";
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

export default function NewPasswordFramePage() {
  const html = loadTemplateBodyHtml();
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

