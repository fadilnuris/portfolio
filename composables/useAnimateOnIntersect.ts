import type { Ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'

type AnimateOptions = {
  threshold?: number
  delayStep?: number
}

export function useAnimateOnIntersect(
  sectionRef: Ref<HTMLElement | null>,
  options: AnimateOptions = {}
) {
  const { threshold = 0.1, delayStep = 0.1 } = options
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = sectionRef.value
    if (!el) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const items = el.querySelectorAll('[data-animate]')
            items.forEach((item, i) => {
              const element = item as HTMLElement
              element.style.animationDelay = `${i * delayStep}s`
              element.classList.add('animate-fade-in-up')
            })
            observer?.disconnect()
          }
        }
      },
      { threshold }
    )

    observer.observe(el)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
