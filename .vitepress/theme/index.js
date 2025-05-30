import Layout from "./Layout.vue";
import "./style.css";
import FeatureCard from './components/FeatureCard.vue'


/** @type {import('vitepress').Theme} */
export default {
  Layout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      app.use(await import("@eox/esa-ui/components/header.js"));
      app.use(await import("@eox/esa-ui/components/cookies.js"));
    }
    app.component('FeatureCard', FeatureCard)
  }
};
