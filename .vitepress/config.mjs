import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const sideBar = withSidebar(
  {
    // https://vitepress.dev/reference/site-config
    srcDir: "./pages",
    cleanUrls: true,
    title: "EarthCODE Documentation",
    titleTemplate: " EarthCODE",
    collapsed: true,
    description: "Documentation for the EarthCODE website",
    base: "/documentation/",
    head: [
      ["link", { rel: "icon", href: "/img/EarthCODE_Favicon_32x32px.png" }],
      // Open Graph / Facebook
      ["meta", { property: "og:type", content: "website" }],
      [
        "meta",
        {
          property: "og:url",
          content: "https://earthcode.esa.int",
        },
      ],
      ["meta", { property: "og:title", content: "EarthCODE" }],
      [
        "meta",
        {
          property: "og:description",
          content: "Earth Science Collaborative Open Development Environment",
        },
      ],
      [
        "meta",
        {
          property: "og:image",
          content: "https://earthcode.esa.int/img/EarthCODE_Herobanner_1920x1080.jpg",
        },
      ],
      // Twitter
      ["meta", { property: "twitter:card", content: "summary_large_image" }],
      [
        "meta",
        {
          property: "twitter:url",
          content: "https://earthcode.esa.int",
        },
      ],
      ["meta", { property: "twitter:title", content: "EarthCODE" }],
      [
        "meta",
        {
          property: "twitter:description",
          content: "Earth Science Collaborative Open Development Environment",
        },
      ],
      [
        "meta",
        {
          property: "twitter:image",
          content: "https://earthcode.esa.int/img/EarthCODE_Herobanner_1920x1080.jpg",
        },
      ],
      [
        "script",
        {},
        `
        var _paq = (window._paq = window._paq || []);
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(["requireCookieConsent"]);
        _paq.push(['setCookieSameSite', 'None']);
        _paq.push(['setSecureCookie', true]);
        _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
        _paq.push(["trackPageView"]);
        _paq.push(["enableLinkTracking"]);
        (function () {
          var u = "https://nix.eox.at/piwik/";
          _paq.push(["setTrackerUrl", u + "matomo.php"]);
          _paq.push(["setSiteId", "13"]);
          var d = document,
            g = d.createElement("script"),
            s = d.getElementsByTagName("script")[0];
          g.async = true;
          g.src = u + "matomo.js";
          s.parentNode.insertBefore(g, s);
        })();
      `,
      ],
    ],
    themeConfig: {
      footer: {
        message: 'ESA – European Space Agency © 2020-2025',
      },
      search: {
        provider: 'local'
      }
    }
  },
  {
    // https://vitepress-sidebar.cdget.com/guide/options
    documentRootPath: "pages",
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    excludePattern: ["README.md"],
    sortMenusByFrontmatterOrder: true,
  }
)

const trainingSection = sideBar.themeConfig.sidebar.find(section => section.text === 'Training and Resources')
trainingSection.items.push({ text: 'Examples', link: 'https://esa-earthcode.github.io/tutorials/' })

// Collapse all sidebar groups at all nesting levels
const collapseAll = (items) => {
  if (!items) return;
  items.forEach((item) => {
    if (item && Array.isArray(item.items) && item.items.length) {
      item.collapsed = true;
      collapseAll(item.items);
    }
  });
};

const { sidebar } = sideBar.themeConfig;
if (Array.isArray(sidebar)) {
  collapseAll(sidebar);
} else if (sidebar && typeof sidebar === 'object') {
  Object.values(sidebar).forEach((items) => collapseAll(items));
}

export default defineConfig(
  sideBar
);
