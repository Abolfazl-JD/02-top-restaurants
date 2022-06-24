<script setup lang="ts">

const openMobileMenu = ref(false)
</script>

<template>
    <nav class="bg-gray-800">
        <div class="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center text-white text-2xl">
                        Restauranty
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button
                        @click="openMobileMenu = !openMobileMenu"
                        type="button" 
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                        aria-controls="mobile-menu" 
                        aria-expanded="false"
                    >    
                        <svg
                            v-if="!openMobileMenu" 
                            class="block h-6 w-6" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="2" 
                            stroke="currentColor" 
                            aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
            
                        <svg 
                            v-else
                            class="h-6 w-6" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="2" 
                            stroke="currentColor" 
                            aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        <NuxtLink to="/" class="nav-item">Home</NuxtLink>
                        <NuxtLink to="/restaurants" class="nav-item">Restaurants</NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" v-if="openMobileMenu">
            <div class="px-2 pt-2 pb-3 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <NuxtLink to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</NuxtLink>

            <NuxtLink to="/restaurants" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Restaurants</NuxtLink>
            </div>
        </div>
    </nav>
</template>