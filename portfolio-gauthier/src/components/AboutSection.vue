<script setup>
import { onMounted, ref } from 'vue';
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

const visible = ref(false);
const sectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="section-shell fade-in-up"
    :class="{ 'fade-in-up--visible': visible }"
  >
    <SectionHeader
      eyebrow="À propos"
      title="Junior, mais déjà orienté stack et livraison."
      body="Un parcours cohérent entre formation, stages et projets personnels, construit autour d'une stack Vue.js / Java."
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
