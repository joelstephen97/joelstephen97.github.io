<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { cn } from '../lib/utils'

// State for dark mode
const isDark = ref(false)

// Toggle dark mode function
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('isDark', JSON.stringify(isDark.value))
}

// Load dark mode preference from localStorage
onMounted(() => {
  const savedPreference = localStorage.getItem('isDark')
  if (savedPreference) {
    isDark.value = JSON.parse(savedPreference)
    document.documentElement.classList.toggle('dark', isDark.value)
  }
})
</script>

<template>
  <div :class="cn('fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg', { 'dark': isDark })">
    <nav :class="cn('flex justify-center items-center space-x-4 lg:space-x-6 py-4 bg-white shadow-md dark:bg-gray-800')">
      <NuxtLink to="/about-me" class="text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary-dark">
        About Me
      </NuxtLink>
      <NuxtLink to="/experiences" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary dark:text-muted-foreground-dark dark:hover:text-primary-dark">
        Experiences
      </NuxtLink>
      <NuxtLink to="/contact-me" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary dark:text-muted-foreground-dark dark:hover:text-primary-dark">
        Contact Me
      </NuxtLink>
      <button @click="toggleDarkMode" class="text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary-dark">
        Toggle Dark Mode
      </button>
    </nav>
  </div>
</template>

<style>
/* Add dark mode classes */
body.dark {
  background-color: #1a202c;
  color: #a0aec0;
}
.dark .bg-white {
  background-color: #2d3748;
}
.dark .text-muted-foreground {
  color: #a0aec0;
}
.dark .text-muted-foreground-dark {
  color: #718096;
}
.dark .hover\:text-primary-dark:hover {
  color: #63b3ed;
}
</style>
