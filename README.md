# Portfolio

Mono-repo du portfolio de Gauthier DEBRA.

## Structure

```text
portfolio-gauthier/   # Frontend Vue 3 + Vite
portfolio-backend/    # API Spring Boot + PostgreSQL
```

## Lancer en local

### Front

```bash
cd portfolio-gauthier
npm install
npm run dev
```

Variables :

```bash
VITE_API_BASE_URL=http://localhost:8080
```

### Back

```bash
cd portfolio-backend
mvn spring-boot:run
```

Variables minimales :

```bash
PGHOST=localhost
PGPORT=5432
PGDATABASE=portfolio
PGUSER=postgres
PGPASSWORD=postgres
RESEND_API_KEY=re_xxxxxxxxx
MAIL_FROM=Portfolio <onboarding@resend.dev>
MAIL_TO=gauthier.debra@outlook.fr
MAIL_SEND_CONFIRMATION=false
CORS_ORIGINS=http://localhost:5173
ADMIN_USERNAME=portfolio-admin
ADMIN_PASSWORD=change-this-password
```

## Deploiement

### Vercel

Projet :

- Root directory : `portfolio-gauthier`
- Build command : `npm run build`
- Output directory : `dist`

Variable d'environnement :

```bash
VITE_API_BASE_URL=https://TON-BACKEND.up.railway.app
```

### Railway

Projet :

- Root directory : `portfolio-backend`
- Service Java Spring Boot
- Service PostgreSQL lie au backend

Variables a definir :

```bash
PGHOST=<variable Railway Postgres>
PGPORT=<variable Railway Postgres>
PGDATABASE=<variable Railway Postgres>
PGUSER=<variable Railway Postgres>
PGPASSWORD=<variable Railway Postgres>
RESEND_API_KEY=re_xxxxxxxxx
MAIL_FROM=Portfolio <onboarding@resend.dev>
MAIL_TO=gauthier.debra@outlook.fr
MAIL_SEND_CONFIRMATION=false
CORS_ORIGINS=https://gauthierdebra.vercel.app,https://*.vercel.app
ADMIN_USERNAME=portfolio-admin
ADMIN_PASSWORD=un-mot-de-passe-long-et-solide
```

Notes mail :

- pour recevoir rapidement les notifications sur ta propre boite, le plus simple est de creer ton compte Resend avec `gauthier.debra@outlook.fr`
- le domaine `onboarding@resend.dev` sert au test et ne peut envoyer qu'a l'adresse email associee a ton compte Resend
- pour envoyer aussi un email de confirmation au visiteur, verifie ton propre domaine dans Resend puis remplace `MAIL_FROM` et passe `MAIL_SEND_CONFIRMATION=true`

Verification rapide :

```text
https://TON-BACKEND.up.railway.app/api/health
```

Si ce healthcheck repond, le backend est en ligne. Si le front a bien `VITE_API_BASE_URL`, le formulaire peut appeler `/api/contact`.
