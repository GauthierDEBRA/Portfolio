<script setup>
import { ref } from 'vue';

defineProps({
  links: {
    type: Array,
    required: true
  }
});

const menuOpen = ref(false);

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <a class="site-header__logo" href="#hero" @click="closeMenu">
        <span>GD</span>
        <small>fullstack</small>
      </a>

      <nav class="site-header__nav" aria-label="Navigation principale">
        <a v-for="link in links" :key="link.href" class="site-header__link" :href="link.href">
          {{ link.label }}
        </a>
      </nav>

      <div class="site-header__aside">
        <span class="site-header__badge">Alternance 2026-2027</span>
        <button
          class="site-header__toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="visually-hidden">Ouvrir le menu</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <nav v-if="menuOpen" id="mobile-menu" class="site-header__mobile" aria-label="Navigation mobile">
      <a
        v-for="link in links"
        :key="`mobile-${link.href}`"
        class="site-header__mobile-link"
        :href="link.href"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
