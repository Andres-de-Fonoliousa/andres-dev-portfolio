<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import { useI18n } from '../i18n.js'

const faq = useI18n('faq')
const open = ref(0)
</script>

<template>
  <section id="faq" class="px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[800px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ faq.label }}
        </p>
        <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">{{ faq.heading }}</h2>
      </AnimatedSection>

      <div class="mt-12 space-y-3">
        <AnimatedSection
          v-for="(item, i) in faq.items"
          :key="i"
          :delay="i * 0.05"
          class="rounded-xl border border-white/[0.06] bg-[#111118]/40 backdrop-blur-xl"
          :class="{ 'faq-open': open === i }"
        >
          <button
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
            :class="open === i ? 'text-cyan' : 'text-primary'"
            @click="open = open === i ? -1 : i"
          >
            <span class="font-semibold">{{ item.q }}</span>
            <Plus :size="18" class="faq-icon shrink-0 text-muted" />
          </button>
          <div class="faq-a">
            <div>
              <p class="px-6 pb-5 leading-relaxed text-secondary">{{ item.a }}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>
