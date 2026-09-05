# --- Étape 1 : construire le site ---
# React (Create React App) produit un site 100% statique : une fois construit,
# il n'y a plus de code JavaScript côté serveur à exécuter.
FROM node:22-alpine AS build

WORKDIR /app

# On copie d'abord les manifestes seuls : tant qu'ils ne changent pas, Docker
# réutilise le cache de l'installation et les déploiements suivants sont
# beaucoup plus rapides.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Les variables REACT_APP_* de Create React App sont figées DANS le fichier
# JavaScript au moment du build — elles doivent donc être fournies ici, et
# pas au démarrage du conteneur. Ce ne sont pas des secrets : le navigateur
# de chaque visiteur peut les lire (c'est le fonctionnement normal de
# Formspree, dont l'identifiant de formulaire est public).
ARG REACT_APP_FORMSPREE_ID
ENV REACT_APP_FORMSPREE_ID=$REACT_APP_FORMSPREE_ID

# CI=false : sinon Create React App transforme les avertissements ESLint en
# erreurs et le build échoue pour un import inutilisé.
RUN CI=false npm run build

# --- Étape 2 : servir les fichiers ---
# On repart d'une image nginx vide et on n'y copie que le résultat du build :
# ni Node, ni node_modules, ni le code source ne partent en production.
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# curl sert au healthcheck de Coolify, absent de l'image nginx par défaut
# (piège rencontré sur le projet gaine : activer le healthcheck sans curl
# coupait le site).
RUN apk add --no-cache curl

EXPOSE 80
