<script setup lang="ts">
interface PropsType {
    rank: number,
    name : string
}

const props = defineProps<PropsType>()
</script>

<template>
  <div class="border-t border-solid border-t-#80808056 flex items-center py-2 even:bg-gray-200">
    <h4 class="header text-black"> {{ rank }} </h4>
    <NuxtLink :to="`/restaurants/${name}`" class="header text-yellow-500 w-auto font-medium"> {{ name }} </NuxtLink>
  </div>
</template>
