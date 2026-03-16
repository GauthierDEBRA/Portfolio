<script setup>
import SectionHeader from './SectionHeader.vue';

defineProps({
  paragraphs: {
    type: Array,
    required: true
  },
  stats: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section id="about" class="section-shell">
    <SectionHeader
      eyebrow="A propos"
      title="Un profil junior, mais deja oriente stack et livraison."
      body="Le but du portfolio n'est pas seulement d'etre joli. Il doit montrer un cap technique coherent avec ta recherche d'alternance."
    />

    <div class="about-grid">
      <div class="about-copy card-surface">
        <p v-for="paragraph in paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div class="about-stats">
        <article v-for="stat in stats" :key="stat.label" class="about-stat card-surface">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
