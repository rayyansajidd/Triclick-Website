/**
 * Production site origin — canonicals, Open Graph, JSON-LD, sitemap URLs.
 * Must match the hostname in the browser (primary domain on Vercel).
 */
export const SITE_ORIGIN = "https://www.trikclik.com";

export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/Logo.png`;

/** Canonical URL for a pathname (must match React Router paths). */
export function canonicalUrl(pathname) {
  if (!pathname || pathname === "/") {
    return SITE_ORIGIN;
  }
  return `${SITE_ORIGIN}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
