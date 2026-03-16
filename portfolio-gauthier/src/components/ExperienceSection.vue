<script setup>
import { onMounted, ref } from 'vue';
import SectionHeader from './SectionHeader.vue';

defineProps({
  experiences: {
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
    id="experience"
    ref="sectionRef"
    class="section-shell fade-in-up"
    :class="{ 'fade-in-up--visible': visible }"
  >
    <SectionHeader
      eyebrow="Expérience"
      title="Des stages qui confirment la stack annoncée."
      body="Deux stages fullstack chez Sogeti Capgemini avec Vue.js, Java et SQL en contexte agile. Une cohérence entre le discours et la pratique."
    />

    <div class="timeline">
      <article v-for="item in experiences" :key="`${item.company}-${item.date}`" class="timeline__item">
        <div class="timeline__date">{{ item.date }}</div>
        <div class="timeline__content card-surface">
          <p class="timeline__company">{{ item.company }}</p>
          <h3 class="timeline__role">{{ item.role }}</h3>
          <p class="timeline__description">{{ item.description }}</p>
          <div class="tag-list">
            <span v-for="tag in item.tags" :key="tag" class="tag-chip tag-chip--muted">
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
