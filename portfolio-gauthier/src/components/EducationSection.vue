<script setup>
import SectionHeader from './SectionHeader.vue';

defineProps({
  education: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section id="education" class="section-shell">
    <SectionHeader
      eyebrow="Formation"
      title="Une trajectoire qui devient enfin coherente avec le developpement."
      body="Ici, l'important est de faire ressortir la progression : orientation actuelle, classement et disponibilite pour l'alternance."
    />

    <div class="education-grid">
      <article v-for="item in education" :key="item.title" class="education-card card-surface">
        <p class="education-card__period">{{ item.period }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.school }}</p>
        <span class="education-card__badge">{{ item.badge }}</span>
      </article>
    </div>
  </section>
</template>
