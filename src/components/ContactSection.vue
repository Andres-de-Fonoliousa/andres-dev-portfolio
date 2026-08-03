<script setup>
import { Mail, Github, Linkedin, MapPin } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import { useI18n } from '../i18n.js'

const contact = useI18n('contact')

const items = [
  { icon: Mail, value: 'hello@yourdomain.dev', href: 'mailto:hello@yourdomain.dev' },
  { icon: Github, value: 'github.com/YOURUSERNAME', href: 'https://github.com/YOURUSERNAME' },
  { icon: Linkedin, value: 'linkedin.com/in/YOURUSERNAME', href: 'https://linkedin.com/in/YOURUSERNAME' },
  { icon: MapPin, value: 'Remote • UTC+3', href: '#' },
]
</script>

<template>
  <section id="contact" class="bg-bg2 px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[800px] text-center">
      <AnimatedSection>
        <h2 class="text-3xl font-bold text-white md:text-5xl">{{ contact.heading }}</h2>
        <p class="mx-auto mt-5 max-w-xl leading-relaxed text-secondary">{{ contact.sub }}</p>
      </AnimatedSection>

      <AnimatedSection :delay="0.1">
        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@yourdomain.dev?subject=Project%20Sprint%20Inquiry"
            class="w-full rounded-full bg-cyan px-10 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] sm:w-auto"
          >
            {{ contact.cta1 }}
          </a>
          <a
            href="mailto:hello@yourdomain.dev?subject=Full-Time%20Role%20Inquiry"
            class="w-full rounded-full border-2 border-violet px-10 py-5 text-lg font-bold text-violet transition-all duration-300 hover:bg-violet hover:text-black sm:w-auto"
          >
            {{ contact.cta2 }}
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection :delay="0.2">
        <div class="mt-16 flex flex-wrap justify-center gap-8">
          <a
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-secondary transition-colors hover:text-cyan"
          >
            <component :is="item.icon" :size="18" class="text-slate-400" />
            <span class="text-start">{{ item.value }}</span>
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
</template>
