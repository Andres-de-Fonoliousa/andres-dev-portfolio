<script setup>
import { Mail } from 'lucide-vue-next'
import { useI18n } from '../i18n.js'

const nav = useI18n('nav')
</script>

<template>
  <nav
    class="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-6 rounded-full border border-line bg-white/85 px-6 py-3 font-mono text-xs tracking-wide text-secondary shadow-card backdrop-blur-xl sm:flex"
  >
    <a href="#about" class="link-underline transition-colors hover:text-indigo">{{ nav.about }}</a>
    <a href="#work" class="link-underline transition-colors hover:text-indigo">{{ nav.work }}</a>
    <a href="#stack" class="link-underline transition-colors hover:text-indigo">{{ nav.stack }}</a>
    <a href="#faq" class="link-underline transition-colors hover:text-indigo">{{ nav.faq }}</a>
    <a
      href="mailto:astroid198@gmail.com"
      class="flex items-center gap-1.5 text-indigo transition-colors hover:text-indigo-deep"
    >
      <Mail :size="14" />
      {{ nav.contact }}
    </a>
  </nav>
</template>