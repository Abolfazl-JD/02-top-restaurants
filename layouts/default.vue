<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - jalil website` : 'jalil website';
    }
  })
</script>

<template>
    <div>
        <Nav />
        <slot />
    </div>
</template>