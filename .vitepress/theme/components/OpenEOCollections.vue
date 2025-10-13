<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const props = defineProps({
  url: { type: String, required: true }
})

const collections = ref([])
const loading = ref(true)
const error = ref(null)
const searchQuery = ref("")

async function fetchCollections() {
  loading.value = true
  error.value = null
  collections.value = []

  try {
    const res = await fetch(props.url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    collections.value = json.collections.sort((a, b) =>
      a.title.localeCompare(b.title)
    )
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchCollections)
watch(() => props.url, fetchCollections)

// Filtered collections based on search input
const filteredCollections = computed(() => {
  if (!searchQuery.value) return collections.value
  const q = searchQuery.value.toLowerCase()
  return collections.value.filter(c =>
    c.title.toLowerCase().includes(q) ||
    (c.description && c.description.toLowerCase().includes(q)) ||
    c.id.toLowerCase().includes(q)
  )
})
</script>

<template>
  <h4>Collections ({{ filteredCollections.length }})</h4>
  <input
    v-model="searchQuery"
    type="text"
    placeholder="🔍 Search collections..."
    class="search"
  />
  <div class="collections">

    <!-- Loading state -->
    <div v-if="loading" class="loading">
      <span class="spinner"></span>
      <span>Loading collections…</span>
    </div>

    <!-- Error state -->
    <p v-else-if="error" class="error">⚠️ Failed to load: {{ error }}</p>

    <!-- Success -->
    <div v-else>
      <!-- Search bar -->

      <!-- List -->
      <ul class="list">
        <li v-for="c in filteredCollections" :key="c.id">
          <strong>{{ c.title }}</strong><br />
          <small>{{ c.description }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.collections {
  height: 500px;
  overflow: auto;
  padding: 0.5rem;
}

.loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-style: italic;
}

/* Search box styling */
.search {
  width: 100%;
  padding: .75rem;
  margin: 1rem 0rem;
  font-size: 0.95rem;
  border: 1px solid #fff;
  border-radius: 6px;
  outline: none;
}
.search:focus {
  border-color: #42b883;
  box-shadow: 0 0 3px rgba(66, 184, 131, 0.6);
}

/* CSS spinner */
.spinner {
  width: 1em;
  height: 1em;
  border: 2px solid #ccc;
  border-top: 2px solid #42b883;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  background-color: rgb(248, 215, 218);
  color: rgb(114, 28, 36);
  border: 1px solid rgb(245, 198, 203);
  padding: 1rem;
  border-radius: 10px
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, .2);
}
</style>
