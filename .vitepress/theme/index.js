import Layout from "./Layout.vue";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      app.use(await import("@eox/esa-ui/components/header.js"));
      app.use(await import("@eox/esa-ui/components/cookies.js"));
    }
  }
};
