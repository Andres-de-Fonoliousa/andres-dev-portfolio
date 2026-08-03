<script setup>
import { Mail } from 'lucide-vue-next'
import { useI18n } from '../i18n.js'

const nav = useI18n('nav')
</script>

<template>
  <nav
    class="fixed bottom-4 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-6 rounded-full border border-white/10 bg-bg/80 px-6 py-3 font-mono text-xs tracking-wide text-secondary backdrop-blur-xl sm:flex"
  >
    <a href="#work" class="link-underline transition-colors hover:text-cyan">{{ nav.work }}</a>
    <a href="#stack" class="link-underline transition-colors hover:text-cyan">{{ nav.stack }}</a>
    <a href="#for" class="link-underline transition-colors hover:text-cyan">{{ nav.hire }}</a>
    <a href="#faq" class="link-underline transition-colors hover:text-cyan">{{ nav.faq }}</a>
    <a
      href="mailto:hello@yourdomain.dev"
      class="flex items-center gap-1.5 text-cyan transition-colors hover:text-white"
    >
      <Mail :size="14" />
      {{ nav.contact }}
    </a>
  </nav>
</template>
