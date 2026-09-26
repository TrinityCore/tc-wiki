<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page, theme } = useData()
const url = computed(() => `https://github.com/TrinityCore/tc-wiki/edit/main/${page.value.filePath}`)
// Pages whose main edit link goes to /edit also offer GitHub's own editor.
const show = computed(() => {
  const pattern = theme.value.editLink?.pattern
  return typeof pattern === 'function' && pattern(page.value) !== url.value
})
</script>

<template>
  <p v-if="show" class="github-edit-link">
    <a :href="url" target="_blank" rel="noreferrer">Edit on GitHub instead</a>
  </p>
</template>

<style scoped>
.github-edit-link {
  margin: 0 0 8px;
  font-size: 13px;
}
.github-edit-link a {
  color: var(--vp-c-text-2);
}
.github-edit-link a:hover {
  color: var(--vp-c-brand-1);
}
</style>
