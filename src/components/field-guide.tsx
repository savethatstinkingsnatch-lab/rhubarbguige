import { useEffect, useState } from "react";
import { BookOpen, Download, Leaf, Lock, ShieldCheck } from "lucide-react";
import { GUIDE_PRICE, GUIDE_TITLE, PAYPAL_EMAIL, sections, type Block } from "@/content/guide";
import { readUnlocked, UNLOCK_KEY, writeUnlocked } from "@/lib/access";
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
  const [unlocked, setUnlocked] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("paid") === "1") {
      writeUnlocked();
      const url = new URL(window.location.href);
      url.searchParams.delete("paid");
      window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
      setNotice("Payment return received. This device is unlocked.");
    }
    if (params.get("paid") === "0") {
      setNotice("Checkout was canceled. The full guide stays locked until PayPal is paid.");
      const url = new URL(window.location.href);
      url.searchParams.delete("paid");
      window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }
    setUnlocked(readUnlocked());

    const onStorage = (event: StorageEvent) => {
      if (event.key === UNLOCK_KEY && event.newValue === "1") setUnlocked(true);
    };
    window.addEventListener("storage", onStorage);

    if (import.meta.env.PROD && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* offline cache is optional if the browser blocks the worker */
      });
    }

    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function finishPayPal(form: HTMLFormElement) {
    const here = `${window.location.origin}${window.location.pathname}`;
    const back = form.elements.namedItem("return");
    const cancel = form.elements.namedItem("cancel_return");
    if (back instanceof HTMLInputElement) back.value = `${here}?paid=1`;
    if (cancel instanceof HTMLInputElement) cancel.value = `${here}?paid=0`;
  }

  function confirmPaid() {
    writeUnlocked();
    setUnlocked(true);
    setNotice("Unlocked on this device. Download a copy or keep reading — it stays after you close the tab.");
  }

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
              <p className="text-sm text-muted">Seed to stalk</p>
            </div>
          </div>
          <p className="rounded-full bg-tip px-3 py-2 text-sm font-semibold text-ink">
            {unlocked ? "Unlocked on this device" : `$${GUIDE_PRICE} full guide`}
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
            <p className="text-sm font-semibold tracking-wide text-leaf">A beginner growing guide</p>
            <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-leaf-deep md:text-5xl">
              Rhubarb, from seed to seed
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
          ) : (
            <section id="unlock" className="scroll-mt-4 rounded-card border border-line bg-sheet px-5 py-6 md:px-8">
              <div className="flex items-center gap-2 text-stalk">
                <Lock className="size-5" aria-hidden="true" />
                <p className="text-sm font-semibold">Seven chapters are locked</p>
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold text-leaf-deep">The rest of the guide is $1</h2>
              <p className="mt-3 max-w-xl text-pretty leading-relaxed text-ink">
                Climate, planting, care, harvest, storage, six recipes, and seed saving. PayPal sends{" "}
                <strong className="font-semibold">${GUIDE_PRICE}</strong> to {PAYPAL_EMAIL}. When checkout finishes,
                this device keeps the full guide. You can read it here offline, and download a copy that opens with no
                connection.
              </p>
              <ul className="mt-4 space-y-2 text-base text-muted">
                {sections
                  .filter((section) => !section.free)
                  .map((section) => (
                    <li key={section.id} className="flex items-center gap-2">
                      <Leaf className="size-4 text-leaf" aria-hidden="true" />
                      {section.title}
                    </li>
                  ))}
              </ul>

              <form
                className="mt-6 flex flex-col items-start gap-3"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                onSubmit={(event) => finishPayPal(event.currentTarget)}
              >
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value={PAYPAL_EMAIL} />
                <input type="hidden" name="item_name" value="Rhubarb Field Guide — full seed-to-seed edition" />
                <input type="hidden" name="item_number" value="RHUBARB-GUIDE" />
                <input type="hidden" name="amount" value={GUIDE_PRICE} />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="no_shipping" value="1" />
                <input type="hidden" name="no_note" value="1" />
                <input type="hidden" name="charset" value="utf-8" />
                <input type="hidden" name="rm" value="1" />
                <input type="hidden" name="return" value="" />
                <input type="hidden" name="cancel_return" value="" />
                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center gap-3 rounded-full bg-leaf px-5 font-semibold text-sheet"
                >
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                    alt=""
                    className="h-6 w-auto rounded bg-sheet px-1"
                  />
                  Pay $1 with PayPal
                </button>
              </form>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Checkout opens on PayPal. Come back to this page when it finishes. If PayPal does not send you back
                automatically, use the button below after you have paid.
              </p>
              <button
                type="button"
                onClick={confirmPaid}
                className="mt-3 inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 font-semibold text-ink"
              >
                I finished paying — unlock this device
              </button>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
