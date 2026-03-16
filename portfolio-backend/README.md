# Portfolio Backend — Gauthier DEBRA

API REST Spring Boot pour le formulaire de contact du portfolio.

## 🛠️ Stack
- **Java 17** + **Spring Boot 3.2**
- **PostgreSQL** (Railway)
- **Resend Email API** (HTTP)
- **Spring Validation**
- **Spring Security** (Basic Auth pour les routes admin)

## 📁 Structure
```
src/main/java/fr/gauthierdebra/portfolio/
├── PortfolioApplication.java
├── controller/
│   ├── AdminContactController.java # Consultation admin des messages
│   ├── ContactController.java      # Endpoint public du formulaire
│   └── HealthController.java       # Health check
├── service/
│   └── ContactService.java        # Logique métier + envoi email
├── repository/
│   └── ContactRepository.java     # Accès BDD
├── model/
│   └── Contact.java               # Entité JPA
├── dto/
│   └── ContactDto.java            # Validation des données entrantes
└── config/
    ├── CorsConfig.java            # CORS pour Vercel
    ├── GlobalExceptionHandler.java # Gestion des erreurs
    └── SecurityConfig.java         # Protection des endpoints admin
```

## 🚀 Endpoints

| Méthode | URL | Description |
|---------|-----|-------------|
| `POST` | `/api/contact` | Envoyer un message |
| `GET` | `/api/health` | Health check |
| `GET` | `/api/admin/messages` | Lister les messages (`Basic Auth`) |
| `GET` | `/api/admin/messages/unread` | Lister les messages non lus (`Basic Auth`) |
| `PATCH` | `/api/admin/messages/{id}/read` | Marquer comme lu (`Basic Auth`) |

## ⚙️ Installation locale

### 1. Prérequis
- Java 17+
- Maven 3.8+
- PostgreSQL local (ou Docker)

### 2. Variables d'environnement
```bash
cp .env.example .env
# Édite .env avec tes vraies valeurs
```

Variables attendues par l'application :

```bash
PGUSER=postgres
PGPASSWORD=postgres
PGHOST=localhost
PGPORT=5432
PGDATABASE=portfolio
RESEND_API_KEY=re_xxxxxxxxx
MAIL_FROM=Portfolio <onboarding@resend.dev>
MAIL_TO=gauthier.debra@outlook.fr
MAIL_SEND_CONFIRMATION=false
CORS_ORIGINS=https://gauthierdebra.vercel.app,https://*.vercel.app,http://localhost:5173
ADMIN_USERNAME=portfolio-admin
ADMIN_PASSWORD=un-vrai-mot-de-passe-long
```

### 3. Configuration Resend
1. Crée un compte Resend avec l'adresse qui doit recevoir les notifications
2. Crée une API key
3. Mets cette clé dans `RESEND_API_KEY`
4. Garde `MAIL_FROM=Portfolio <onboarding@resend.dev>` pour un premier test
5. Si tu veux envoyer aussi un email de confirmation au visiteur, vérifie ton domaine dans Resend puis remplace `MAIL_FROM` par une adresse de ce domaine et passe `MAIL_SEND_CONFIRMATION=true`

### 4. Lancer en local
```bash
mvn spring-boot:run
# API dispo sur http://localhost:8080
```

### 5. Tester
```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@test.com",
    "company": "Capgemini",
    "message": "Bonjour, je suis intéressé par ton profil !"
  }'
```

## 🚂 Déploiement Railway

### 1. Créer le projet
1. Va sur [railway.app](https://railway.app) → "New Project"
2. "Deploy from GitHub repo" → sélectionne ce repo
3. Railway détecte automatiquement Spring Boot ✅

### 2. Ajouter PostgreSQL
1. Dans ton projet Railway → "New" → "Database" → "PostgreSQL"
2. Railway injecte automatiquement `DATABASE_URL` ✅

### 3. Variables d'environnement Railway
Dans Settings → Variables, ajoute :
```
RESEND_API_KEY=re_xxxxxxxxx
MAIL_FROM=Portfolio <onboarding@resend.dev>
MAIL_TO=gauthier.debra@outlook.fr
MAIL_SEND_CONFIRMATION=false
CORS_ORIGINS=https://gauthierdebra.vercel.app,https://*.vercel.app
PGHOST=<variable Railway Postgres>
PGPORT=<variable Railway Postgres>
PGDATABASE=<variable Railway Postgres>
PGUSER=<variable Railway Postgres>
PGPASSWORD=<variable Railway Postgres>
ADMIN_USERNAME=portfolio-admin
ADMIN_PASSWORD=un-vrai-mot-de-passe-long
```

Avec `onboarding@resend.dev`, Resend autorise seulement l'envoi vers l'adresse email associee a ton compte. Pour envoyer a d'autres destinataires, il faut verifier ton propre domaine dans Resend.

### 4. Récupérer l'URL
Railway → Settings → Domains → ton URL publique

## 🔗 Connecter le front Vue.js

Dans le front Vite, configure `.env` :

```bash
VITE_API_BASE_URL=https://TON-URL.railway.app
```

## 📬 Contact
gauthier.debra@outlook.fr
