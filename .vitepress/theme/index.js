import Layout from "./Layout.vue";
import "./style.css";
import FeatureCard from "./components/FeatureCard.vue";
import OpenEOCollections from "./components/OpenEOCollections.vue";
import Checklist from './components/Checklist.vue'
import PlatformExplorer from './components/PlatformExplorer.vue'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      app.use(await import("@eox/esa-ui/components/header.js"));
      app.use(await import("@eox/esa-ui/components/cookies.js"));
    }

    app.component("FeatureCard", FeatureCard);
    app.component("OpenEOCollections", OpenEOCollections);
    app.component('Checklist', Checklist)
    app.component('PlatformExplorer', PlatformExplorer)
  },
};
