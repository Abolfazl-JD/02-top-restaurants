<script setup lang="ts">
useHead({
  title: "Top 50 restaurants",
  meta: [
    {name : "description",  content : "this is my cool restaurants page"}
  ]
})

// definePageMeta({
//   layout : false
// })
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <div class="container mx-auto px-10">
        <RestaurantTable />
      </div>
    </NuxtLayout>
  </div>
</template>