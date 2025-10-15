export interface CardTheme {
  textColor: string;
  backgroundClass: string;
  accentColor: string;
  borderColor: string;
  subtleColor: string;
  decorativeLineColor: string;
  numberColor: string;
  backgroundColor: string;
  backgroundImage?: string;
  gradient?: string;
  titleColor: string;
  titleFontSize: string;
  titleFontWeight: string;
  titleFontFamily?: string;
  descriptionColor: string;
  descriptionFontSize: string;
  descriptionFontFamily?: string;
  sectionTitleColor: string;
  sectionTitleFontSize: string;
  sectionTitleFontWeight: string;
  sectionTitleFontFamily?: string;
  keyPointColor: string;
  keyPointFontSize: string;
  keyPointFontFamily?: string;
  numberBackgroundColor: string;
  numberTextColor: string;
  numberFontWeight: string;
  numberFontFamily?: string;
  decorativeLineWidth: string;
  decorativeLineHeight: string;
  fontFamily?: string;
  linkColor: string;
}

export interface SlideTheme {
  background: string;
  type: "solid" | "gradient";
  titleFont: string;
  titleWeight: number | "normal" | "bold";
  titleTransform: "uppercase" | "none" | "capitalize" | "lowercase";
  textFont: string;
  titleColor: string;
  textColor: string;
  overlayColor: string;
}

export const SITE_TITLE = "devFokus";
export const SITE_DESCRIPTION = "devFokus — Developer Portal";

export const PROD_URL = "https://www.devfokus.com";

export const isProdEnv = () => {
  if (import.meta.env?.PROD || import.meta.env?.MODE === "production") {
    return true;
  }

  if (typeof window !== "undefined") {
    return window.location.origin === PROD_URL;
  }

  return false;
};

export const isProd = isProdEnv();

export const ASSETS_IMAGES_PREFIX = "/src/assets/images";

export const MERMAID_LIVE_BASE_URL = "https://mermaid.live";

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  showWhenLoggedOut?: boolean;
  showWhenLoggedIn?: boolean;
  title?: string;
  description?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "blogs",
    label: "Articles",
    href: "/blogs",
    title: "Articles",
    description:
      "Practical guides, in-depth technical pieces, and lessons from real projects.",
  },
  {
    id: "topics",
    label: "Topics",
    href: "/topics",
    title: "Topics",
    description:
      "In-depth guides and tutorials organized by topic. Learn at your own pace with structured content.",
  },
  {
    id: "categories",
    label: "Categories",
    href: "/categories",
    title: "Categories",
    description:
      "Browse our organized content categories. Each category contains curated topics and learning paths.",
  },
  {
    id: "cards",
    label: "Cards",
    href: "/cards",
    title: "Cards",
    description: "Developer-Gathered, AI-Crafted, Human-Checked.",
  },
  {
    id: "slides",
    label: "Slides",
    href: "/slides",
    title: "Slides",
    description: "Interactive presentations crafted for developers.",
  },
  {
    id: "open-source",
    label: "GitHub",
    href: "https://github.com/desireco/devfokus",
    title: "GitHub",
    description: "Explore our open-source projects.",
  },
];

export const getNavigationItems = (): MenuItem[] => {
  return MENU_ITEMS;
};
