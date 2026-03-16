<script setup>
import { onMounted, reactive, ref } from 'vue';
import { sendContactMessage } from '../services/contactApi';
import SectionHeader from './SectionHeader.vue';

defineProps({
  contactDetails: {
    type: Array,
    required: true
  }
});

const visible = ref(false);
const sectionRef = ref(null);

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  message: ''
});

const apiError = ref('');
const isSubmitting = ref(false);
const isSuccess = ref(false);
const submittedName = ref('');

function resetErrors() {
  errors.name = '';
  errors.email = '';
  errors.message = '';
  apiError.value = '';
}

function validateForm() {
  resetErrors();

  if (!form.name.trim()) {
    errors.name = 'Le nom est requis.';
  }

  if (!form.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Le format de l'email est invalide.";
  }

  if (!form.message.trim()) {
    errors.message = 'Le message est requis.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères.';
  }

  return !errors.name && !errors.email && !errors.message;
}

function applyBackendErrors(payload) {
  const fieldErrors = payload?.errors || {};

  if (fieldErrors.name) {
    errors.name = fieldErrors.name;
  }

  if (fieldErrors.email) {
    errors.email = fieldErrors.email;
  }

  if (fieldErrors.message) {
    errors.message = fieldErrors.message;
  }
}

async function handleSubmit() {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    await sendContactMessage({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      message: form.message.trim()
    });

    submittedName.value = form.name.trim();
    isSuccess.value = true;
    form.name = '';
    form.email = '';
    form.company = '';
    form.message = '';
  } catch (error) {
    applyBackendErrors(error.payload);
    apiError.value = error.message;
  } finally {
    isSubmitting.value = false;
  }
}

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
    id="contact"
    ref="sectionRef"
    class="section-shell fade-in-up"
    :class="{ 'fade-in-up--visible': visible }"
  >
    <SectionHeader
      eyebrow="Contact"
      title="Échangeons sur votre prochain projet."
      body="Vous cherchez un développeur fullstack junior motivé ? N'hésitez pas à me contacter pour discuter d'une alternance ou d'une collaboration."
    />

    <div class="contact-grid">
      <div class="contact-info card-surface">
        <h3>Parlons d'une alternance ou d'un projet.</h3>
        <p>
          Si votre équipe cherche un profil junior motivé sur une stack Vue.js / Java, je suis
          disponible pour échanger.
        </p>

        <div class="contact-info__list">
          <component
            :is="detail.href ? 'a' : 'div'"
            v-for="detail in contactDetails"
            :key="detail.label"
            class="contact-info__item"
            :href="detail.href || undefined"
            :target="detail.href?.startsWith('http') ? '_blank' : undefined"
            :rel="detail.href?.startsWith('http') ? 'noreferrer' : undefined"
          >
            <span>{{ detail.label }}</span>
            <strong>{{ detail.value }}</strong>
          </component>
        </div>
      </div>

      <div class="contact-form card-surface">
        <div v-if="isSuccess" class="contact-form__success">
          <strong>Message envoyé.</strong>
          <p>
            Merci {{ submittedName }}. Votre message a bien été transmis, je reviens vers vous
            rapidement.
          </p>
        </div>

        <form v-else class="contact-form__fields" @submit.prevent="handleSubmit">
          <label class="contact-form__field">
            <span>Nom</span>
            <input v-model="form.name" type="text" placeholder="Votre nom" />
            <small v-if="errors.name">{{ errors.name }}</small>
          </label>

          <label class="contact-form__field">
            <span>Email</span>
            <input v-model="form.email" type="email" placeholder="vous@entreprise.com" />
            <small v-if="errors.email">{{ errors.email }}</small>
          </label>

          <label class="contact-form__field">
            <span>Entreprise</span>
            <input v-model="form.company" type="text" placeholder="Nom de l'entreprise" />
          </label>

          <label class="contact-form__field">
            <span>Message</span>
            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Décrivez votre besoin, votre contexte ou votre opportunité."
            ></textarea>
            <small v-if="errors.message">{{ errors.message }}</small>
          </label>

          <p v-if="apiError" class="contact-form__error">{{ apiError }}</p>

          <button class="pill-button pill-button--primary contact-form__submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
