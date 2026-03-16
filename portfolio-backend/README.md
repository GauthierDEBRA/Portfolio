# Portfolio Backend — Gauthier DEBRA

API REST Spring Boot pour le formulaire de contact du portfolio.

## 🛠️ Stack
- **Java 17** + **Spring Boot 3.2**
- **PostgreSQL** (Railway)
- **JavaMailSender** (Outlook SMTP)
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
JDBC_DATABASE_URL=jdbc:postgresql://localhost:5432/portfolio
PGUSER=postgres
PGPASSWORD=postgres
MAIL_USERNAME=gauthier.debra@outlook.fr
MAIL_PASSWORD=ton_mot_de_passe_application
MAIL_TO=gauthier.debra@outlook.fr
CORS_ORIGINS=https://gauthierdebra.vercel.app,http://localhost:5173
ADMIN_USERNAME=portfolio-admin
ADMIN_PASSWORD=un-vrai-mot-de-passe-long
```

### 3. Mot de passe application Outlook
1. Va sur [account.microsoft.com/security](https://account.microsoft.com/security)
2. → Sécurité avancée → Mots de passe d'application
3. Génère un mot de passe pour "Portfolio Backend"
4. Mets-le dans `MAIL_PASSWORD`

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
MAIL_USERNAME=gauthier.debra@outlook.fr
MAIL_PASSWORD=ton_mot_de_passe_application
MAIL_TO=gauthier.debra@outlook.fr
CORS_ORIGINS=https://gauthierdebra.vercel.app
ADMIN_USERNAME=portfolio-admin
ADMIN_PASSWORD=un-vrai-mot-de-passe-long
```

### 4. Récupérer l'URL
Railway → Settings → Domains → ton URL publique

## 🔗 Connecter le front Vue.js

Dans le front Vite, configure `.env` :

```bash
VITE_API_BASE_URL=https://TON-URL.railway.app
```

## 📬 Contact
gauthier.debra@outlook.fr
