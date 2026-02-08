<template>
  <section
    ref="sectionRef"
    class="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
  >
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-pastel-pink/40 blur-[100px]"
      />
      <div
        class="absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-pastel-lavender/35 blur-[100px]"
      />
      <div
        class="absolute bottom-1/4 left-1/3 h-[350px] w-[350px] rounded-full bg-pastel-mint/30 blur-[100px]"
      />
      <div
        class="absolute -bottom-10 right-1/4 h-[300px] w-[300px] rounded-full bg-pastel-peach/30 blur-[100px]"
      />
    </div>

    <div class="relative mx-auto max-w-4xl text-center">
      <div data-animate class="mb-8 inline-flex opacity-0">
        <span
          class="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-foreground/70 shadow-sm"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-pastel-pink" />
          Front-End Web Developer
        </span>
      </div>

      <h1
        data-animate
        class="text-balance text-5xl font-semibold leading-tight tracking-tight text-accent opacity-0 md:text-7xl md:leading-tight"
      >
        Hi, I'm Fadillah
        <br />
        <span
          class="bg-foreground bg-clip-text text-transparent"
        >
          Nur Istiqomah.
        </span>
      </h1>
      <p
        data-animate
        class="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground opacity-0 md:text-lg"
      >
        I build pixel-perfect, responsive, and accessible web interfaces.
        Currently a Frontend Developer at Panglima Propertindo, based in
        Yogyakarta, Indonesia.
      </p>
      <div
        data-animate
        class="mt-10 flex items-center justify-center gap-4 opacity-0"
      >
        <a
          href="#projects"
          class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
        >
          View Projects
          <svg
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a
          href="#contact"
          class="glass inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const el = sectionRef.value
  if (!el) return
  const children = el.querySelectorAll('[data-animate]')
  children.forEach((child, i) => {
    const element = child as HTMLElement
    element.style.animationDelay = `${i * 0.15}s`
    element.classList.add('animate-fade-in-up')
  })
})
</script>
