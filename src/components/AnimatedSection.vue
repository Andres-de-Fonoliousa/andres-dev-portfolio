<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  delay: { type: Number, default: 0 },
  as: { type: String, default: 'div' },
})

const el = ref(null)
const visible = ref(false)
let observer

onMounted(() => {
  if (!el.value) return
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  observer.observe(el.value)
})

onBeforeUnmount(() => observer && observer.disconnect())
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="animate-section"
    :class="{ 'is-visible': visible }"
    :style="{ transitionDelay: `${delay}s` }"
  >
    <slot />
  </component>
</template>
