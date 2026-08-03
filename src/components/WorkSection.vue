<script setup>
import { Check, Target, Server, Layout, Plug, Rocket } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import GlassCard from './GlassCard.vue'
import { useI18n } from '../i18n.js'

const work = useI18n('work')

const sprintIcons = [Target, Server, Server, Layout, Layout, Plug, Rocket]
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

      <!-- PROJECT 1 -->
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
          <span
            class="mt-6 inline-block rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-xs text-amber-400"
          >
            {{ work.p1.status }}
          </span>
          <div class="mt-6">
            <a href="#" class="link-underline font-mono text-sm text-cyan">
              {{ work.p1.link }} →
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
                  app.storefronts.io/admin
                </span>
              </div>
              <img
                src="/saas-dashboard.jpeg"
                alt="Multi-tenant admin dashboard"
                class="h-64 w-full object-cover object-top sm:h-72"
                loading="lazy"
              />
            </div>
            <div
              class="absolute -bottom-6 end-2 w-72 rounded-lg border border-white/10 bg-[#050507] p-4 font-mono text-xs text-cyan shadow-xl sm:-end-4"
            >
              <p class="text-slate-500">// Tenant resolution middleware</p>
              <p><span class="code-kw">$tenant</span> = <span class="code-fn">Tenant::findByDomain</span>(</p>
              <p class="ps-4"><span class="code-fn">request</span>()-><span class="code-fn">getHost</span>()</p>
              <p>);</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <!-- PROJECT 2 -->
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
            class="mt-6 inline-block rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 font-mono text-xs text-amber-400"
          >
            {{ work.p2.status }}
          </span>
          <div class="mt-6">
            <a href="#" class="link-underline font-mono text-sm text-cyan">
              {{ work.p2.link }} →
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

      <!-- PROJECT 3 -->
      <AnimatedSection class="mt-24">
        <GlassCard class="p-8 text-center sm:p-12">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyan">{{ work.p3.tag }}</p>
          <h3 class="mt-3 text-2xl font-bold text-white md:text-3xl">{{ work.p3.title }}</h3>
          <p class="mx-auto mt-4 max-w-2xl leading-relaxed text-secondary">{{ work.p3.desc }}</p>

          <div class="relative mx-auto mt-10 hidden max-w-3xl md:block">
            <div class="track-line" aria-hidden="true"></div>
            <div class="relative flex justify-between">
              <div
                v-for="(item, i) in work.sprint"
                :key="item.day"
                class="flex w-24 flex-col items-center"
              >
                <div
                  class="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0f]"
                >
                  <component :is="sprintIcons[i]" :size="22" :class="i === 6 ? 'text-green-400' : 'text-cyan'" />
                </div>
                <p class="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {{ item.day }}
                </p>
                <p class="text-sm text-primary">{{ item.label }}</p>
              </div>
            </div>
          </div>

          <div class="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2 md:hidden">
            <div
              v-for="(item, i) in work.sprint"
              :key="item.day"
              class="flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0f] px-4 py-2"
            >
              <component :is="sprintIcons[i]" :size="14" class="text-cyan" />
              <span class="font-mono text-xs text-primary">{{ item.day }}: {{ item.label }}</span>
            </div>
          </div>

          <blockquote class="mx-auto mt-10 max-w-xl border-s-2 border-cyan ps-4 text-start italic text-secondary">
            "{{ work.p3.quote }}"
          </blockquote>
        </GlassCard>
      </AnimatedSection>
    </div>
  </section>
</template>
