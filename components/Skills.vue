<template>
  <section id="skills" ref="sectionRef" class="px-6 py-32">
    <div class="mx-auto max-w-6xl">
      <p
        data-animate
        class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent opacity-0 underline dark:no-underline"
      >
        Skills
      </p>
      <h2
        data-animate
        class="mb-16 text-balance text-3xl font-semibold tracking-tight text-foreground opacity-0 md:text-4xl"
      >
        Technologies I work with.
      </h2>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          data-animate
          class="glass group rounded-2xl p-8 opacity-0 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div class="mb-6 flex items-center gap-2.5">
            <span 
              :class="['h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-150', category.dotColor]" 
            />
            <h3 class="text-sm font-medium uppercase tracking-wider text-foreground transition-colors duration-300 group-hover:text-accent">
              {{ category.title }}
            </h3>
          </div>
          <ul class="flex flex-col gap-3">
            <li
              v-for="skill in category.skills"
              :key="skill"
              class="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-foreground"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAnimateOnIntersect } from '~/composables/useAnimateOnIntersect'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS',],
    dotColor: 'bg-pastel-pink',
  },
  {
    title: 'Frameworks',
    skills: ['Vue.js', 'Nuxt.js', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
    dotColor: 'bg-pastel-lavender',
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'NPM/Yarn/Bun'],
    dotColor: 'bg-pastel-mint',
  },
  {
    title: 'Concepts',
    skills: [
      'Responsive Design',
      'Web Accessibility',
      'Component Design',
      'Agile/Scrum',
    ],
    dotColor: 'bg-pastel-peach',
  },
]

const sectionRef = ref<HTMLElement | null>(null)

useAnimateOnIntersect(sectionRef, { threshold: 0.15, delayStep: 0.1 })
</script>