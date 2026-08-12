<script setup>
defineProps({
  hover: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="rounded-lg border border-line bg-white shadow-card transition-all duration-300"
    :class="hover ? 'hover:-translate-y-1 hover:border-indigo/40 hover:shadow-lift' : ''"
  >
    <slot />
  </div>
</template>