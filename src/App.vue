<script setup>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import WorkSection from './components/WorkSection.vue'
import StackSection from './components/StackSection.vue'
import WhySection from './components/WhySection.vue'
import ContactSection from './components/ContactSection.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'
import NavPill from './components/NavPill.vue'
import LanguageSwitch from './components/LanguageSwitch.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
</script>

<template>
  <div class="relative min-h-screen bg-bg font-body text-primary antialiased">
    <div class="bg-contours" aria-hidden="true"></div>
    <div class="bg-dots" aria-hidden="true"></div>
    <div class="bg-spot" aria-hidden="true"></div>
    <div class="noise-overlay" aria-hidden="true"></div>

    <LanguageSwitch />
    <NavPill />

    <main class="relative z-10">
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <WorkSection />
      <StackSection />
      <WhySection />
      <ContactSection />
      <FaqSection />
    </main>

    <FooterSection />
  </div>
</template>