<script setup>
defineProps({
  hover: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="rounded-2xl border border-white/[0.06] bg-[#111118]/60 backdrop-blur-xl transition-all duration-300"
    :class="hover ? 'hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-card' : ''"
  >
    <slot />
  </div>
</template>
