<template>
  <section class="checklist" :aria-label="title || 'Checklist'">
    <header class="checklist__head">
      <h3>{{ title || 'Checklist' }}</h3>
      <span class="checklist__count">{{ doneCount }}/{{ items.length }}</span>
    </header>

    <ul class="checklist__list">
      <li v-for="(text, i) in items" :key="i" class="checklist__item">
        <label class="checklist__row">
          <input type="checkbox" v-model="doneMask[i]" />
          <!-- Render Markdown-style links and resolve VitePress-relative links -->
          <span :class="{ done: doneMask[i] }" v-html="renderItem(text)"></span>
        </label>
      </li>
    </ul>

    <footer class="checklist__foot">
      <button class="checklist__btn" @click="clearDone" :disabled="doneCount === 0">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress' // withBase is handled manually to avoid double-base bugs
import DOMPurify from 'dompurify'    // ensure this component is wrapped in <ClientOnly> in MD

const props = defineProps({
  items: { type: Array, default: () => [] },
  title: { type: String, default: 'Checklist' },
  storageKey: { type: String, default: 'vp-checklist' }
})

// Persist completion state by index — not item text.
const doneMask = ref([])

function resizeMask(len) {
  const mask = Array.isArray(doneMask.value) ? doneMask.value : []
  if (mask.length === len) return
  if (mask.length > len) doneMask.value = mask.slice(0, len)
  else doneMask.value = mask.concat(Array(len - mask.length).fill(false))
}

function load() {
  resizeMask(props.items.length)
  try {
    const raw = localStorage.getItem(props.storageKey)
    if (!raw) return
    const arr = JSON.parse(raw)
    if (Array.isArray(arr)) {
      doneMask.value = arr.map(Boolean)
      resizeMask(props.items.length)
    }
  } catch {}
}

function persist() {
  try { localStorage.setItem(props.storageKey, JSON.stringify(doneMask.value)) } catch {}
}

const doneCount = computed(() => doneMask.value.filter(Boolean).length)

function clearDone() {
  doneMask.value = doneMask.value.map(() => false)
}

// --- Link resolution helpers -------------------------------------------------

const route = useRoute()
// Vite/VitePress base (e.g., '/documentation/')
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '/') // ensure trailing slash

function isExternal(href) {
  return /^(?:https?:)?\/\//i.test(href) || href.startsWith('mailto:')
}

// Normalize internal path so base is applied exactly once
function applyBase(pathname) {
  // ensure leading slash
  let p = pathname.startsWith('/') ? pathname : '/' + pathname.replace(/^\.?\//, '')
  // avoid double base (e.g., '/documentation/documentation/...'):
  if (BASE !== '/' && p.startsWith(BASE)) return p
  // prepend base (strip trailing slash from base when concatenating)
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE
  return base + p
}

// Resolve internal/relative links similar to VitePress router behavior.
function resolveInternalLink(href) {
  if (!href) return href
  if (isExternal(href) || href.startsWith('#')) return href

  // Base directory of current page (e.g., '/guide/intro.html' -> '/guide/')
  const baseDir = route.path.endsWith('/') ? route.path : route.path.replace(/[^/]+$/, '/')

  // Build URL relative to current route (uses window.location only on client)
  const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
  const u = new URL(href, origin + baseDir)

  let p = u.pathname

  // Convert .md to .html for internal docs pages
  if (/\.md$/i.test(p)) {
    p = p.replace(/\.md$/i, '.html')
  }

  // If the path looks like a directory (no extension) and doesn’t end with '/', add trailing slash
  const hasExt = /\.[a-z0-9]+$/i.test(p)
  if (!hasExt && !p.endsWith('/')) {
    p = p + '/'
  }

  // Prepend site base exactly once; preserve query/hash
  const resolved = applyBase(p) + (u.search || '') + (u.hash || '')
  return resolved
}

// Convert Markdown links [label](url) -> HTML <a> with resolved href.
function mdLinksToHtml(s) {
  if (typeof s !== 'string') return ''
  return s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, url) => {
    const href = resolveInternalLink(String(url).trim())
    const external = isExternal(href)
    const target = external ? ' target="_blank" rel="noopener noreferrer"' : ''
    return `<a href="${href}"${target}>${String(label).trim()}</a>`
  })
}

function renderItem(text) {
  const html = mdLinksToHtml(String(text ?? ''))
  // Sanitize to avoid XSS; only <a> with href/target/rel is allowed
  return typeof window === 'undefined'
    ? '' // SSR guard (component should be inside <ClientOnly>)
    : DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['a'],
        ALLOWED_ATTR: ['href', 'target', 'rel']
      })
}

onMounted(load)
watch(() => props.items, (nv) => resizeMask(nv.length))
watch(doneMask, persist, { deep: true })
</script>

<style scoped>
.checklist { display: block; }
.checklist__head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
.checklist__count { font-variant-numeric: tabular-nums; opacity: 0.7; }
.checklist__list { list-style: none; padding: 0; margin: 0; }
.checklist__item { padding: 6px 0; }
.checklist__row { display: flex; align-items: center; gap: 10px; }
.done { text-decoration: line-through; opacity: 0.6; }
.checklist__foot { display: flex; justify-content: flex-end; margin-top: 8px; }
.checklist__btn {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}
.checklist__btn:hover:not(:disabled) { background-color: var(--vp-c-bg-soft); }
.checklist__btn:disabled { opacity: 0.4; cursor: not-allowed; }
</style>