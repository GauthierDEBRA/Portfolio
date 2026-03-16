<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <header class="section-header">
    <div>
      <div class="section-header__eyebrow">{{ eyebrow }}</div>
      <h2 class="section-header__title">{{ title }}</h2>
    </div>
    <p v-if="body" class="section-header__body">{{ body }}</p>
  </header>
</template>
