<script setup>
import { Briefcase, Building2, Check } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import GlassCard from './GlassCard.vue'
import { useI18n } from '../i18n.js'

const forData = useI18n('for')
</script>

<template>
  <section id="for" class="px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[1200px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ forData.label }}
        </p>
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ forData.heading }}</h2>
      </AnimatedSection>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <AnimatedSection>
          <GlassCard class="h-full border-t-2 border-t-cyan p-10">
            <div
              class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10"
            >
              <Briefcase :size="28" class="text-cyan" />
            </div>
            <h3 class="mb-4 text-2xl font-bold text-white">{{ forData.project.title }}</h3>
            <p class="leading-relaxed text-secondary">{{ forData.project.body }}</p>
            <ul class="mt-6 space-y-3 text-primary">
              <li
                v-for="bullet in forData.project.bullets"
                :key="bullet"
                class="flex items-start gap-2.5"
              >
                <Check :size="18" class="mt-0.5 shrink-0 text-cyan" />
                {{ bullet }}
              </li>
            </ul>
            <div class="mt-8">
              <a
                href="mailto:hello@yourdomain.dev?subject=Project%20Sprint%20Inquiry"
                class="link-underline font-mono text-sm text-cyan"
              >
                {{ forData.project.cta }} →
              </a>
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection :delay="0.1">
          <GlassCard class="h-full border-t-2 border-t-violet p-10">
            <div
              class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10"
            >
              <Building2 :size="28" class="text-violet" />
            </div>
            <h3 class="mb-4 text-2xl font-bold text-white">{{ forData.fulltime.title }}</h3>
            <p class="leading-relaxed text-secondary">{{ forData.fulltime.body }}</p>
            <ul class="mt-6 space-y-3 text-primary">
              <li
                v-for="bullet in forData.fulltime.bullets"
                :key="bullet"
                class="flex items-start gap-2.5"
              >
                <Check :size="18" class="mt-0.5 shrink-0 text-violet" />
                {{ bullet }}
              </li>
            </ul>
            <div class="mt-8">
              <a
                href="mailto:hello@yourdomain.dev?subject=Full-Time%20Role%20Inquiry"
                class="link-underline font-mono text-sm text-violet"
              >
                {{ forData.fulltime.cta }} →
              </a>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>
