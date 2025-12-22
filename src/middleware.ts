import { defineMiddleware } from "astro:middleware";
import type { APIContext, MiddlewareNext } from "astro";

export const onRequest = defineMiddleware((context: APIContext, next: MiddlewareNext) => {
    const { request, url, cookies, redirect } = context;

    // 1. Handle manual language override via query param
    const langParam = url.searchParams.get("lang");
    if (langParam === "en" || langParam === "fr") {
        cookies.set("preferred_lang", langParam, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365, // 1 year
        });

        // Clean URL: remove query param and redirect to appropriate path
        const cleanPath = langParam === "fr" ? "/fr" : "/";
        return redirect(cleanPath, 302);
    }

    // 2. Handle root path language detection
    if (url.pathname === "/") {
        const preferredLang = cookies.get("preferred_lang")?.value;

        // If user prefers French, redirect to /fr
        if (preferredLang === "fr") {
            return redirect("/fr", 302);
        }

        // If user prefers English (or cookie is set to en), stay at /
        if (preferredLang === "en") {
            return next();
        }

        // No preference set - check Accept-Language header for first-time visitors
        const acceptLang = request.headers.get("accept-language");
        if (acceptLang?.toLowerCase().startsWith("fr")) {
            // Set cookie and redirect to French
            cookies.set("preferred_lang", "fr", {
                path: "/",
                maxAge: 60 * 60 * 24 * 365,
            });
            return redirect("/fr", 302);
        }

        // Default to English - set cookie for consistency
        cookies.set("preferred_lang", "en", {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        });
        return next();
    }

    // 3. Track language preference based on visited path
    if (url.pathname.startsWith("/fr")) {
        cookies.set("preferred_lang", "fr", {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        });
    } else {
        // All other paths (English content)
        cookies.set("preferred_lang", "en", {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
        });
    }

    return next();
});
