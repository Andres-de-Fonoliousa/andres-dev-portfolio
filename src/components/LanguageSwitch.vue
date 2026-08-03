<script setup>
import { lang, setLang } from '../i18n.js'
</script>

<template>
  <div
    class="fixed end-4 top-4 z-50 flex items-center gap-1 rounded-full border border-white/10 bg-bg/80 p-1 backdrop-blur-xl"
    role="group"
    aria-label="Language"
  >
    <button
      @click="setLang('en')"
      :class="
        lang === 'en'
          ? 'bg-cyan font-semibold text-black shadow-glow-sm'
          : 'text-secondary hover:text-primary'
      "
      class="rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300"
    >
      EN
    </button>
    <button
      @click="setLang('ar')"
      :class="
        lang === 'ar'
          ? 'bg-cyan font-semibold text-black shadow-glow-sm'
          : 'text-secondary hover:text-primary'
      "
      class="rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300"
    >
      عربي
    </button>
  </div>
</template>
