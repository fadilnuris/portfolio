<template>
  <footer id="contact" ref="sectionRef" class="relative px-6 pb-10 pt-32">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-pastel-pink/30 blur-[100px]"
      />
      <div
        class="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-pastel-lavender/25 blur-[100px]"
      />
      <div
        class="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-pastel-mint/20 blur-[100px]"
      />
      <div
        class="absolute -right-10 bottom-1/4 h-[250px] w-[250px] rounded-full bg-pastel-peach/25 blur-[100px]"
      />
      <div
        class="absolute left-1/2 top-0 h-[200px] w-[200px] rounded-full bg-pastel-sky/20 blur-[80px]"
      />
    </div>

    <div class="relative mx-auto max-w-6xl">
      <div class="glass overflow-hidden rounded-3xl p-10 shadow-sm md:p-16">
        <div class="absolute left-0 right-0 top-0 flex h-1">
          <div class="flex-1 bg-pastel-pink" />
          <div class="flex-1 bg-pastel-lavender" />
          <div class="flex-1 bg-pastel-mint" />
          <div class="flex-1 bg-pastel-peach" />
          <div class="flex-1 bg-pastel-sky" />
        </div>

        <div class="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p
              data-animate
              class="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent opacity-0 underline dark:no-underline"
            >
              Contact
            </p>
            <h2
              data-animate
              class="text-balance text-3xl font-semibold tracking-tight text-foreground opacity-0 md:text-4xl"
            >
              Let's work
              <span
                class="bg-accent bg-clip-text text-transparent"
              >
                together.
              </span>
            </h2>
            <p
              data-animate
              class="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground opacity-0"
            >
              Interested in collaborating or have a front-end project in mind?
              I'd love to hear from you. Let's build something great together.
            </p>
            <a
              data-animate
              href="mailto:fadilnuris.work@gmail.com"
              class="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground opacity-0 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              Send a Message
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>

          <div class="flex flex-col justify-between gap-10">
            <div>
              <p
                data-animate
                class="mb-5 text-sm font-medium uppercase tracking-wider text-foreground opacity-0"
              >
                Connect
              </p>
              <div class="flex gap-3">
                <a
                  v-for="social in socials"
                  :key="social.label"
                  :href="social.href"
                  data-animate
                  :class="[
                    'glass flex h-12 w-12 items-center justify-center rounded-2xl text-muted-foreground opacity-0 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105',
                    social.color,
                  ]"
                  :aria-label="social.label"
                >
                  <component :is="social.icon" class="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <p
                data-animate
                class="mb-4 text-sm font-medium uppercase tracking-wider text-foreground opacity-0"
              >
                Quick Links
              </p>
              <div class="flex flex-wrap gap-2">
                <a
                  v-for="link in quickLinks"
                  :key="link.label"
                  :href="link.href"
                  data-animate
                  class="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground opacity-0 transition-all duration-300 hover:bg-accent/20 hover:text-foreground dark:bg-accent/20 dark:hover:bg-accent/30"
                >
                  {{ link.label }}
                </a>
              </div>
            </div>

            <div data-animate class="opacity-0">
              <p class="text-sm text-muted-foreground">
                fadilnuris.work@gmail.com              
              </p>
              <p class="mt-1 text-sm text-muted-foreground">
                Yogyakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-animate
        class="mt-10 flex flex-col items-center justify-between gap-4 px-4 opacity-0 md:flex-row"
      >
        <p class="text-xs text-muted-foreground">
          © {{ year }} Fadillah Nur Istiqomah. All rights reserved.
        </p>
        <div class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-pastel-pink" />
          <span class="h-1.5 w-1.5 rounded-full bg-pastel-lavender" />
          <span class="h-1.5 w-1.5 rounded-full bg-pastel-mint" />
          <span class="h-1.5 w-1.5 rounded-full bg-pastel-peach" />
          <span class="h-1.5 w-1.5 rounded-full bg-pastel-sky" />
        </div>
        <p class="text-xs text-muted-foreground">Designed & built with care.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { useAnimateOnIntersect } from '~/composables/useAnimateOnIntersect'

const sectionRef = ref<HTMLElement | null>(null)

useAnimateOnIntersect(sectionRef, { threshold: 0.15, delayStep: 0.1 })

const year = new Date().getFullYear()

const LinkedInIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
])

const GitHubIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
  h('path', { d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' })
])

const EmailIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' })
])

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fadillah-nur-istiqomah/',
    color: 'bg-pastel-sky dark:bg-pastel-sky hover:text-sky-700 dark:hover:text-sky-300',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/fadilnuris',
    color: 'bg-pastel-lavender dark:bg-pastel-lavender hover:text-violet-700 dark:hover:text-violet-300',
    icon: GitHubIcon,
  },
  {
    label: 'Email',
    href: 'mailto:fadilnuris.work@gmail.com',
    color: 'bg-pastel-peach dark:bg-pastel-peach hover:text-orange-700 dark:hover:text-orange-300',
    icon: EmailIcon,
  },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]
</script>
