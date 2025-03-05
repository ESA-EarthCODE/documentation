<script setup>
import { onMounted, watch } from "vue";
import { useData, useRouter } from "vitepress";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
const { site, theme, frontmatter } = useData();
const router = useRouter();

if (typeof window !== 'undefined' && window._paq) {
  watch(() => router.route.data.relativePath, (path) => {
    window._paq.push(["setCustomUrl", path.replace(".md", "")]);
      window._paq.push([
        "setDocumentTitle",
        document.domain + "/" + document.title,
      ]);
      window._paq.push(["trackPageView"]);
      window._paq.push(["enableLinkTracking"]);
  }, { immediate: true });
}

onMounted(async () => {
  setTimeout(() => {
    document.querySelector("esa-cookies").addEventListener("accept", () => {
      _paq.push(["rememberCookieConsentGiven"]);
    });
    document.querySelector("esa-cookies").addEventListener("decline", () => {
      _paq.push(["forgetCookieConsentGiven"]);
      _paq.push(["optUserOut"]);
    });

    if (
      !document.cookie.includes("mtm_cookie_consent") &&
      !document.cookie.includes("mtm_consent_removed")
    ) {
      document.querySelector("esa-cookies").style.display = "block";
    }

    // TRACK PAGE SCROLL
    function getScrollPercent() {
      const h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    }
    const scrollTargets = {
      25: false,
      50: false,
      75: false,
      100: false,
    };
    document.addEventListener("scroll", (e) => {
      Object.keys(scrollTargets).forEach((target) => {
        if (getScrollPercent() >= parseInt(target) && !scrollTargets[target]) {
          scrollTargets[target] = true;
          _paq.push(["trackEvent", "Scroll_depth", `${target}%`]);
        }
      });
    });

    document.body.classList.add("loaded");
  });
});
</script>

<template>
  <Layout :class="frontmatter.layout">
    <template #layout-top>
      <ClientOnly>
        <esa-header></esa-header>
      </ClientOnly>
    </template>
    <template #layout-bottom>
      <ClientOnly>
        <esa-cookies
          link="https://www.esa.int/Services/Cookies_notice"
          style="display: none"
        ></esa-cookies>
      </ClientOnly>
    </template>
  </Layout>
</template>

<style scoped>
esa-header {
  position: fixed;
  width: 100%;
  z-index: 11;
}
</style>
