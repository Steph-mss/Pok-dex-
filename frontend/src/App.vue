<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar v-if="$route.name !== 'NotFound'" />
    <RouterView />

  </div>
</template>
