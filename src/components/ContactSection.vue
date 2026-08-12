<script setup>
import { Mail, Github, Linkedin, MapPin } from 'lucide-vue-next'
import AnimatedSection from './AnimatedSection.vue'
import { useI18n } from '../i18n.js'

const contact = useI18n('contact')

const items = [
  { icon: Mail, value: 'hello@yourdomain.dev', href: 'mailto:hello@yourdomain.dev' },
  { icon: Github, value: 'github.com/YOURUSERNAME', href: 'https://github.com/YOURUSERNAME' },
  { icon: Linkedin, value: 'linkedin.com/in/YOURUSERNAME', href: 'https://linkedin.com/in/YOURUSERNAME' },
  { icon: MapPin, value: contact.value.location, href: '#' },
]
</script>

<template>
  <section id="contact" class="px-4 py-24 sm:px-6">
    <div class="mx-auto max-w-[800px] text-center">
      <AnimatedSection>
        <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">{{ contact.heading }}</h2>
        <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-secondary">{{ contact.sub }}</p>
      </AnimatedSection>

      <AnimatedSection :delay="0.1">
        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@yourdomain.dev?subject=Hiring%20—%20Full-Stack%20Developer"
            class="w-full rounded-full border border-white/10 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:border-cyan/50 hover:text-cyan sm:w-auto"
          >
            {{ contact.cta1 }}
          </a>
          <a
            href="https://github.com/YOURUSERNAME"
            target="_blank"
            rel="noopener"
            class="w-full rounded-full border border-white/10 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:border-cyan/50 hover:text-cyan sm:w-auto"
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