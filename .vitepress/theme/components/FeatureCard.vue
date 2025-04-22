<template>
    <div class="feature-card">
      <div class="text"><slot /></div>
      <div class="image">
        <img :src="resolvedSrc" :alt="alt" />
      </div>
    </div>
  </template>
  
  <script setup>
  // resolve relative image paths to work with Vite's base URL
  import { computed } from 'vue'
    const props = defineProps({
    img: { type: String, required: true },
    alt: { type: String, default: '' }
  })
    const base = import.meta.env.BASE_URL
    const resolvedSrc = computed(() => {
    if (props.img.startsWith('/')) {
      return base + props.img.slice(1)
    }
    return props.img
  })
  </script>
  
  <style>
  .feature-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  .feature-card .text {
    flex: 1;
    padding-right: 1rem;
  }
  .feature-card .image img {
    max-width: 250px;
    height: auto;
    border-radius: 4px;
  }
  </style>
  