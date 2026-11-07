import { useEffect, useState } from "react";
import { BookOpen, Download, Lock, ShieldCheck } from "lucide-react";
import { GUIDE_TITLE, sections, type Block } from "@/content/guide";
import { downloadGuideFile } from "@/lib/download-guide";

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return (
      <p className="text-pretty text-base leading-relaxed text-ink">
        <Rich text={block.text} />
      </p>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="pt-2 font-display text-xl font-semibold text-leaf-deep">
        <Rich text={block.text} />
      </h3>
    );
  }
  if (block.type === "tip") {
    return (
      <aside className="rounded-card bg-tip px-4 py-3 text-ink">
        <p className="text-pretty text-base leading-relaxed">
          <strong className="font-semibold">Beginner tip. </strong>
          <Rich text={block.text} />
        </p>
      </aside>
    );
  }
  if (block.type === "safety") {
    return (
      <aside className="rounded-card bg-safety px-4 py-3 text-ink">
        <p className="text-pretty text-base leading-relaxed">
          <strong className="font-semibold text-stalk">Safety. </strong>
          <Rich text={block.text} />
        </p>
      </aside>
    );
  }
  const ListTag = block.type === "ol" ? "ol" : "ul";
  return (
    <ListTag
      className={
        block.type === "ol"
          ? "list-decimal space-y-2 pl-5 text-base leading-relaxed"
          : "list-disc space-y-2 pl-5 text-base leading-relaxed"
      }
    >
      {block.items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ListTag>
  );
}

function scrollToId(id: string) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}

export function FieldGuide() {
  const unlocked = true;
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (import.meta.env.PROD && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* offline cache is optional if the browser blocks the worker */
      });
    }

  }, []);

  function saveOffline() {
    downloadGuideFile();
    setNotice("Downloaded rhubarb-field-guide.html. Open that file anytime, with or without internet.");
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line bg-sheet">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 items-end justify-center gap-1 rounded-2xl bg-leaf px-2 pb-2" aria-hidden="true">
              <span className="h-5 w-1.5 rounded-full bg-sheet" />
              <span className="h-7 w-1.5 rounded-full bg-stalk" />
              <span className="h-4 w-1.5 rounded-full bg-sheet" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold leading-tight text-leaf-deep">{GUIDE_TITLE}</p>
              <p className="text-sm text-muted">The Education Revolution · Blue and the Awesome Dudes</p>
            </div>
          </div>
          <p className="rounded-full bg-tip px-3 py-2 text-sm font-semibold text-ink">
            Free guide
          </p>
        </div>
      </header>

      <div className="mx-auto grid min-w-0 max-w-6xl gap-6 px-4 py-6 md:grid-cols-[15rem_minmax(0,1fr)] md:px-6 md:py-8">
        <nav className="min-w-0 md:sticky md:top-4 md:self-start" aria-label="Chapters">
          <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
            {sections.map((section) => {
              const locked = !section.free && !unlocked;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToId(locked ? "unlock" : section.id)}
                  className="flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-line bg-sheet px-3 text-left text-sm text-ink md:rounded-2xl md:px-4"
                >
                  {locked ? <Lock className="size-4 shrink-0 text-stalk" aria-hidden="true" /> : <BookOpen className="size-4 shrink-0 text-leaf" aria-hidden="true" />}
                  <span>{section.title.replace(/^\d+\.\s/, "")}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <main className="flex min-w-0 flex-col gap-6">
          <section className="rounded-card border border-line bg-sheet px-5 py-6 md:px-8">
            <p className="text-sm font-semibold tracking-wide text-leaf">The Education Revolution · Volume 5</p>
            <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-leaf-deep md:text-5xl">
              Volume 5: Rhubarb
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              If you have never grown food before, start here. Rhubarb is a big, long-lived plant grown for tart stalks.
              You cook the stalks like fruit. The leaves and roots are never food.
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-paper px-4 py-3">
                <dt className="text-sm text-muted">Best zones</dt>
                <dd className="font-display text-2xl font-semibold text-leaf-deep">3–8</dd>
              </div>
              <div className="rounded-2xl bg-paper px-4 py-3">
                <dt className="text-sm text-muted">First real harvest</dt>
                <dd className="font-display text-2xl font-semibold text-leaf-deep">Year 3</dd>
              </div>
              <div className="rounded-2xl bg-paper px-4 py-3">
                <dt className="text-sm text-muted">One mature plant</dt>
                <dd className="font-display text-2xl font-semibold text-leaf-deep">2–5 lb</dd>
              </div>
            </dl>
          </section>

          {notice ? (
            <p className="rounded-card bg-tip px-4 py-3 text-base leading-relaxed text-ink" role="status">
              {notice}
            </p>
          ) : null}

          {sections.map((section) => {
            const locked = !section.free && !unlocked;
            if (locked) return null;
            return (
              <article key={section.id} id={section.id} className="scroll-mt-4 rounded-card border border-line bg-sheet px-5 py-6 md:px-8">
                <h2 className="font-display text-3xl font-semibold text-leaf">{section.title}</h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.blocks.map((block, index) => (
                    <BlockView key={`${section.id}-${index}`} block={block} />
                  ))}
                </div>
              </article>
            );
          })}

          {unlocked ? (
            <section className="rounded-card border border-line bg-leaf px-5 py-6 text-sheet md:px-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-6 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-2xl font-semibold">Keep this guide offline</h2>
                  <p className="mt-2 max-w-xl text-pretty leading-relaxed">
                    Download a single file you can open with no internet. On a phone, you can also add this app to your
                    home screen. After this visit, the installed app opens even when you are offline.
                  </p>
                  <button
                    type="button"
                    onClick={saveOffline}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-sheet px-5 font-semibold text-leaf-deep"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Download offline guide
                  </button>
                </div>
              </div>
            </section>
          ) : null}
        </main>
      </div>
    </div>
  );
}
