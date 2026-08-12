<script setup>
import { Rocket, Code2, MessagesSquare, Layers } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import GlassCard from './GlassCard.vue'
import { useI18n } from '../i18n.js'

const why = useI18n('why')

const icons = [Rocket, Code2, MessagesSquare, Layers]
const colors = ['text-indigo', 'text-lime', 'text-indigo-deep', 'text-[#2d9cdb]']
const backgrounds = ['bg-indigo/10', 'bg-lime/10', 'bg-indigo/10', 'bg-[#2d9cdb]/10']
</script>

<template>
  <section id="why" class="relative overflow-hidden px-4 py-24 sm:px-6">
    <div class="spotlight" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-[1200px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-indigo">
          {{ why.label }}
        </p>
        <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">{{ why.heading }}</h2>
      </AnimatedSection>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <AnimatedSection v-for="(card, i) in why.cards" :key="card.title" :delay="(i % 2) * 0.1">
          <GlassCard hover class="bento h-full p-8">
            <div
              class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl"
              :class="backgrounds[i]"
            >
              <component :is="icons[i]" :size="26" :class="colors[i]" />
            </div>
            <h3 class="font-display mb-3 text-xl font-bold leading-snug tracking-tight text-primary">{{ card.title }}</h3>
            <p class="leading-relaxed text-secondary">{{ card.body }}</p>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>