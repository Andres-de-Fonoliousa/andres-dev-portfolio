<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import GlassCard from './GlassCard.vue'
import { useI18n } from '../i18n.js'

const faq = useI18n('faq')
const open = ref(0)
</script>

<template>
  <section id="faq" class="relative overflow-hidden px-4 pb-32 pt-24 sm:px-6">
    <div class="spotlight" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-[800px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-indigo">
          {{ faq.label }}
        </p>
        <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">{{ faq.heading }}</h2>
      </AnimatedSection>

      <div class="mt-12 space-y-3">
        <AnimatedSection
          v-for="(item, i) in faq.items"
          :key="i"
          :delay="i * 0.05"
        >
          <GlassCard
            class="overflow-hidden"
            :class="{ 'faq-open': open === i }"
          >
            <button
              class="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
              :class="open === i ? 'text-indigo' : 'text-primary'"
              @click="open = open === i ? -1 : i"
            >
              <span class="font-semibold">{{ item.q }}</span>
              <Plus :size="18" class="faq-icon shrink-0 text-indigo" />
            </button>
            <div class="faq-a">
              <div>
                <p class="px-6 pb-5 leading-relaxed text-secondary">{{ item.a }}</p>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>