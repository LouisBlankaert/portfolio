# Portfolio — CLAUDE.md

## Vue d'ensemble
Portfolio personnel de Louis Blankaert. Application React avec Tailwind CSS, design dark inspiré de jamesmumo.vercel.app (accent jaune).

Positionnement (depuis la refonte alignée sur le CV) : **Software Engineering Student @ 42 Belgium** (cursus depuis avril 2026, 100% projets/peer-review, C/algo/systèmes) mis en avant en premier, **freelance web developer** (depuis mai 2025) en complément. Voir `~/Documents/CV/Louis_Blankaert_IT.pdf` comme source de vérité pour toute info bio/stack/expérience — ne pas réintroduire de chiffres non vérifiables (ex: années d'XP ou nombre de projets gonflés) sans les faire correspondre au CV.

## Stack
- **React 18** + **Create React App**
- **Tailwind CSS 3** (thème custom dans `tailwind.config.js`)
- **react-type-animation** — animation texte dans Banner
- **react-toastify** — notifications (Contact)
- **react-icons** — icônes
- **framer-motion** — animations (installé en devDep)

## Lancer le projet
```bash
npm start    # dev sur http://localhost:3000
npm run build
```

## Structure
```
src/
  components/
    Header.js         # Nav sticky top (logo LB, liens, CTA, menu mobile)
    Banner.js          # Hero (nom en font-display, rôle animé, rail social fixe, CTA)
    About.js            # À propos + grille de chips stack + stats (CountUp)
    Services.js          # "Skills & Tools" — grille icône+nom (données dans data/services.js)
    Work.js                # Grille des projets (données dans data/projects.js)
    Contact.js              # Formulaire (Formspree) + colonne socials/disponibilité
  data/
    projects.js   # ← modifier ici pour ajouter/modifier les projets
    services.js   # ← liste "Skills & Tools" : fusion CV (C, Python, Linux, Git...) + stack projets réels (React, Next.js, Tailwind, Flask, PostgreSQL...)
  assets/         # Images des projets + logo (logo.svg n'est plus utilisé par Header)
  utils/
```

## Ajouter un projet
Dans `src/data/projects.js` :
```js
{
  img: importedImage,   // null = affiche "Coming Soon"
  title: 'Nom du projet',
  category: 'Web Development' | 'E-Commerce' | 'SaaS',
  url: 'https://...',   // '#' si pas encore déployé
}
```
Ajouter l'image dans `src/assets/` et l'importer en haut du fichier. Les cartes font `h-56` (224px) avec `object-cover`.

## Projets actuels
| Projet | URL | Image | Statut |
|--------|-----|-------|--------|
| Babeelashes | www.babeelashes.be | babelash.jpg | Live |
| By OMS | byoms-production.up.railway.app | byoms.png | Live |
| Vyranos | web-production-c76b0.up.railway.app | vyranos.jpg | Live |
| My Moviz 2.0 | movie-tau-mocha.vercel.app | moviz2.png | Live |
| GFinance | — | manquant | Non déployé |
| Dashboard Trading | — | manquant | Non déployé |
| Agenda Louis | — | manquant | Non déployé |

## Thème Tailwind (couleurs importantes)
- Design inspiré de jamesmumo.vercel.app : fond quasi noir uni `#0a0a0a` (`bg-primary`), cartes `bg-card` (`#141414`), accent **jaune** `#ffd60a` (`text-accent` / `bg-accent`). Plus d'effets néon/glow (supprimés lors de la refonte).
- `font-display` (Fredoka) réservé au nom dans le Hero ; `font-tertiary` (Poppins) pour les titres `h2`/`h3` ; `font-primary`/`font-secondary` (Inter) pour le reste.
- Classes utilitaires dans `index.css` : `.btn` (plein jaune), `.btn-outline` (contour jaune), `.badge-pill` (label de section avec pastille), `.card` (surface commune des sections).

## Dossier `src/assets/unused/`
Images des anciens projets (avant refonte) — à garder en archive, ne pas supprimer.
