<script setup>
import HeroSection from './components/HeroSection.vue'
import GapSection from './components/GapSection.vue'
import WorkSection from './components/WorkSection.vue'
import StackSection from './components/StackSection.vue'
import ForSection from './components/ForSection.vue'
import ContactSection from './components/ContactSection.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'
import NavPill from './components/NavPill.vue'
import LanguageSwitch from './components/LanguageSwitch.vue'
</script>

<template>
  <div class="relative min-h-screen bg-bg font-body text-primary antialiased">
    <div class="orb orb-cyan" aria-hidden="true"></div>
    <div class="orb orb-violet" aria-hidden="true"></div>
    <div class="noise-overlay" aria-hidden="true"></div>

    <LanguageSwitch />
    <NavPill />

    <main class="relative z-10">
      <HeroSection />
      <GapSection />
      <WorkSection />
      <StackSection />
      <ForSection />
      <ContactSection />
      <FaqSection />
    </main>

    <FooterSection />
  </div>
</template>
