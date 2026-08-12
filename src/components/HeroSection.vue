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
    timers.push(setTimeout(typeLoop, 2800))
    return
  }
  typing.value = true
  let chars = ''
  const speed = i === 0 ? 34 : 15
  const step = () => {
    chars = lines[i].kind === 'cmd' ? '$ ls ~/repos'.slice(0, chars.length + 1) : chars + lines[i].name[chars.length]
    current.value = chars
    if (chars.length < (lines[i].kind === 'cmd' ? '$ ls ~/repos'.length : lines[i].name.length)) {
      timers.push(setTimeout(step, speed))
    } else {
      shown.value.push(lines[i])
      timers.push(setTimeout(() => typeLine(lines, i + 1), i === 0 ? 420 : 150))
    }
  }
  step()
}

onMounted(typeLoop)
onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<template>
  <section id="hero" class="px-4 pt-32 pb-24 text-center sm:px-6 md:pt-40">
    <AnimatedSection class="mx-auto max-w-[900px]">
      <p class="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
        {{ hero.eyebrow }}
      </p>

      <h1 class="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
        <div class="space-y-1 font-mono text-sm">
          <template v-for="(line, i) in shown" :key="i">
            <p v-if="line.kind === 'cmd'" class="text-slate-400">
              <span class="code-kw">$</span>{{ line.text.slice(1) }}
            </p>
            <p v-else class="flex flex-wrap items-baseline gap-x-2">
              <span class="text-cyan">{{ line.name }}</span>
              <span class="text-slate-500">{{ line.note }}</span>
            </p>
          </template>
          <p v-if="typing || !shown.length" class="text-slate-300">
            <span v-if="shown.length || current" class="code-kw">$ </span>{{ current }}<span class="type-cursor"></span>
          </p>
        </div>
      </TerminalWindow>
    </AnimatedSection>
  </section>
</template>