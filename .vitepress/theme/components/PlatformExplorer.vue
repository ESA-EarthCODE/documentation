<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'

// Eagerly include every platform JSON (no manifest required)
const modules = import.meta.glob('../../data/platforms/*.json', { eager: true, import: 'default' })
const platforms = ref(Object.values(modules) || [])

// Filters
const q = ref('')
const language = ref('')
const feature = ref('')
const dataset = ref('')

// Helpers
const uniqueSorted = list => [...new Set(list)].sort()
const buildHaystack = p => (
  [
    p.id,
    p.name,
    p.href,
    ...(p.datasets || []),
    ...(p.languages || []),
    ...(p.features || []),
    ...(p.hardware || []),
    ...(p.workflows || [])
  ]
  .filter(Boolean)
  .join(' ')
  .toLowerCase()
)

// Facets
const languages = computed(() => uniqueSorted(platforms.value.flatMap(p => p.languages || [])))
const featureOptions = computed(() => uniqueSorted(platforms.value.flatMap(p => p.features || [])))
const datasets = computed(() => uniqueSorted(platforms.value.flatMap(p => p.datasets || [])))

// Derived state
const hasAnyFilter = computed(() => !!(q.value || language.value || feature.value || dataset.value))

// Filtered results
const filtered = computed(() => {
  const term = q.value.trim().toLowerCase()
  return platforms.value.filter(p => {
    const matchQ = !term || buildHaystack(p).includes(term)
    const matchLang = !language.value || (p.languages || []).includes(language.value)
    const matchFeature = !feature.value || (p.features || []).includes(feature.value)
    const matchDataset = !dataset.value || (p.datasets || []).includes(dataset.value)
    return matchQ && matchLang && matchFeature && matchDataset
  })
})

const clear = () => { q.value = ''; language.value = ''; feature.value = ''; dataset.value = '' }
</script>

<template>
  <div class="pe">
    <div class="pe-filters-top">
      <input
        v-model="q"
        type="search"
        class="pe-input"
        placeholder="Search all fields (e.g., Sentinel-2, Python, openEO)"
        aria-label="Search all fields"
      />
    </div>

    <div class="pe-filters-bottom">
      <select v-model="language" class="pe-select" aria-label="Filter by language">
        <option value="">Language: Any</option>
        <option v-for="l in languages" :key="l" :value="l" :title="l">{{ l }}</option>
      </select>
      <select v-model="feature" class="pe-select" aria-label="Filter by features">
        <option value="">Features: Any</option>
        <option v-for="f in featureOptions" :key="f" :value="f" :title="f">{{ f }}</option>
      </select>
      <select v-model="dataset" class="pe-select" aria-label="Filter by dataset">
        <option value="">Dataset: Any</option>
        <option v-for="d in datasets" :key="d" :value="d" :title="d">{{ d }}</option>
      </select>
      <button class="pe-btn" @click="clear" :disabled="!hasAnyFilter">Clear</button>
</div>

    <div v-if="filtered.length === 0" class="pe-empty">
      No platforms match your search and filters.
      <a href="#" class="pe-link" @click.prevent="clear">Clear filters</a>
    </div>
    <div v-else class="pe-grid">
      <article v-for="p in filtered" :key="p.id" class="pe-card">
        <img v-if="p.logo" class="pe-logo" :src="withBase(p.logo)" :alt="`${p.name} logo`" />
        <h3 class="pe-title">{{ p.name }}</h3>
        <div class="pe-meta">
          <div v-if="p.languages?.length"><strong>Languages:</strong> {{ p.languages.join(', ') }}</div>
          <div v-if="p.features?.length"><strong>Features:</strong> {{ p.features.join(', ') }}</div>
          <div v-if="p.datasets?.length">
            <strong>Datasets:</strong>
            <span>
              {{ p.datasets.slice(0, 5).join(', ') }}<span v-if="p.datasets.length > 5">, +{{ p.datasets.length - 5 }} more</span>
            </span>
          </div>
        </div>
        <div class="pe-actions">
          <a v-if="p.href" class="pe-link" :href="withBase(p.href)">View docs</a>
        </div>
      </article>
    </div>
  </div>
  
</template>

<style scoped>
.pe { max-width: 1100px; margin: 1rem auto; }
.pe-filters-top { display: flex; gap: .5rem; align-items: center; margin-bottom: 1rem; }
.pe-input, .pe-select { height: 36px; line-height: 34px; padding: 0 .6rem; font-size: .95rem; border: 1px solid var(--vp-c-divider, #d0d7de); border-radius: 8px; background: var(--vp-c-bg, #fff); color: var(--vp-c-text-1, #1f2328); }
.pe-input { flex: 1 1 auto; min-width: 200px; }
.pe-select { flex: 1 1 160px; min-width: 140px; max-width: 220px; width: auto; white-space: normal; }
.pe-select option { white-space: normal; overflow-wrap: anywhere; word-break: break-word; line-height: 1.2; }
.pe-btn { height: 36px; padding: 0 .8rem; border-radius: 8px; border: 1px solid transparent; background: var(--vp-c-brand-1, #3e63dd); color: #fff; cursor: pointer; }
.pe-btn:disabled { opacity: .6; cursor: default; }
.pe-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
.pe-card { padding: 1rem; border-radius: 12px; background: var(--vp-c-bg-soft, #f6f7f9); box-shadow: 0 1px 2px rgba(0,0,0,.04); display: flex; flex-direction: column; gap: .5rem; }
.pe-logo { height: 48px; object-fit: contain; align-self: center; }
.pe-title { font-size: 1.05rem; margin: 0.25rem 0 0; text-align: center; }
.pe-meta { font-size: .9rem; display: flex; flex-direction: column; gap: .25rem; }
.pe-actions { margin-top: auto; display: flex; justify-content: center; }
.pe-link { text-decoration: none; color: var(--vp-c-brand-1, #3e63dd); font-weight: 600; }
.pe-empty { text-align: center; color: var(--vp-c-text-2, #57606a); padding: .75rem 0; }
.pe-filters-bottom { display: flex; flex-wrap: wrap; gap: .5rem; align-items: center; margin: .5rem 0 1rem; overflow-x: visible; padding: .25rem 0; }
.pe-filters-bottom .pe-btn { margin-left: auto; order: 99; }
</style>
