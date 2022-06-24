<script setup lang="ts">
import restaurantsData from '@/data.json'

const organizedRestaurants = {
    first: [...restaurantsData].splice(0, 25),
    second : [...restaurantsData].splice(25, 25)
}
</script>

<template>
  <div class="my-3rem">
    <h1 class="mb-2rem text-4xl text-gray-800 font-medium">TOP 50: THE RANKING</h1>
    <div class="flex justify-between border-t-2 border-solid border-t-gray-700">
      <div class="w-1/2 pr-2">
        <RestaurantHeadRow />
        <RestaurantRow
            v-for="restaurant in organizedRestaurants.first"
            :key="restaurant.id"
            :name="restaurant.name"
            :rank="restaurant.rank"
        />
      </div>
      <div class="w-1/2 pl-2">
        <RestaurantHeadRow />
        <RestaurantRow
            v-for="restaurant in organizedRestaurants.second"
            :key="restaurant.id"
            :name="restaurant.name"
            :rank="restaurant.rank"
        />
      </div>
    </div>
  </div>
</template>
