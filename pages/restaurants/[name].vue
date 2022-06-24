<script setup lang="ts">
import restaurantsData from '@/data.json'

const route = useRoute()
const restaurantName = route.params.name

const restaurantInfo = restaurantsData.find(r => r.name === restaurantName)

useHead({
  title: restaurantInfo ? restaurantName as string : "404 - restaurant not found",
  meta: [
    {
      name: "description",
      content : `this is the information about ${restaurantName} restaurant`
    }
  ]
})
</script>

<template>
  <div class="restaurant-information">
    <NuxtLayout name="custom" v-if="restaurantInfo">
      <div class="flex">
        <div class="image-container w-3/4 h-95vh">
          <img 
              :src="restaurantInfo.imageUrl" 
              alt="" 
              class="w-full h-full" 
          />
        </div>
        <div class="info-container p-3rem w-1/2">
          <h1 class="uppercase text-size-6rem mb-3rem font-semibold text-gray-800">{{ restaurantInfo.name }}</h1>
          <div class="stats-container">
            <h5 class="status-title">Revenue (in billions)</h5>
            <p class="stats-paragraph">${{ restaurantInfo.revenue }}</p>
          </div>
          <div class="stats-container">
            <h5 class="status-title">Number of Stores</h5>
            <p class="stats-paragraph">{{ restaurantInfo.numberOfStores }}</p>
          </div>
          <p class="text-size-1.5rem mt-4rem tracking-wide leading-8 text-gray-800 font-normal">{{ restaurantInfo.content }}</p>
        </div>
      </div>
    </NuxtLayout>
    <NuxtLayout name="error" v-else>
      <template #header>
        Restaurant not found
      </template>
      <template #redirectEl>
        <button 
          class="px-3 py-1 bg-sky-600 text-white rounded mt-5 text-lg"
          @click="$router.push('/restaurants')"
        >
          back to restaurants page
        </button>
      </template>
    </NuxtLayout> 
  </div>
  
</template>