<script setup>
import { Github, Send, Mail } from 'lucide-vue-next'
import { useI18n } from '../i18n.js'

const footer = useI18n('footer')
const year = new Date().getFullYear()
</script>

<template>
  <footer id="footer" class="relative overflow-hidden bg-navy px-4 py-12 sm:px-6">
    <div
      class="pointer-events-none absolute inset-0"
      style="background: radial-gradient(42% 60% at 30% 0%, rgba(99, 91, 255, 0.18), transparent 65%), radial-gradient(34% 50% at 80% 100%, rgba(129, 184, 26, 0.1), transparent 60%)"
      aria-hidden="true"
    ></div>
    <div class="relative mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="font-mono text-xs text-slate-400">
        © {{ year }} Yazan (CoreX). {{ footer.built }}
      </p>
      <div class="flex items-center gap-6 text-sm text-slate-300">
        <a href="https://github.com/Andres-de-Fonoliousa" target="_blank" rel="noopener" class="link-underline transition-colors hover:text-white">
          <span class="flex items-center gap-1.5"><Github :size="16" /> {{ footer.github }}</span>
        </a>
        <a href="https://t.me/Zenin0o" target="_blank" rel="noopener" class="link-underline transition-colors hover:text-white">
          <span class="flex items-center gap-1.5"><Send :size="16" /> {{ footer.telegram }}</span>
        </a>
        <a href="mailto:astroid198@gmail.com" class="link-underline transition-colors hover:text-white">
          <span class="flex items-center gap-1.5"><Mail :size="16" /> {{ footer.email }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>