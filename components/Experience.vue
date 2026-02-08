<template>
  <section id="experience" ref="sectionRef" class="relative px-6 py-32">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full bg-pastel-lavender/25 blur-[100px]"
      />
      <div
        class="absolute -left-40 bottom-1/4 h-[300px] w-[300px] rounded-full bg-pastel-mint/20 blur-[100px]"
      />
    </div>

    <div class="relative mx-auto max-w-6xl">
      <p
        data-animate
        class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent opacity-0 underline dark:no-underline">
        Experience
      </p>
      <h2
        data-animate
        class="mb-16 text-balance text-3xl font-semibold tracking-tight text-foreground opacity-0 md:text-4xl"
      >
        Where I've worked.
      </h2>

      <div class="flex flex-col gap-5">
        <div
          v-for="exp in experiences"
          :key="exp.role + exp.company"
          data-animate
          class="glass rounded-2xl p-8 opacity-0 shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <div class="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div class="flex-1">
              <div class="flex items-center gap-3">
                <span
                  :class="['h-2.5 w-2.5 shrink-0 rounded-full', exp.dotColor]"
                />
                <h3 class="text-lg font-medium text-foreground">
                  {{ exp.role }}
                </h3>
              </div>
              <p class="mt-1 ml-[22px] text-sm text-accent">
                {{ exp.company }}
              </p>
              <p
                class="mt-4 ml-[22px] max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground"
              >
                {{ exp.description }}
              </p>
              <div class="mt-4 ml-[22px] flex flex-wrap gap-2">
                <span
                  v-for="(tag, index) in exp.tags"
                  :key="tag"
                  :class="tagColors[index % tagColors.length]"
                  class="rounded-full px-3 py-1 text-xs text-foreground/80"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="shrink-0 text-right">
              <p class="text-sm text-muted-foreground">{{ exp.period }}</p>
              <p class="mt-1 text-xs text-muted-foreground/60">
                {{ exp.location }}
              </p>
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

const tagColors = [
  'bg-pastel-peach/60',
  'bg-pastel-mint/60',
  'bg-pastel-sky/60',
  'bg-pastel-lavender/60',
  'bg-pastel-pink/60',
]

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Panglima Propertindo',
    location: 'Yogyakarta, Indonesia',
    period: 'May 2024 — Present',
    description:
      'Building and maintaining front-end features for a real estate company. Developing responsive web interfaces, property listing pages, and interactive UI components for internal and client-facing products.',
    tags: ['JavaScript', 'Vue.js', 'Tailwind CSS', 'REST API'],
    dotColor: 'bg-pastel-pink',
  },
  {
    role: 'Front-End JavaScript — MSIB',
    company: 'Binar Academy',
    location: 'Jakarta, Indonesia',
    period: 'Aug 2022 — Dec 2022',
    description:
      'Intensive front-end development bootcamp through the Kampus Merdeka (MSIB) program. Built multiple web projects focusing on JavaScript, modern frameworks, and best practices in front-end engineering.',
    tags: ['JavaScript', 'React', 'Node.js', 'Git'],
    dotColor: 'bg-pastel-lavender',
  },
  {
    role: 'Bachelor of Informatics',
    company: 'Universitas AMIKOM Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    period: '2019 — 2023',
    description:
      'Studied informatics with a focus on web development and software engineering. Gained foundational knowledge in algorithms, databases, and front-end technologies.',
    tags: ['Informatics', 'Web Development', 'Algorithms'],
    dotColor: 'bg-pastel-mint',
  },
]

const sectionRef = ref<HTMLElement | null>(null)

useAnimateOnIntersect(sectionRef, { threshold: 0.1, delayStep: 0.1 })
</script>