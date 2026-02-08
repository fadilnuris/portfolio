<template>
  <section id="projects" ref="sectionRef" class="relative px-6 py-32">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute left-1/4 top-0 h-[350px] w-[350px] rounded-full bg-pastel-peach/20 blur-[100px]"
      />
      <div
        class="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-pastel-sky/20 blur-[100px]"
      />
    </div>

    <div class="relative mx-auto max-w-6xl">
      <p
        data-animate
        class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent opacity-0 underline dark:no-underline"
      >
        Projects
      </p>
      <h2
        data-animate
        class="mb-16 text-balance text-3xl font-semibold tracking-tight text-foreground opacity-0 md:text-4xl"
      >
        Featured Projects.      
      </h2>

      <div class="grid gap-6 md:grid-cols-2">
        <a
          v-for="project in projects"
          :key="project.title"
          data-animate
          class="glass group relative overflow-hidden rounded-2xl opacity-0 shadow-sm transition-all duration-500 hover:shadow-lg"
        >
          <div
            :class="[
              'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100',
              project.accent,
            ]"
          />

          <div class="relative aspect-[16/10] overflow-hidden">
            <img
              :src="project.image || '/placeholder.svg'"
              :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="relative p-6">
            <div class="mb-3 flex items-center justify-between">
              <h3 class="text-lg font-medium text-foreground">
                {{ project.title }}
              </h3>
            </div>
            <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full bg-background/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAnimateOnIntersect } from '~/composables/useAnimateOnIntersect'

const projects = [
  {
    title: 'Panglima Propertindo Website',
    description:
      'Property management platform for housing estates, land plots, and memorial parks in Samarinda, East Kalimantan. Developed both customer-facing website and internal staff dashboard with responsive UI and reusable components.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'shadcn/ui'],
    image: '/images/Web_panglima.png',
    accent: 'from-pastel-pink/20 to-pastel-lavender/20',
  },
  {
    title: 'Insira Memorial Park Website',
    description:
      'Memorial park property platform in Tigaraksa. Built the customer website and affiliate client web dashboard with interactive data tables, filtering features, and API integration.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'shadcn/ui'],
    image: '/images/Web_insira.png',
    accent: 'from-pastel-lavender/20 to-pastel-sky/20',
  },
  {
    title: 'Flyket E-Flight Website',
    description:
      'Flight ticket booking platform developed during MSIB Binar program. Implemented responsive booking flows, search functionality, and dynamic UI components for ticket selection and checkout process.',
    tags: ['JavaScript', 'React', 'Tailwind CSS', 'headless UI'],
    image: '/images/Web_Flyket.png',
    accent: 'from-pastel-lavender/20 to-pastel-sky/20',
  }
]

const sectionRef = ref<HTMLElement | null>(null)

useAnimateOnIntersect(sectionRef, { threshold: 0.1, delayStep: 0.12 })
</script>
