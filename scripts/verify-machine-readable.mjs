import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const siteUrl = "https://orlandovillanueva.com";
const files = {
    "/sitemap.xml": { path: "dist/sitemap.xml", type: "application/xml; charset=utf-8" },
    "/robots.txt": { path: "dist/robots.txt", type: "text/plain; charset=utf-8" },
    "/llms.txt": { path: "dist/llms.txt", type: "text/plain; charset=utf-8" },
};

function expect(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

const content = Object.fromEntries(
    await Promise.all(
        Object.entries(files).map(async ([url, file]) => [url, await readFile(new URL(file.path, `file://${root}`), "utf8")]),
    ),
);
const notFound = await readFile(new URL("dist/404.html", `file://${root}`), "utf8");

expect(content["/sitemap.xml"].includes("<loc>https://orlandovillanueva.com/</loc>"), "Sitemap is missing the English canonical URL.");
expect(content["/sitemap.xml"].includes("<loc>https://orlandovillanueva.com/fr/</loc>"), "Sitemap is missing the French canonical URL.");
expect(!content["/sitemap.xml"].includes("thank-you"), "Sitemap must exclude thank-you pages.");
expect(content["/robots.txt"].includes(`Sitemap: ${siteUrl}/sitemap.xml`), "robots.txt is missing the sitemap declaration.");
expect(content["/llms.txt"].startsWith("# Orlando Villanueva\n\n>"), "llms.txt must begin with an H1 and summary blockquote.");
expect(content["/llms.txt"].includes("When to use Orlando:"), "llms.txt is missing when-to-use guidance.");
expect(notFound.includes("This page could not be found."), "404 page is missing its recovery guidance.");
expect(notFound.includes('href="/sitemap.xml"'), "404 page must link to the sitemap.");
expect(notFound.includes('href="/llms.txt"'), "404 page must link to llms.txt.");
expect(notFound.includes('name="robots" content="noindex, follow"'), "404 page must be noindex.");

const server = createServer((request, response) => {
    const file = files[request.url];

    if (file) {
        response.writeHead(200, { "Content-Type": file.type });
        response.end(content[request.url]);
        return;
    }

    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(notFound);
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

try {
    for (const [path, file] of Object.entries(files)) {
        const response = await fetch(`http://127.0.0.1:${port}${path}`);
        expect(response.status === 200, `${path} must return HTTP 200.`);
        expect(response.headers.get("content-type") === file.type, `${path} has the wrong content type.`);
    }

    const missing = await fetch(`http://127.0.0.1:${port}/agentic-check-not-found`);
    expect(missing.status === 404, "Unknown paths must return HTTP 404.");
    expect((await missing.text()).includes("English homepage"), "404 response is missing recovery links.");
} finally {
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
}

console.log("Machine-readable endpoint verification passed.");
