<script setup>
defineProps({
  title: { type: String, default: '' },
})
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-navy/10 bg-codebg shadow-lift">
    <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
      <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
      <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
      <span v-if="title" class="ms-2 font-mono text-xs text-slate-500">{{ title }}</span>
    </div>
    <div class="p-4 font-mono text-sm sm:p-6">
      <slot />
    </div>
  </div>
</template>