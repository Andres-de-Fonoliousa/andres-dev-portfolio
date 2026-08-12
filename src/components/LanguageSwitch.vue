<script setup>
import { lang, setLang } from '../i18n.js'
</script>

<template>
  <div
    class="fixed end-4 top-4 z-50 flex items-center gap-1 rounded-full border border-line bg-white/90 p-1 shadow-card backdrop-blur-xl"
    role="group"
    aria-label="Language"
  >
<button
        @click="setLang('en')"
        :class="
          lang === 'en'
            ? 'bg-indigo font-semibold text-white'
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
            ? 'bg-indigo font-semibold text-white'
            : 'text-secondary hover:text-primary'
        "
        class="rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300"
      >
        عربي
      </button>
  </div>
</template>