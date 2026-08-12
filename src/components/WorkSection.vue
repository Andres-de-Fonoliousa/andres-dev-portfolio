<script setup>
import { ref, computed } from 'vue'
import { Check, ExternalLink } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import { useI18n } from '../i18n.js'

const work = useI18n('work')
const active = ref(0)

const projects = computed(() => [work.value.p1, work.value.p2, work.value.p3])
const current = computed(() => projects.value[active.value])

const statusStyles = [
  'border-cyan/20 bg-cyan/10 text-cyan',
  'border-cyan/20 bg-cyan/10 text-cyan',
  'border-white/10 bg-white/5 text-muted',
]
</script>

<template>
  <section id="work" class="px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[1100px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ work.label }}
        </p>
        <h2 class="text-3xl font-bold text-white md:text-5xl">
          {{ work.heading1 }}<br class="hidden sm:block" />
          {{ work.heading2 }}
        </h2>
      </AnimatedSection>

      <AnimatedSection :delay="0.1" class="mt-10 flex flex-wrap justify-center gap-2">
        <button
          v-for="(p, i) in projects"
          :key="i"
          @click="active = i"
          class="rounded-full px-5 py-2.5 font-mono text-xs transition-all duration-300"
          :class="
            active === i
              ? 'bg-cyan font-semibold text-black shadow-glow-sm'
              : 'border border-white/10 text-secondary hover:border-cyan/40 hover:text-cyan'
          "
        >
          {{ p.title }}
        </button>
      </AnimatedSection>

      <div class="mt-10">
        <Transition name="card" mode="out-in">
          <div :key="active" class="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <AnimatedSection>
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                {{ current.tag }}
              </p>
              <h3 class="mt-3 text-2xl font-bold text-white md:text-3xl">{{ current.title }}</h3>
              <p class="mt-4 leading-relaxed text-secondary">{{ current.desc }}</p>
              <ul v-if="current.points.length" class="mt-6 space-y-2 font-mono text-sm text-secondary">
                <li v-for="point in current.points" :key="point" class="flex items-start gap-2">
                  <Check :size="16" class="mt-0.5 shrink-0 text-cyan" />
                  {{ point }}
                </li>
              </ul>
              <div class="mt-6 flex flex-wrap items-center gap-4">
                <span
                  class="inline-block rounded-full border px-3 py-1 font-mono text-xs"
                  :class="statusStyles[active]"
                >
                  {{ current.status }}
                </span>
                <a
                  v-if="current.link"
                  :href="current.href"
                  target="_blank"
                  rel="noopener"
                  class="link-underline inline-flex items-center gap-1.5 font-mono text-sm text-cyan"
                >
                  {{ current.link }}
                  <ExternalLink :size="14" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection :delay="0.15">
              <!-- PROJECT 1 VISUAL: CoreS dashboard -->
              <div v-if="active === 0" class="relative">
                <div class="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0f] shadow-card">
                  <div class="flex items-center gap-2 border-b border-white/10 bg-[#0f0f16] px-4 py-2.5">
                    <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
                    <span class="ms-2 flex-1 truncate rounded bg-white/5 px-3 py-0.5 text-center font-mono text-[11px] text-muted">
                      corex-store / admin
                    </span>
                  </div>
                  <img
                    src="/saas-dashboard.jpeg"
                    alt="CoreS admin dashboard"
                    class="h-64 w-full object-cover object-top sm:h-72"
                    loading="lazy"
                  />
                </div>
                <div
                  class="absolute -bottom-6 end-2 w-72 rounded-lg border border-white/10 bg-[#050507] p-4 font-mono text-xs text-cyan shadow-xl sm:-end-4"
                >
                  <p class="text-slate-500">// Product catalog endpoint</p>
                  <p><span class="code-kw">Route</span>::<span class="code-fn">get</span>(<span class="code-str">'/api/products'</span>,</p>
                  <p class="ps-4"><span class="code-fn">ProductController</span>::<span class="code-fn">class</span>);</p>
                </div>
              </div>

              <!-- PROJECT 2 VISUAL: Telegram chat -->
              <div v-else-if="active === 1" class="space-y-4">
                <div class="max-w-xs space-y-3">
                  <div
                    v-for="(msg, i) in work.chat"
                    :key="i"
                    class="p-4 text-sm"
                    :class="
                      msg.who === 'user'
                        ? 'ms-8 rounded-2xl rounded-br-none border border-cyan/20 bg-cyan/10 text-primary'
                        : 'rounded-2xl rounded-bl-none border border-white/10 bg-[#111118] text-secondary'
                    "
                  >
                    <span v-if="msg.mono" class="font-mono text-green-400" v-html="msg.text"></span>
                    <span v-else v-html="msg.text"></span>
                  </div>
                </div>
                <div class="w-full max-w-xs rounded-lg border border-white/10 bg-[#050507] p-4 font-mono text-xs text-slate-300 shadow-xl sm:ms-auto">
                  <p class="text-slate-500">@dp.message_handler(commands=['revenue'])</p>
                  <p><span class="code-kw">async def</span> <span class="code-fn">daily_report</span>(message: <span class="code-kw">types</span>.Message):</p>
                  <p class="ps-4">data = <span class="code-kw">await</span> <span class="code-fn">fetch_today</span>()</p>
                  <p class="ps-4"><span class="code-kw">await</span> message.<span class="code-fn">reply</span>(<span class="code-fn">format_revenue</span>(data))</p>
                </div>
              </div>

              <!-- PROJECT 3 VISUAL: 3D viewer -->
              <div v-else>
                <div class="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0f] shadow-card">
                  <div class="flex items-center gap-2 border-b border-white/10 bg-[#0f0f16] px-4 py-2.5">
                    <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
                    <span class="ms-2 flex-1 truncate rounded bg-white/5 px-3 py-0.5 text-center font-mono text-[11px] text-muted">
                      three.js + MediaPipe hand tracking
                    </span>
                  </div>
                  <div
                    class="relative flex h-64 items-center justify-center bg-gradient-to-br from-[#0d0d1a] to-[#0a0a0f] sm:h-72"
                  >
                    <div class="absolute h-24 w-24 rounded-full bg-cyan/20 blur-2xl" aria-hidden="true"></div>
                    <div class="absolute h-16 w-16 rounded-full bg-violet/20 blur-2xl" aria-hidden="true"></div>
                    <div
                      class="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-violet/30 bg-violet/10 shadow-glow-accent"
                    >
                      <p class="font-mono text-4xl text-violet">Y</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>