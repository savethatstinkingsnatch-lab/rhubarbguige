import { GUIDE_TITLE, sections, type Block } from "@/content/guide";

const AMP = "\u0026";

function escapeHtml(value: string): string {
  return value
    .replaceAll(AMP, `${AMP}amp;`)
    .replaceAll("<", `${AMP}lt;`)
    .replaceAll(">", `${AMP}gt;`)
    .replaceAll('"', `${AMP}quot;`);
}

function rich(text: string): string {
  return escapeHtml(text).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function blockHtml(block: Block): string {
  if (block.type === "p") return `<p>${rich(block.text)}</p>`;
  if (block.type === "h3") return `<h3>${rich(block.text)}</h3>`;
  if (block.type === "tip") return `<aside class="tip"><strong>Beginner tip. </strong>${rich(block.text)}</aside>`;
  if (block.type === "safety") {
    return `<aside class="safety"><strong>Safety. </strong>${rich(block.text)}</aside>`;
  }
  const tag = block.type === "ol" ? "ol" : "ul";
  const items = block.items.map((item) => `<li>${rich(item)}</li>`).join("");
  return `<${tag}>${items}</${tag}>`;
}

export function guideHtml(): string {
  const body = sections
    .map(
      (section) =>
        `<section><h2>${escapeHtml(section.title)}</h2>${section.blocks.map(blockHtml).join("")}</section>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(GUIDE_TITLE)}</title>
<style>
  :root { color-scheme: light; }
  body { margin: 0; background: #f3eee4; color: #2a241c; font-family: Georgia, "Iowan Old Style", serif; line-height: 1.55; }
  main { max-width: 40rem; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
  h1 { font-size: 2.2rem; line-height: 1.15; color: #1e3d24; margin-bottom: 0.25rem; }
  .lede { color: #6e655b; font-family: "Segoe UI", sans-serif; }
  h2 { font-size: 1.45rem; color: #2f5d34; margin-top: 2.2rem; border-bottom: 2px solid #2f5d34; padding-bottom: 0.3rem; }
  h3 { font-size: 1.1rem; color: #6b4a32; margin-top: 1.4rem; }
  p, li { font-family: "Segoe UI", sans-serif; font-size: 1.05rem; }
  aside { padding: 0.85rem 1rem; border-radius: 0.8rem; margin: 1rem 0; font-family: "Segoe UI", sans-serif; }
  .tip { background: #efe4cc; }
  .safety { background: #f6e4e0; }
  ul, ol { padding-left: 1.2rem; }
  li + li { margin-top: 0.35rem; }
</style>
</head>
<body>
<main>
  <p class="lede">Seed to stalk · offline copy</p>
  <h1>${escapeHtml(GUIDE_TITLE)}</h1>
  <p class="lede">Only the stalks are food. Leaves and roots are poisonous. This file works with no internet.</p>
  ${body}
</main>
</body>
</html>`;
}

export function downloadGuideFile(): void {
  const blob = new Blob([guideHtml()], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "rhubarb-field-guide.html";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
