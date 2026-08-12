<script setup>
import AnimatedSection from './AnimatedSection.vue'
import TerminalWindow from './TerminalWindow.vue'
import { useI18n } from '../i18n.js'

const hero = useI18n('hero')
</script>

<template>
  <section id="hero" class="px-4 pt-32 pb-24 text-center sm:px-6 md:pt-40">
    <AnimatedSection class="mx-auto max-w-[900px]">
      <p class="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
        {{ hero.eyebrow }}
      </p>

      <h1 class="text-4xl font-bold leading-tight text-white md:text-6xl">
        <template v-for="(line, i) in hero.lines" :key="i">
          {{ line }}<br />
        </template>
        <span class="cursor-blink">_</span>
      </h1>

      <p class="mx-auto mt-6 max-w-[640px] leading-relaxed text-secondary">
        {{ hero.sub }}
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="mailto:hello@yourdomain.dev"
          class="w-full rounded-full bg-cyan px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300 hover:shadow-glow-sm sm:w-auto"
        >
          {{ hero.cta1 }}
        </a>
        <a
          href="https://github.com/YOURUSERNAME"
          target="_blank"
          rel="noopener"
          class="w-full rounded-full border border-white/10 px-8 py-4 text-white transition-all duration-300 hover:border-cyan/50 hover:text-cyan sm:w-auto"
        >
          {{ hero.cta2 }}
        </a>
      </div>

      <p class="mt-6 font-mono text-xs text-muted">{{ hero.meta }}</p>
    </AnimatedSection>

    <AnimatedSection :delay="0.15" class="mx-auto mt-12 max-w-lg text-start">
      <TerminalWindow title="~/projects">
        <div v-for="(line, i) in hero.terminal" :key="i" class="text-sm">
          <p v-if="line.text && !line.name" class="text-slate-400" v-html="line.text"></p>
          <p v-else-if="line.name" class="flex flex-wrap items-center gap-x-2">
            <span class="text-cyan">{{ line.name }}</span>
            <span class="text-slate-500">{{ line.note }}</span>
          </p>
        </div>
      </TerminalWindow>
    </AnimatedSection>
  </section>
</template>