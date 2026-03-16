<script setup>
import { onMounted, ref } from 'vue';
import cvFile from '../../CV_Gauthier_DEBRA.pdf?url';

defineProps({
  highlights: {
    type: Array,
    required: true
  },
  metrics: {
    type: Array,
    required: true
  }
});

const visible = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    visible.value = true;
  });
});
</script>

<template>
  <section id="hero" class="section-shell hero fade-in-up" :class="{ 'fade-in-up--visible': visible }">
    <div class="hero__copy">
      <div class="hero__availability">
        <span class="hero__availability-dot"></span>
        Disponible en alternance 2026-2027
      </div>

      <p class="hero__lead">Développeur Fullstack — Vue.js & Java</p>
      <h1 class="hero__title">
        Gauthier
        <span>DEBRA</span>
      </h1>
      <p class="hero__summary">
        Je conçois des interfaces claires avec Vue.js et des APIs solides avec Spring Boot.
        En recherche d'alternance pour consolider mon parcours fullstack.
      </p>

      <div class="tag-list hero__highlights">
        <span v-for="item in highlights" :key="item" class="tag-chip tag-chip--muted">
          {{ item }}
        </span>
      </div>

      <div class="hero__actions">
        <a class="pill-button pill-button--primary" href="#contact">Me contacter</a>
        <a class="pill-button pill-button--secondary" href="#projects">Voir les projets</a>
        <a class="pill-button pill-button--secondary" :href="cvFile" download>
          Télécharger le CV
        </a>
      </div>
    </div>

    <aside class="hero__panel card-surface">
      <div class="hero__panel-head">
        <span class="hero__panel-label">Focus 2026</span>
        <strong>Mon profil fullstack</strong>
      </div>

      <div class="hero__panel-stack">
        <div class="hero__stack-column">
          <h2>Front</h2>
          <p>Vue 3, composants lisibles, consommation d'API et interfaces responsives.</p>
        </div>
        <div class="hero__stack-divider"></div>
        <div class="hero__stack-column">
          <h2>Back</h2>
          <p>Spring Boot, validation, persistance, envoi de mails et endpoints sécurisés.</p>
        </div>
      </div>

      <div class="hero__metrics">
        <article v-for="metric in metrics" :key="metric.label" class="hero__metric">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </article>
      </div>
    </aside>
  </section>
</template>
