<script setup>
import { computed, onMounted, ref } from 'vue';
import SectionHeader from './SectionHeader.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

const selectedType = ref('Tous');
const visible = ref(false);
const sectionRef = ref(null);

const projectTypes = computed(() => ['Tous', ...new Set(props.projects.map((project) => project.type))]);

const filteredProjects = computed(() => {
  if (selectedType.value === 'Tous') {
    return props.projects;
  }

  return props.projects.filter((project) => project.type === selectedType.value);
});

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
    id="projects"
    ref="sectionRef"
    class="section-shell fade-in-up"
    :class="{ 'fade-in-up--visible': visible }"
  >
    <SectionHeader
      eyebrow="Projets"
      title="Des projets concrets, du client au perso."
      body="Applications professionnelles, projets d'école et initiatives personnelles qui reflètent ma progression technique."
    />

    <div class="projects__filters">
      <button
        v-for="type in projectTypes"
        :key="type"
        type="button"
        class="projects__filter"
        :class="{ 'projects__filter--active': selectedType === type }"
        @click="selectedType = type"
      >
        {{ type }}
      </button>
    </div>

    <div class="projects__grid">
      <article
        v-for="project in filteredProjects"
        :key="project.name"
        class="project-card card-surface"
        :style="{ '--project-color': project.color }"
      >
        <div class="project-card__head">
          <div>
            <p class="project-card__type">{{ project.type }}</p>
            <h3>{{ project.name }}</h3>
          </div>

          <span v-if="project.confidential" class="project-card__lock">Confidentiel</span>
        </div>

        <p class="project-card__context">{{ project.context }}</p>
        <p class="project-card__description">{{ project.description }}</p>

        <div class="tag-list">
          <span v-for="tag in project.tags" :key="tag" class="tag-chip tag-chip--muted">
            {{ tag }}
          </span>
        </div>

        <a
          v-if="project.github"
          class="project-card__link link-inline"
          :href="project.github"
          target="_blank"
          rel="noreferrer"
        >
          Voir le repository
        </a>
      </article>
    </div>
  </section>
</template>
