<template>
    <div class="container mx-auto text-center mt-5rem">
        <h1 class="text-5xl text-gray-800 mb-4 font-medium">
            <slot name="header" />
        </h1>
        <div class="text-center">
            <img
                src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png"
                class="w-10rem inline-block"
            />
        </div>
        <slot name="redirectEl" />
    </div>
</template>