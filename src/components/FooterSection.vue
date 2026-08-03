<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { useI18n } from '../i18n.js'

const footer = useI18n('footer')
const year = new Date().getFullYear()
</script>

<template>
  <footer id="footer" class="bg-[#030305] px-4 py-12 sm:px-6">
    <div class="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="font-mono text-xs text-muted">
        © {{ year }} YOUR NAME. {{ footer.built }}
      </p>
      <div class="flex items-center gap-6 text-sm text-secondary">
        <a href="https://github.com/YOURUSERNAME" target="_blank" rel="noopener" class="link-underline transition-colors hover:text-cyan">
          <span class="flex items-center gap-1.5"><Github :size="16" /> {{ footer.github }}</span>
        </a>
        <a href="https://linkedin.com/in/YOURUSERNAME" target="_blank" rel="noopener" class="link-underline transition-colors hover:text-cyan">
          <span class="flex items-center gap-1.5"><Linkedin :size="16" /> {{ footer.linkedin }}</span>
        </a>
        <a href="mailto:hello@yourdomain.dev" class="link-underline transition-colors hover:text-cyan">
          <span class="flex items-center gap-1.5"><Mail :size="16" /> {{ footer.email }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>
