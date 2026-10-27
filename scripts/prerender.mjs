// Vorab-Rendering: erzeugt für jede Seite aus public/sitemap.xml eine eigene
// index.html mit fertigem Inhalt (Titel, Beschreibung, Text) im Quelltext.
// Design und Verhalten bleiben gleich: dieselbe Anwendung wird nur vorab gerendert.
import { chromium } from "playwright";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "http://localhost:4173";
const DIST = "dist";

const sitemap = await readFile("public/sitemap.xml", "utf8");
const paths = [...sitemap.matchAll(/<loc>https:\/\/govorim-pravilno\.ru([^<]*)<\/loc>/g)]
  .map((m) => m[1] || "/")
  .filter((p) => p !== "/");

const browser = await chromium.launch();
const page = await browser.newPage();
let ok = 0;
const failed = [];

for (const path of paths) {
  try {
    await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForFunction(() => document.querySelector("#root")?.children.length > 0, null, { timeout: 15000 });
    const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
    const target = join(DIST, path, "index.html");
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html, "utf8");
    ok++;
  } catch (e) {
    failed.push(`${path}: ${e.message.split("\n")[0]}`);
  }
}

await browser.close();
console.log(`Vorab gerendert: ${ok} von ${paths.length}`);
if (failed.length) console.log("Fehler:\n" + failed.join("\n"));
// Fehlende Seiten brechen den Build nicht ab: sie fallen auf index.html zurück.
