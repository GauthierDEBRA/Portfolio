<script setup>
import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/ContactSection.vue';
import EducationSection from './components/EducationSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';
import SkillsSection from './components/SkillsSection.vue';
import {
  aboutParagraphs,
  aboutStats,
  contactDetails,
  education,
  experiences,
  heroHighlights,
  heroMetrics,
  navLinks,
  projects,
  skills
} from './data/portfolio';
</script>

<template>
  <div class="app-shell">
    <div class="app-shell__mesh"></div>
    <div class="app-shell__glow app-shell__glow--left"></div>
    <div class="app-shell__glow app-shell__glow--right"></div>

    <SiteHeader :links="navLinks" />

    <main class="page-content">
      <HeroSection :highlights="heroHighlights" :metrics="heroMetrics" />
      <AboutSection :paragraphs="aboutParagraphs" :stats="aboutStats" />
      <SkillsSection :skills="skills" />
      <ExperienceSection :experiences="experiences" />
      <ProjectsSection :projects="projects" />
      <EducationSection :education="education" />
      <ContactSection :contact-details="contactDetails" />
    </main>

    <SiteFooter />
  </div>
</template>
