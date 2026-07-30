export type SiteLanguage = "en" | "fr";

export const getLocalizedHomePath = (lang: SiteLanguage) =>
    lang === "fr" ? "/fr/" : "/";
