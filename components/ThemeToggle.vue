<template>
  <button
    type="button"
    @click="toggleTheme"
    class="relative flex h-8 w-14 items-center rounded-full bg-secondary p-1 transition-colors duration-300"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <span class="absolute left-1.5">
      <svg class="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zm-8-5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 10zm13 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0115 10zM4.343 4.343a.75.75 0 011.061 0l1.06 1.06a.75.75 0 01-1.06 1.061l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.06-1.06a.75.75 0 010-1.061zM4.343 15.657a.75.75 0 010-1.06l1.06-1.061a.75.75 0 111.061 1.06l-1.06 1.061a.75.75 0 01-1.061 0zm9.193-9.193a.75.75 0 010-1.061l1.06-1.06a.75.75 0 111.061 1.06l-1.06 1.06a.75.75 0 01-1.061 0zM10 7a3 3 0 100 6 3 3 0 000-6z"
        />
      </svg>
    </span>
    <span class="absolute right-1.5">
      <svg class="h-4 w-4 text-indigo-300" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
          clip-rule="evenodd"
        />
      </svg>
    </span>

    <span
      :class="[
        'h-6 w-6 rounded-full shadow-md transition-all duration-300',
        isDark ? 'translate-x-6 bg-foreground' : 'translate-x-0 bg-foreground',
      ]"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
