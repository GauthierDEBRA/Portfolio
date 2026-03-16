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

onMounted(() => {
  requestAnimationFrame(() => {
    animateBars.value = true;
  });
});
</script>

<template>
  <section id="skills" class="section-shell">
    <SectionHeader
      eyebrow="Stack"
      title="Vue.js et Java comme fil conducteur."
      body="Le message a envoyer a un recruteur est direct : tu sais sur quelle stack tu veux monter en puissance, et tu la travailles deja."
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
