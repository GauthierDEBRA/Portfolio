<script setup>
import { computed, ref } from 'vue';
import SectionHeader from './SectionHeader.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

const selectedType = ref('Tous');

const projectTypes = computed(() => ['Tous', ...new Set(props.projects.map((project) => project.type))]);

const filteredProjects = computed(() => {
  if (selectedType.value === 'Tous') {
    return props.projects;
  }

  return props.projects.filter((project) => project.type === selectedType.value);
});
</script>

<template>
  <section id="projects" class="section-shell">
    <SectionHeader
      eyebrow="Projets"
      title="Des projets qui montrent ce que tu sais faire, pas juste ce que tu connais."
      body="Le portfolio doit melanger confidentialite projet, projets persos et stack cible. C'est plus credible qu'une simple liste de technos."
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
      <article v-for="project in filteredProjects" :key="project.name" class="project-card card-surface">
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
