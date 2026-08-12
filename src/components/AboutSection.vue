<script setup>
import AnimatedSection from './AnimatedSection.vue'
import { useI18n } from '../i18n.js'

const about = useI18n('about')
</script>

<template>
  <section id="about" class="bg-bg2 px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[900px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ about.label }}
        </p>
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ about.heading }}</h2>
      </AnimatedSection>

      <AnimatedSection :delay="0.1" class="mt-10 space-y-5 text-center">
        <p class="mx-auto max-w-2xl leading-relaxed text-secondary">{{ about.p1 }}</p>
        <p class="mx-auto max-w-2xl leading-relaxed text-secondary">{{ about.p2 }}</p>
        <p class="mx-auto max-w-2xl leading-relaxed text-primary font-medium">{{ about.p3 }}</p>
      </AnimatedSection>

      <AnimatedSection :delay="0.2" class="mt-10 flex flex-wrap justify-center gap-3">
        <span
          v-for="chip in about.chips"
          :key="chip"
          class="rounded-full border border-white/10 bg-[#111118]/60 px-4 py-1.5 font-mono text-xs text-cyan"
        >
          {{ chip }}
        </span>
      </AnimatedSection>
    </div>
  </section>
</template>