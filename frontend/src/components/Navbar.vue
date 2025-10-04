<template>
  <nav
    class="relative flex items-center justify-between px-14 py-4 shadow-md bg-[#f5db13]"
    style="font-family: 'Karla', sans-serif"
  >
    <!-- Logo -->
    <div class="ml-10">
      
      

       <RouterLink
        to="/"
      >
        <img src="@/assets/logo.png" alt="Pokemon Logo" class="h-14 ml-[100px]" />
      </RouterLink>
    </div>

    <!-- Liens centrés -->
    <div
      class="absolute left-1/2 -translate-x-1/2 flex items-center gap-16 text-black  text-lg"
    >
      <RouterLink
        to="/"
        class="relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-full after:rounded-full after:bg-transparent after:transition-colors after:duration-200 hover:after:bg-black [&.router-link-exact-active]:after:bg-black"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/pokedex"
        class="relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-full after:rounded-full after:bg-transparent after:transition-colors after:duration-200 hover:after:bg-black [&.router-link-exact-active]:after:bg-black"
      >
        Pokédex
      </RouterLink>
    </div>

    <div class="justify-self-end"></div>
  </nav>
</template>


<script setup>
import { RouterLink } from "vue-router";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&display=swap");
</style>