<script setup>
import AnimatedSection from './AnimatedSection.vue'
import TerminalWindow from './TerminalWindow.vue'
import { useI18n } from '../i18n.js'

const stack = useI18n('stack')

const dots = {
  Laravel: '#ff2d20',
  'Vue 3': '#42b883',
  'Tailwind CSS': '#38bdf8',
  Python: '#ffd43b',
  'MySQL/PostgreSQL': '#336791',
  Redis: '#dc382d',
  Docker: '#2496ed',
  'Git/GitHub': '#f5f5f5',
}
</script>

<template>
  <section id="stack" class="px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[1200px]">
      <AnimatedSection class="text-center">
        <p class="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {{ stack.label }}
        </p>
        <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">{{ stack.heading }}</h2>
        <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-secondary">{{ stack.sub }}</p>
      </AnimatedSection>

      <div class="mt-12 flex flex-wrap justify-center gap-4">
        <AnimatedSection
          v-for="(tech, i) in stack.techs"
          :key="tech.name"
          :delay="(i % 4) * 0.1"
        >
          <div
            class="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#111118] px-6 py-4 transition-all duration-300 hover:border-white/20"
          >
            <span class="h-2 w-2 rounded-full" :style="{ backgroundColor: dots[tech.name] }"></span>
            <span class="font-mono text-sm text-primary">{{ tech.name }}</span>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection class="mx-auto mt-10 max-w-3xl">
        <div class="rounded-2xl border border-white/[0.06] bg-[#111118]/60 p-8 backdrop-blur-xl">
          <p class="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {{ stack.proficiency }}
          </p>
          <div class="space-y-5">
            <div v-for="tech in stack.techs" :key="tech.name">
              <div class="mb-1.5 flex items-center justify-between">
                <span class="font-mono text-sm text-secondary">{{ tech.name }}</span>
                <span class="font-mono text-xs text-muted">{{ tech.pct }}%</span>
              </div>
              <div class="h-1.5 rounded-full bg-white/10">
                <div
                  class="h-full rounded-full bg-cyan transition-all duration-1000 ease-spring"
                  :style="{ width: tech.pct + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection :delay="0.1" class="mx-auto mt-16 max-w-3xl text-start">
        <TerminalWindow title="app/Developers/Me.php">
          <p><span class="code-kw">namespace</span> <span class="code-fn">App\Developers</span>;</p>
          <p></p>
          <p><span class="code-kw">class</span> <span class="code-fn">Me</span> <span class="code-kw">extends</span> <span class="code-fn">SeniorDeveloper</span></p>
          <p>{</p>
          <p class="ps-4 text-slate-500">/*</p>
          <p class="ps-6 text-slate-500">* I write code that other developers can actually read.</p>
          <p class="ps-6 text-slate-500">* Clean architecture. SOLID principles.</p>
          <p class="ps-6 text-slate-500">* Comments that explain the "why," not the "what."</p>
          <p class="ps-4 text-slate-500">*/</p>
          <p></p>
          <p class="ps-4"><span class="code-kw">public function</span> <span class="code-fn">ship</span>(): <span class="code-var">Product</span></p>
          <p class="ps-4">{</p>
          <p class="ps-8"><span class="code-kw">return</span> <span class="code-kw">$this</span>-><span class="code-fn">scope</span>()</p>
          <p class="ps-10">-><span class="code-fn">architect</span>()</p>
          <p class="ps-10">-><span class="code-fn">build</span>()</p>
          <p class="ps-10">-><span class="code-fn">test</span>()</p>
          <p class="ps-10">-><span class="code-fn">deploy</span>();</p>
          <p class="ps-4">}</p>
          <p>}</p>
        </TerminalWindow>
      </AnimatedSection>
    </div>
  </section>
</template>
