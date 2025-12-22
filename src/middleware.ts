import { defineMiddleware } from "astro:middleware";
import type { APIContext, MiddlewareNext } from "astro";

export const onRequest = defineMiddleware((context: APIContext, next: MiddlewareNext) => {
    const { request, url, cookies, redirect } = context;

    // 1. Check for manual language override via query param
    if (url.searchParams.has("lang")) {
        const lang = url.searchParams.get("lang");
        if (lang === "en" || lang === "fr") {
            cookies.set("preferred_lang", lang, {
                path: "/",
                maxAge: 60 * 60 * 24 * 365, // 1 year
            });
            // Remove the query param and redirect to the clean URL
            const cleanUrl = new URL(url);
            cleanUrl.searchParams.delete("lang");
            return redirect(cleanUrl.pathname + cleanUrl.search);
        }
    }
    }

    // 2. If accessing root path /, check for language preference
    if (url.pathname === "/") {
        const preferredLang = cookies.get("preferred_lang")?.value;

        if (preferredLang === "fr") {
            return redirect("/fr");
        }

        if (!preferredLang) {
            // Check Accept-Language header
            const acceptLang = request.headers.get("accept-language");
            if (acceptLang?.startsWith("fr")) {
                return redirect("/fr");
            }
        }
    }

    // 3. Update preference if visiting a specific language path
    if (url.pathname.startsWith("/fr")) {
        cookies.set("preferred_lang", "fr", {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        });
    }

    return next();
});
