<script setup>
import { Rocket, Code2, MessagesSquare, Layers } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import GlassCard from './GlassCard.vue'
import { useI18n } from '../i18n.js'

const why = useI18n('why')

const icons = [Rocket, Code2, MessagesSquare, Layers]
const colors = ['text-cyan', 'text-green-400', 'text-violet', 'text-amber-400']
const backgrounds = ['bg-cyan/10', 'bg-green-400/10', 'bg-violet/10', 'bg-amber-400/10']
</script>

<template>
  <section id="why" class="px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[1200px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ why.label }}
        </p>
        <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">{{ why.heading }}</h2>
      </AnimatedSection>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <AnimatedSection v-for="(card, i) in why.cards" :key="card.title" :delay="(i % 2) * 0.1">
          <GlassCard hover class="h-full p-8">
            <div
              class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl"
              :class="backgrounds[i]"
            >
              <component :is="icons[i]" :size="26" :class="colors[i]" />
            </div>
            <h3 class="font-display mb-3 text-xl font-bold leading-snug tracking-tight text-white">{{ card.title }}</h3>
            <p class="leading-relaxed text-secondary">{{ card.body }}</p>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>