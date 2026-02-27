# Le Vieux Comptoir 🍷

Une landing page pour **Le Vieux Comptoir**, une authentique brasserie traditionnelle parisienne fondée en 1892. Ce projet web a été conçu pour offrir une expérience professionnelle, propre et moderne, avec des performances optimisées, tout en préservant l'esprit classique et chaleureux de l'établissement.

[� **Voir le site en ligne**](https://j-ned.github.io/le-vieu-comptoir/)

---

## 🌟 Fonctionnalités

- **Design Premium** : Charte graphique soignée avec des tons bordeaux, or et crème, sublimée par du glassmorphism et des animations fluides.
- **Performances Optimales** :
  - Composant natif `<Image />` d'Astro pour automatiquement redimensionner, compresser et servir les images au format WebP.
  - Hébergement local des polices d'écriture Google Fonts (`Playfair Display` et `Inter`) pour un score Lighthouse de performances maximisé, sans bloquage de rendu.
- **Sections Clés** : Hero dynamique, Histoire, Menu et cave, Fumoir à cigares, Système de réservation, Avis clients et Footer complet.
- **100% Responsive** : De l'affichage mobile au grand écran, l'expérience utilisateur reste homogène.

---

## 🛠️ Stack Technique

- **Framework** : [Astro v5](https://astro.build/) - Générateur de site statique ultra-rapide.
- **Style** : [Tailwind CSS v4](https://tailwindcss.com/) - Approche utilitaire pour un design sur mesure.
- **Hébergement** : [GitHub Pages](https://pages.github.com/) - Déploiement automatisé avec GitHub Actions.

---

## 🚀 Lancer le projet localement

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

```sh
# 1. Cloner le dépôt
git clone https://github.com/djoudj-dev/le-vieu-comptoir.git
cd le-vieux-comptoir

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le projet sera accessible sur `http://localhost:4321/`.

---

## 🧞 Commandes utiles

Toutes les commandes doivent être exécutées depuis la racine du projet.

| Commande          | Action                                                   |
| :---------------- | :------------------------------------------------------- |
| `npm install`     | Installe toutes les dépendances                          |
| `npm run dev`     | Lance le serveur de développement à `localhost:4321`     |
| `npm run build`   | Compile et optimise le site pour la production (`dist/`) |
| `npm run preview` | Permet de visualiser le build local avant déploiement    |
| `npm run lint`    | Vérifie la syntaxe ESLint du code                        |
| `npm run format`  | Applique les règles de formatage Prettier                |

---

## 📂 Structure du Projet

```text
/
├── .github/workflows/deploy.yml # Pipeline CI/CD GitHub Pages
├── public/                      # Fichiers statiques bruts (favicon, etc.)
├── src/
│   ├── assets/                  # Images sources prêtes à être optimisées par Astro
│   ├── components/              # Composants UI (Hero, Navbar, About, Menu, etc.)
│   ├── layouts/                 # Structure de la page avec import des polices locales
│   ├── pages/                   # Pages de routes (index.astro)
│   └── styles/                  # Feuille de style CSS globale (Tailwind)
├── astro.config.mjs             # Configuration principale d'Astro
├── eslint.config.mjs            # Configuration du linter
└── tailwind.config.mjs          # Configuration Tailwind
```

---

_Ce site a été pensé pour mettre en valeur le savoir-faire de la brasserie française tout en tirant parti des dernières avancées en matière de développement web moderne._
