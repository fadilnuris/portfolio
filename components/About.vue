<template>
  <section id="about" ref="sectionRef" class="px-6 py-32">
    <div class="mx-auto max-w-6xl">
      <div>
        <p
          data-animate
          class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent opacity-0 underline dark:no-underline"
        >
          About
        </p>
         <h2
          data-animate
          class="mb-16 text-balance text-3xl font-semibold tracking-tight text-foreground opacity-0 md:text-4xl"
        >
          Who I Am.
        </h2>
        <div class="grid gap-5 md:grid-cols-2 md:gap-2">
          <img
            src="/images/my_photo.jpeg"
            alt="My Photo"
            class="h-[500px] w-[500px] object-cover transition-transform duration-700 group-hover:scale-105 rounded-md"
            loading="lazy"
          />
          <div class="flex flex-col gap-6">
            <p
              data-animate
              class="text-pretty leading-relaxed text-muted-foreground opacity-0"
            >
              I'm a
              <span class="font-medium text-foreground">Bachelor of Informatics</span>
              graduate from Universitas AMIKOM Yogyakarta. I'm extremely
              motivated to constantly develop my skills and grow professionally,
              with a deep interest in
              <span class="font-medium text-foreground">front-end web development</span>
              and creating polished user experiences.
            </p>
            <p
              data-animate
              class="text-pretty leading-relaxed text-muted-foreground opacity-0"
            >
              I've gained hands-on experience through my current role as a
              <span class="font-medium text-foreground">
                Frontend Developer at Panglima Propertindo
              </span>
              and my training at
              <span class="font-medium text-foreground">
                Binar Academy (MSIB)
              </span>
              where I specialized in Front-End JavaScript. With over 2 years of
              professional experience, I focus on writing clean, maintainable code
              and building responsive, accessible interfaces.
            </p>
            <div data-animate class="mt-4 flex flex-wrap gap-3 opacity-0">
              <span
                v-for="tag in tags"
                :key="tag.label"
                :class="[
                  'rounded-full px-3 py-1 text-xs font-medium text-foreground/80',
                  tag.color,
                ]"
              >
                {{ tag.label }}
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

const tags = [
  { label: 'JavaScript', color: 'bg-pastel-peach/60' },
  { label: 'Vue.js', color: 'bg-pastel-mint/60' },
  { label: 'React', color: 'bg-pastel-sky/60' },
  { label: 'HTML/CSS', color: 'bg-pastel-lavender/60' },
  { label: 'Tailwind CSS', color: 'bg-pastel-pink/60' },
  { label: 'Git', color: 'bg-pastel-peach/60' },
  { label: 'Shadcn', color: 'bg-pastel-mint/60' },
]

const sectionRef = ref<HTMLElement | null>(null)

useAnimateOnIntersect(sectionRef, { threshold: 0.2, delayStep: 0.12 })
</script>
