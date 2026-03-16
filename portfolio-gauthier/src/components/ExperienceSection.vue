<script setup>
import SectionHeader from './SectionHeader.vue';

defineProps({
  experiences: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section id="experience" class="section-shell">
    <SectionHeader
      eyebrow="Experience"
      title="Des experiences qui soutiennent vraiment la stack annoncee."
      body="Le point fort ici, c'est la coherence entre le discours, les stages et les projets exposes."
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
