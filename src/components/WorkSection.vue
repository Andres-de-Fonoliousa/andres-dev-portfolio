<script setup>
import { ref, computed } from 'vue'
import { Check, ExternalLink } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import { useI18n } from '../i18n.js'

const work = useI18n('work')
const active = ref(0)

const projects = computed(() => [work.value.p1, work.value.p2])
const current = computed(() => projects.value[active.value])

const statusStyles = [
  'border-lime/30 bg-lime/10 text-[#5c7f0a]',
  'border-indigo/30 bg-indigo/10 text-indigo',
]
</script>

<template>
  <section id="work" class="hairline-top relative overflow-hidden bg-mist px-4 py-24 sm:px-6">
    <div class="spotlight" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-[1100px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-indigo">
          {{ work.label }}
        </p>
        <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
          {{ work.heading1 }}<br class="hidden sm:block" />
          {{ work.heading2 }}
        </h2>
      </AnimatedSection>

      <AnimatedSection :delay="0.1" class="mt-10 flex flex-wrap justify-center gap-2">
        <button
          v-for="(p, i) in projects"
          :key="i"
          @click="active = i"
          class="rounded-lg border px-5 py-2.5 font-mono text-xs transition-all duration-300"
          :class="
            active === i
              ? 'border-indigo bg-indigo font-semibold text-white shadow-card'
              : 'border-line bg-white text-secondary hover:border-indigo/40 hover:text-indigo'
          "
        >
          {{ p.title }}
        </button>
      </AnimatedSection>

      <div class="mt-10">
        <Transition name="card" mode="out-in">
          <div :key="active" class="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <AnimatedSection>
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-indigo">
                {{ current.tag }}
              </p>
              <h3 class="font-display mt-3 text-2xl font-bold leading-snug tracking-tight text-primary md:text-3xl">{{ current.title }}</h3>
              <p class="mt-4 leading-relaxed text-secondary">{{ current.desc }}</p>
              <ul v-if="current.points.length" class="mt-6 space-y-2 font-mono text-sm text-secondary">
                <li v-for="point in current.points" :key="point" class="flex items-start gap-2">
                  <Check :size="16" class="mt-0.5 shrink-0 text-lime" />
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
                  class="link-underline inline-flex items-center gap-1.5 font-mono text-sm text-indigo"
                >
                  {{ current.link }}
                  <ExternalLink :size="14" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection :delay="0.15">
              <!-- PROJECT 1 VISUAL: CoreS dashboard -->
              <div v-if="active === 0" class="relative">
                <div class="absolute -inset-6 rounded-3xl bg-gradient-to-br from-indigo/15 via-indigo/5 to-transparent blur-xl" aria-hidden="true"></div>
                <div class="bento overflow-hidden rounded-xl border border-line shadow-card">
                  <div class="flex items-center gap-2 border-b border-line bg-fog px-4 py-2.5">
                    <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
                    <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
                    <span class="ms-2 flex-1 truncate rounded bg-white px-3 py-0.5 text-center font-mono text-[11px] text-muted">
                      corex-store / admin
                    </span>
                  </div>
                  <img
                    src="/cores-dashboard.png"
                    alt="CoreS admin dashboard"
                    class="h-64 w-full object-cover object-top sm:h-72"
                    loading="lazy"
                  />
                </div>
                <div
                  class="absolute -bottom-6 end-2 w-72 rounded-lg border border-line bg-codebg p-4 font-mono text-xs text-slate-200 shadow-card sm:-end-4"
                >
                  <p class="text-slate-500">// Product catalog endpoint</p>
                  <p><span class="code-kw">Route</span>::<span class="code-fn">get</span>(<span class="code-str">'/api/products'</span>,</p>
                  <p class="ps-4"><span class="code-fn">ProductController</span>::<span class="code-fn">class</span>);</p>
                </div>
              </div>

              <!-- PROJECT 2 VISUAL: Telegram chat -->
              <div v-else-if="active === 1" class="relative">
                <div class="absolute -inset-6 rounded-3xl bg-gradient-to-br from-lime/15 via-lime/5 to-transparent blur-xl" aria-hidden="true"></div>
                <div class="space-y-4">
                <div class="max-w-xs space-y-3">
                  <div
                    v-for="(msg, i) in work.chat"
                    :key="i"
                    class="p-4 text-sm"
                    :class="
                      msg.who === 'user'
                        ? 'ms-8 rounded-2xl rounded-br-none border border-indigo/30 bg-white text-primary shadow-card'
                        : 'rounded-2xl rounded-bl-none border border-line bg-white text-secondary shadow-card'
                    "
                  >
                    <span v-if="msg.mono" class="font-mono text-lime" v-html="msg.text"></span>
                    <span v-else v-html="msg.text"></span>
                  </div>
                </div>
                <div class="w-full max-w-xs rounded-lg border border-line bg-codebg p-4 font-mono text-xs text-slate-300 shadow-card sm:ms-auto">
                  <p class="text-slate-500">@dp.message_handler(commands=['revenue'])</p>
                  <p><span class="code-kw">async def</span> <span class="code-fn">daily_report</span>(message: <span class="code-kw">types</span>.Message):</p>
                  <p class="ps-4">data = <span class="code-kw">await</span> <span class="code-fn">fetch_today</span>()</p>
                  <p class="ps-4"><span class="code-kw">await</span> message.<span class="code-fn">reply</span>(<span class="code-fn">format_revenue</span>(data))</p>
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