<script setup>
import { ArrowRight } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import GlassCard from './GlassCard.vue'
import { useI18n } from '../i18n.js'

const about = useI18n('about')
</script>

<template>
  <section id="about" class="bg-bg2 px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[1000px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ about.label }}
        </p>
        <h2 class="text-3xl font-bold text-white md:text-5xl">{{ about.heading }}</h2>
        <p class="mx-auto mt-5 max-w-xl leading-relaxed text-secondary">{{ about.p1 }}</p>
      </AnimatedSection>

      <AnimatedSection :delay="0.1" class="mt-12">
        <GlassCard class="p-8 sm:p-10">
          <!-- Desktop: horizontal flow -->
          <div class="hidden items-center justify-center gap-3 md:flex">
            <template v-for="(node, i) in about.diagram" :key="node.name">
              <div
                class="diagram-node rounded-xl border border-white/10 bg-[#0a0a0f] px-5 py-4 text-center"
                style="min-width: 148px"
              >
                <p class="font-mono text-sm font-medium text-primary">{{ node.name }}</p>
                <p class="mt-1 text-xs text-muted">{{ node.note }}</p>
              </div>
              <ArrowRight
                v-if="i < about.diagram.length - 1"
                :size="18"
                class="shrink-0 text-cyan/40 rtl:rotate-180"
              />
            </template>
          </div>

          <!-- Mobile: vertical flow -->
          <div class="flex flex-col items-center gap-3 md:hidden">
            <template v-for="(node, i) in about.diagram" :key="node.name">
              <div
                class="diagram-node w-full max-w-[260px] rounded-xl border border-white/10 bg-[#0a0a0f] px-5 py-4 text-center"
              >
                <p class="font-mono text-sm font-medium text-primary">{{ node.name }}</p>
                <p class="mt-1 text-xs text-muted">{{ node.note }}</p>
              </div>
              <ArrowRight
                v-if="i < about.diagram.length - 1"
                :size="18"
                class="rotate-90 text-cyan/40"
              />
            </template>
          </div>
        </GlassCard>
      </AnimatedSection>

      <AnimatedSection :delay="0.2" class="mt-10 text-center">
        <p class="mx-auto max-w-2xl font-medium leading-relaxed text-primary">{{ about.p3 }}</p>
      </AnimatedSection>

      <AnimatedSection :delay="0.25" class="mt-8 flex flex-wrap justify-center gap-3">
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