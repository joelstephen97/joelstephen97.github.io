<template>
  <div>
    <Navbar/>
    <div class="pt-16">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
// Import the Navbar component and Vue Router
import Navbar from './components/Navbar.vue'
</script>
