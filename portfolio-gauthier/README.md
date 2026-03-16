# Portfolio Frontend

Frontend du portfolio de Gauthier DEBRA, developpe en `Vue 3 + Vite`.

## Stack

- `Vue 3`
- `Vite`
- `CSS` custom
- API REST Spring Boot pour le formulaire de contact

## Lancer le projet

```bash
npm install
npm run dev
```

Le front tourne par defaut sur `http://localhost:5173`.

## Variables d'environnement

Copie `.env.example` vers `.env` puis adapte l'URL du backend :

```bash
VITE_API_BASE_URL=http://localhost:8080
```

En production sur Vercel, cette variable doit pointer vers l'URL publique Railway du backend :

```bash
VITE_API_BASE_URL=https://TON-BACKEND.up.railway.app
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Structure

```text
src/
  components/
  data/
  services/
  App.vue
  main.js
  style.css
```
