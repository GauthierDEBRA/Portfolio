<script setup>
import { onMounted, ref } from 'vue';
import SectionHeader from './SectionHeader.vue';

defineProps({
  education: {
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
    id="education"
    ref="sectionRef"
    class="section-shell fade-in-up"
    :class="{ 'fade-in-up--visible': visible }"
  >
    <SectionHeader
      eyebrow="Formation"
      title="Une trajectoire qui converge vers le développement."
      body="Du commerce au code : une réorientation assumée, validée par un classement major de promo en première année."
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
