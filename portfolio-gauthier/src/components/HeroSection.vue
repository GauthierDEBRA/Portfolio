<script setup>
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
</script>

<template>
  <section id="hero" class="section-shell hero">
    <div class="hero__copy">
      <div class="hero__availability">
        <span class="hero__availability-dot"></span>
        Disponible pour une alternance 2026-2027
      </div>

      <p class="hero__lead">Vue.js au front. Java au back. Un portfolio qui assume la stack.</p>
      <h1 class="hero__title">
        Gauthier
        <span>DEBRA</span>
      </h1>
      <p class="hero__summary">
        Developpeur fullstack en Bachelor, oriente produit et implementation. J'aime quand
        l'interface est claire, que l'API est propre et que le projet donne une impression de
        maitrise des deux cotes.
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
          Telecharger le CV
        </a>
      </div>
    </div>

    <aside class="hero__panel card-surface">
      <div class="hero__panel-head">
        <span class="hero__panel-label">Focus 2026</span>
        <strong>Montrer un vrai profil fullstack</strong>
      </div>

      <div class="hero__panel-stack">
        <div class="hero__stack-column">
          <h2>Front</h2>
          <p>Vue 3, composants lisibles, consommation d'API et UX responsive.</p>
        </div>
        <div class="hero__stack-divider"></div>
        <div class="hero__stack-column">
          <h2>Back</h2>
          <p>Spring Boot, validation, persistance, envoi de mail et endpoints proteges.</p>
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
