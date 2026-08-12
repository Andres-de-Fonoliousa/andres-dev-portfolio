<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import AnimatedSection from './AnimatedSection.vue'
import TerminalWindow from './TerminalWindow.vue'
import { useI18n } from '../i18n.js'

const hero = useI18n('hero')

const shown = ref([])
const current = ref('')
const typing = ref(false)
let timers = []

const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function buildLines() {
  const lines = [{ kind: 'cmd', text: '$ ls ~/repos' }]
  hero.value.terminal.forEach((l) => {
    if (l.name) lines.push({ kind: 'repo', name: l.name, note: l.note })
  })
  return lines
}

function typeLoop() {
  shown.value = []
  const lines = buildLines()
  if (reduceMotion) {
    shown.value = lines
    typing.value = false
    return
  }
  typeLine(lines, 0)
}

function typeLine(lines, i) {
  if (i >= lines.length) {
    timers.push(setTimeout(typeLoop, 9500))
    return
  }
  typing.value = true
  let chars = ''
  const speed = i === 0 ? 95 : 75
  const step = () => {
    chars = lines[i].kind === 'cmd' ? '$ ls ~/repos'.slice(0, chars.length + 1) : chars + lines[i].name[chars.length]
    current.value = chars
    if (chars.length < (lines[i].kind === 'cmd' ? '$ ls ~/repos'.length : lines[i].name.length)) {
      timers.push(setTimeout(step, speed))
    } else {
      shown.value.push(lines[i])
      timers.push(setTimeout(() => typeLine(lines, i + 1), i === 0 ? 800 : 400))
    }
  }
  step()
}

onMounted(typeLoop)
onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<template>
  <section id="hero" class="relative overflow-hidden px-4 pb-32 pt-32 text-center sm:px-6 md:pt-40">
    <div class="absolute inset-0 aurora" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <picture>
        <source srcset="/hero-wave-desktop.png" media="(min-width: 768px)" />
        <img
          src="/hero-wave-mobile.png"
          alt=""
          class="h-full w-full object-cover object-top opacity-70"
          fetchpriority="low"
        />
      </picture>
    </div>

    <AnimatedSection class="relative mx-auto max-w-[860px]">
      <p class="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-indigo shadow-card backdrop-blur-sm">
        <span class="h-1.5 w-1.5 rounded-full bg-lime"></span>
        {{ hero.eyebrow }}
      </p>

      <h1 class="font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
        <template v-for="(line, i) in hero.lines" :key="i">
          {{ line }}<br />
        </template>
        <span class="cursor-blink">_</span>
      </h1>

      <p class="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-secondary">
        {{ hero.sub }}
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="mailto:astroid198@gmail.com"
          class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-8 py-4 font-semibold text-white shadow-btn transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo hover:shadow-lift sm:w-auto"
        >
          {{ hero.cta1 }}
        </a>
        <a
          href="https://github.com/Andres-de-Fonoliousa"
          target="_blank"
          rel="noopener"
          class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-white px-8 py-4 font-semibold text-primary shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo/50 hover:shadow-lift sm:w-auto"
        >
          {{ hero.cta2 }}
        </a>
      </div>

      <p class="mt-6 font-mono text-xs tabular-nums tracking-wide text-muted">{{ hero.meta }}</p>
    </AnimatedSection>

    <AnimatedSection :delay="0.1" class="relative mx-auto mt-14 max-w-2xl text-start">
      <TerminalWindow title="~/projects">
        <div class="h-40 space-y-1 overflow-hidden font-mono text-sm">
          <template v-for="(line, i) in shown" :key="i">
            <p v-if="line.kind === 'cmd'" class="text-slate-400">
              <span class="code-kw">$</span>{{ line.text.slice(1) }}
            </p>
            <p v-else class="flex items-baseline gap-x-2 overflow-hidden whitespace-nowrap">
              <span class="shrink-0 text-sky-300">{{ line.name }}</span>
              <span class="truncate text-slate-500">{{ line.note }}</span>
            </p>
          </template>
          <p v-if="typing || !shown.length" class="text-slate-300">
            <span v-if="shown.length || current" class="code-kw">$ </span>{{ current }}<span class="type-cursor"></span>
          </p>
        </div>
      </TerminalWindow>
    </AnimatedSection>

    <div class="hero-wave-wrap" aria-hidden="true">
      <svg class="hero-wave" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
        <path class="point" d="M0 22 C 80 14 160 30 240 22 S 400 10 480 22 S 640 34 720 22 S 880 12 960 22 S 1120 34 1200 22" />
        <path d="M0 42 C 100 32 200 52 300 42 S 500 30 600 42 S 800 54 900 42 S 1100 30 1200 42" />
        <path d="M0 62 C 120 54 240 72 360 62 S 600 48 720 62 S 960 76 1080 62 S 1200 56 1300 62" />
        <path d="M0 84 C 90 76 180 92 270 84 S 450 74 540 84 S 720 94 810 84 S 990 74 1080 84 S 1200 90 1300 84" />
      </svg>
    </div>
  </section>
</template>