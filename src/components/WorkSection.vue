<script setup>
import { Check, ExternalLink } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import { useI18n } from '../i18n.js'

const work = useI18n('work')

const statusStyles = [
  'border-cyan/20 bg-cyan/10 text-cyan',
  'border-cyan/20 bg-cyan/10 text-cyan',
  'border-white/10 bg-white/5 text-muted',
]
</script>

<template>
  <section id="work" class="px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[1200px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ work.label }}
        </p>
        <h2 class="text-3xl font-bold text-white md:text-4xl">
          {{ work.heading1 }}<br class="hidden sm:block" />
          {{ work.heading2 }}
        </h2>
      </AnimatedSection>

      <!-- PROJECT 1: CoreS -->
      <div class="mt-16 grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <AnimatedSection>
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyan">{{ work.p1.tag }}</p>
          <h3 class="mt-3 text-2xl font-bold text-white md:text-3xl">{{ work.p1.title }}</h3>
          <p class="mt-4 leading-relaxed text-secondary">{{ work.p1.desc }}</p>
          <ul class="mt-6 space-y-2 font-mono text-sm text-secondary">
            <li v-for="point in work.p1.points" :key="point" class="flex items-start gap-2">
              <Check :size="16" class="mt-0.5 shrink-0 text-cyan" />
              {{ point }}
            </li>
          </ul>
          <div class="mt-6 flex flex-wrap items-center gap-4">
            <span
              class="inline-block rounded-full border px-3 py-1 font-mono text-xs"
              :class="statusStyles[0]"
            >
              {{ work.p1.status }}
            </span>
            <a
              :href="work.p1.href"
              target="_blank"
              rel="noopener"
              class="link-underline inline-flex items-center gap-1.5 font-mono text-sm text-cyan"
            >
              {{ work.p1.link }}
              <ExternalLink :size="14" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection :delay="0.15">
          <div class="relative">
            <div class="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0f] shadow-card">
              <div class="flex items-center gap-2 border-b border-white/10 bg-[#0f0f16] px-4 py-2.5">
                <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
                <span class="ms-2 flex-1 truncate rounded bg-white/5 px-3 py-0.5 text-center font-mono text-[11px] text-muted">
                  corexgaming.duckdns.org
                </span>
              </div>
              <img
                src="/saas-dashboard.jpeg"
                alt="CoreS e-commerce admin dashboard"
                class="h-64 w-full object-cover object-top sm:h-72"
                loading="lazy"
              />
            </div>
            <div
              class="absolute -bottom-6 end-2 w-72 rounded-lg border border-white/10 bg-[#050507] p-4 font-mono text-xs text-cyan shadow-xl sm:-end-4"
            >
              <p class="text-slate-500">// Route: dispatch whether supported</p>
              <p><span class="code-kw">Route</span>::<span class="code-fn">get</span>(<span class="code-str">'/api/products'</span>,</p>
              <p class="ps-4"><span class="code-fn">ProductController</span>::<span class="code-fn">class</span>);</p>
              <p class="mt-2 text-green-400">200 OK — serving live requests</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <!-- PROJECT 2: Telegram bot -->
      <div class="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <AnimatedSection class="md:order-2">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyan">{{ work.p2.tag }}</p>
          <h3 class="mt-3 text-2xl font-bold text-white md:text-3xl">{{ work.p2.title }}</h3>
          <p class="mt-4 leading-relaxed text-secondary">{{ work.p2.desc }}</p>
          <ul class="mt-6 space-y-2 font-mono text-sm text-secondary">
            <li v-for="point in work.p2.points" :key="point" class="flex items-start gap-2">
              <Check :size="16" class="mt-0.5 shrink-0 text-cyan" />
              {{ point }}
            </li>
          </ul>
          <span
            class="mt-6 inline-block rounded-full border px-3 py-1 font-mono text-xs"
            :class="statusStyles[1]"
          >
            {{ work.p2.status }}
          </span>
          <div class="mt-6">
            <a
              :href="work.p2.href"
              target="_blank"
              rel="noopener"
              class="link-underline inline-flex items-center gap-1.5 font-mono text-sm text-cyan"
            >
              {{ work.p2.link }}
              <ExternalLink :size="14" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection :delay="0.15" class="md:order-1">
          <div class="space-y-4">
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
        </AnimatedSection>
      </div>

      <!-- PROJECT 3: 3D viewer -->
      <div class="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <AnimatedSection>
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyan">{{ work.p3.tag }}</p>
          <h3 class="mt-3 text-2xl font-bold text-white md:text-3xl">{{ work.p3.title }}</h3>
          <p class="mt-4 leading-relaxed text-secondary">{{ work.p3.desc }}</p>
          <span
            class="mt-6 inline-block rounded-full border px-3 py-1 font-mono text-xs"
            :class="statusStyles[2]"
          >
            {{ work.p3.status }}
          </span>
          <div class="mt-6">
            <a
              :href="work.p3.href"
              target="_blank"
              rel="noopener"
              class="link-underline inline-flex items-center gap-1.5 font-mono text-sm text-cyan"
            >
              {{ work.p3.link }}
              <ExternalLink :size="14" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection :delay="0.15">
          <div class="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0f] shadow-card">
            <div class="flex items-center gap-2 border-b border-white/10 bg-[#0f0f16] px-4 py-2.5">
              <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
              <span class="ms-2 flex-1 truncate rounded bg-white/5 px-3 py-0.5 text-center font-mono text-[11px] text-muted">
                three.js + MediaPipe hand tracking
              </span>
            </div>
            <div class="relative flex h-64 items-center justify-center bg-gradient-to-br from-[#0d0d1a] to-[#0a0a0f] sm:h-72">
              <div class="absolute h-24 w-24 rounded-full bg-cyan/20 blur-2xl" aria-hidden="true"></div>
              <div class="absolute h-16 w-16 rounded-full bg-violet/20 blur-2xl" aria-hidden="true"></div>
              <div class="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-violet/30 bg-violet/10 shadow-glow-accent">
                <p class="font-mono text-4xl text-violet">Y</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>