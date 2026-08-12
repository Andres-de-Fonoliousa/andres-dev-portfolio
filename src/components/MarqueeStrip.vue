<script setup>
import { useI18n } from '../i18n.js'

const strip = useI18n('marquee')
</script>

<template>
  <div
    class="relative overflow-hidden border-y border-white/[0.06] bg-[#06060b] py-4"
    aria-hidden="true"
  >
    <div class="marquee-track">
      <div
        v-for="n in 2"
        :key="n"
        class="flex shrink-0 items-center gap-8 pe-8 font-mono text-xs uppercase tracking-widest text-muted"
      >
        <span v-for="t in strip" :key="t" class="flex items-center gap-8">
          {{ t }}
          <span class="text-cyan/50">/</span>
        </span>
      </div>
    </div>
  </div>
</template>