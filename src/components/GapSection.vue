<script setup>
import { Zap, Radio, TrendingDown } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import GlassCard from './GlassCard.vue'
import { useI18n } from '../i18n.js'

const gap = useI18n('gap')

const icons = [Zap, Radio, TrendingDown]
const colors = ['text-cyan', 'text-violet', 'text-red-400']
const backgrounds = ['bg-cyan/10', 'bg-violet/10', 'bg-red-400/10']
</script>

<template>
  <section id="gap" class="bg-bg2 px-4 py-24 sm:px-6 md:py-24">
    <div class="mx-auto max-w-[1200px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ gap.label }}
        </p>
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ gap.heading }}</h2>
      </AnimatedSection>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <AnimatedSection v-for="(card, i) in gap.cards" :key="card.title" :delay="i * 0.1">
          <GlassCard hover class="h-full p-8">
            <div
              class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl"
              :class="backgrounds[i]"
            >
              <component :is="icons[i]" :size="28" :class="colors[i]" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">{{ card.title }}</h3>
            <p class="leading-relaxed text-secondary">{{ card.body }}</p>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>
