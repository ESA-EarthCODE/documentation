import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

export default defineConfig(
  withSidebar(
    {
      // https://vitepress.dev/reference/site-config
      srcDir: "pages",
      title: "EarthCODE Documentation",
      description: "Documentation for the EarthCODE website",
      appearance: "dark",
      base: "/documentation/",
    },
    {
      // https://vitepress-sidebar.cdget.com/guide/options
      documentRootPath: "pages",
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      excludePattern: ["README.md"],
    }
  )
);
