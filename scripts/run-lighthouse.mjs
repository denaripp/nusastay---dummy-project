import { exec } from "child_process";
import util from "util";
import fs from "fs";
import path from "path";

const execPromise = util.promisify(exec);

const routes = [
  { name: "Beranda (/)", url: "http://localhost:3000/" },
  { name: "Kamar (/kamar)", url: "http://localhost:3000/kamar" },
  { name: "Detail Kamar (/kamar/deluxe-teras-menoreh)", url: "http://localhost:3000/kamar/deluxe-teras-menoreh" },
  { name: "Fasilitas (/fasilitas)", url: "http://localhost:3000/fasilitas" },
  { name: "Galeri (/galeri)", url: "http://localhost:3000/galeri" },
  { name: "Lokasi (/lokasi)", url: "http://localhost:3000/lokasi" },
  { name: "Reservasi (/reservasi)", url: "http://localhost:3000/reservasi" },
];

const resultsDir = path.resolve(process.cwd(), ".lighthouse-results");
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir, { recursive: true });
}

async function auditRoute(route, index) {
  const outputPath = path.join(resultsDir, `audit-${index}.json`);
  const cmd = `npx lighthouse ${route.url} --output=json --output-path="${outputPath}" --chrome-flags="--headless --no-sandbox" --form-factor=mobile --screenEmulation.mobile=true --only-categories=performance,accessibility,seo --quiet`;

  console.log(`Running Lighthouse for ${route.name}...`);
  try {
    await execPromise(cmd);
    const raw = fs.readFileSync(outputPath, "utf8");
    const json = JSON.parse(raw);

    const perf = Math.round((json.categories.performance?.score || 0) * 100);
    const a11y = Math.round((json.categories.accessibility?.score || 0) * 100);
    const seo = Math.round((json.categories.seo?.score || 0) * 100);

    return {
      route: route.name,
      perf,
      a11y,
      seo,
      issues: json.audits,
    };
  } catch (err) {
    console.error(`Error auditing ${route.name}:`, err.message);
    return {
      route: route.name,
      perf: 0,
      a11y: 0,
      seo: 0,
      error: err.message,
    };
  }
}

async function main() {
  console.log("=== STARTING LIGHTHOUSE MOBILE AUDIT ===");
  const report = [];

  for (let i = 0; i < routes.length; i++) {
    const res = await auditRoute(routes[i], i);
    report.push(res);
    console.log(`> ${res.route}: Performance=${res.perf}, Accessibility=${res.a11y}, SEO=${res.seo}`);
  }

  console.log("\n=== FINAL LIGHTHOUSE AUDIT REPORT ===");
  console.table(
    report.map((r) => ({
      Halaman: r.route,
      Performance: r.perf,
      Accessibility: r.a11y,
      SEO: r.seo,
    }))
  );

  fs.writeFileSync(
    path.join(resultsDir, "summary.json"),
    JSON.stringify(report, null, 2),
    "utf8"
  );
}

main();
