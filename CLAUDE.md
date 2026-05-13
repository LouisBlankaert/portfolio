# Portfolio — CLAUDE.md

## Vue d'ensemble
Portfolio personnel de Louis Blankaert — développeur web fullstack. Application React avec Tailwind CSS, design dark/neon (cyan).

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
    Banner.js     # Hero section (nom, titre animé, CTA)
    About.js      # Section "À propos"
    Services.js   # Services proposés
    Work.js       # Grille des projets (données dans data/projects.js)
    Contact.js    # Formulaire de contact
    Header.js     # Navigation sticky
    Nav.js        # Nav mobile
  data/
    projects.js   # ← modifier ici pour ajouter/modifier les projets
    services.js   # ← modifier ici pour les services
  assets/         # Images des projets + logo
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
- `neon-cyan` / `neon-text` / `neon-text-cyan` — effets néon cyan
- `shadow-neonCyan` — box-shadow cyan au hover
- Design : fond noir `#0a0a0a`, accents cyan `#00f5ff`

## Dossier `src/assets/unused/`
Images des anciens projets (avant refonte) — à garder en archive, ne pas supprimer.
