import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { canonicalUrl, DEFAULT_OG_IMAGE, SITE_ORIGIN } from "./constants";

const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "TrikClik",
      url: `${SITE_ORIGIN}/`,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
      description:
        "TrikClik is a creative digital agency delivering brand strategy, graphic design, web and app development, videography, and campaign storytelling.",
      sameAs: [
        "https://www.instagram.com/trikclik/",
        "https://www.linkedin.com/company/trikclik/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "Info@trikclik.com",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_ORIGIN}/`,
      name: "TrikClik | Creative Digital Agency",
      description:
        "Bold digital stories, brand campaigns, and creative production for growth-focused brands.",
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en-US",
    },
  ],
};

const PORTFOLIO_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}/AllProjects#webpage`,
      url: `${SITE_ORIGIN}/AllProjects`,
      name: "Our Work & Portfolio | TrikClik",
      description:
        "Explore TrikClik’s portfolio: branding, social, web, and content work across food, fashion, automotive, wellness, and more.",
      isPartOf: { "@id": WEBSITE_ID },
      inLanguage: "en-US",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Work",
            item: `${SITE_ORIGIN}/AllProjects`,
          },
        ],
      },
    },
  ],
};

const ROUTE_SEO = {
  "/": {
    title: "TrikClik | Creative Digital Agency",
    description:
      "TrikClik is a creative digital agency helping brands grow through graphic design, web and app development, videography, and campaign storytelling.",
    keywords:
      "TrikClik, creative digital agency, graphic design, web development, app development, videography, branding, social media marketing, Pakistan",
    ogTitle: "TrikClik | Creative Digital Agency",
    ogDescription:
      "We create stories for brands worth sharing through design, development, and video production.",
    twitterDescription:
      "Bold digital stories, brand campaigns, and creative production built to perform.",
    jsonLd: HOME_JSON_LD,
  },
  "/AllProjects": {
    title: "Our Work & Portfolio | TrikClik Creative Digital Agency",
    description:
      "See brands TrikClik has grown: case studies across food & beverage, fashion, automotive, wellness, entertainment, and B2B — strategy, content, and design that convert.",
    keywords:
      "TrikClik portfolio, creative agency work, branding case studies, social media campaigns, web design projects, videography, digital marketing Pakistan",
    ogTitle: "Our Work & Portfolio | TrikClik",
    ogDescription:
      "Featured client work from TrikClik — strategy, creative, and content built to grow brands.",
    twitterDescription:
      "Portfolio highlights: campaigns, branding, and content from TrikClik’s creative studio.",
    jsonLd: PORTFOLIO_JSON_LD,
  },
};

export default function RouteHelmet() {
  const { pathname } = useLocation();
  const seo = ROUTE_SEO[pathname] ?? ROUTE_SEO["/"];
  const canonical = canonicalUrl(pathname);
  const jsonLdString = JSON.stringify(seo.jsonLd);

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="TrikClik" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TrikClik" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:alt" content="TrikClik — creative digital agency" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:image:alt" content="TrikClik — creative digital agency" />

      <script type="application/ld+json">{jsonLdString}</script>
    </Helmet>
  );
}
