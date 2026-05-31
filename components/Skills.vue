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

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          data-animate
          class="glass group relative overflow-hidden rounded-3xl border border-border/40 p-8 opacity-0 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-border/80 hover:shadow-2xl hover:shadow-accent/10"
        >
          <!-- Subtle background gradient on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          
          <div class="relative z-10">
            <div class="mb-6 flex items-center gap-3">
              <span 
                :class="['h-2.5 w-2.5 rounded-full shadow-sm transition-all duration-500 group-hover:scale-[1.5]', category.dotColor]" 
              />
              <h3 class="text-sm font-semibold uppercase tracking-widest text-foreground transition-colors duration-300 group-hover:text-accent">
                {{ category.title }}
              </h3>
            </div>
            
            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="skill in category.skills"
                :key="skill"
                class="cursor-default rounded-full border border-border/50 bg-background/50 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-foreground/[0.03] hover:text-foreground hover:shadow-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>
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