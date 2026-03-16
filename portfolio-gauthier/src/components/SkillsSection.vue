<script setup>
import { onMounted, ref } from 'vue';
import SectionHeader from './SectionHeader.vue';

defineProps({
  skills: {
    type: Array,
    required: true
  }
});

const animateBars = ref(false);
const visible = ref(false);
const sectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        requestAnimationFrame(() => {
          animateBars.value = true;
        });
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
    id="skills"
    ref="sectionRef"
    class="section-shell fade-in-up"
    :class="{ 'fade-in-up--visible': visible }"
  >
    <SectionHeader
      eyebrow="Compétences"
      title="Stack technique maîtrisée."
      body="Des technologies travaillées en stage et en projets personnels, avec une progression mesurable sur chaque compétence."
    />

    <div class="skills-grid">
      <article v-for="skill in skills" :key="skill.name" class="skill-card card-surface">
        <div class="skill-card__top">
          <div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.category }}</p>
          </div>
          <strong>{{ skill.level }}%</strong>
        </div>

        <div class="skill-card__track">
          <span
            class="skill-card__fill"
            :style="{ width: animateBars ? `${skill.level}%` : '0%' }"
          ></span>
        </div>
      </article>
    </div>
  </section>
</template>
