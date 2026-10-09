# BTEC – BEST TECHNOLOGY CORPORATION

Site web de **BTEC Bénin**, entreprise basée à Cotonou (Mènontin), qui propose
recrutement, CVthèque, formations, communication, événementiel et services digitaux.

Le dépôt regroupe plusieurs espaces, écrits en HTML/CSS/JavaScript statiques
(Bootstrap 5) :

| Espace | Dossier / fichiers | Description |
|---|---|---|
| Site vitrine | `index.html`, `about.html`, `offres.html`, `cvtheque.html`, `pcjeb.html`, `event.html`, `contact.html` | Pages publiques et navigation principale. |
| Candidat / recruteur | `connexionCan.html`, `connexionRec.html`, `candidat.html`, `recruteur.html`, `can_dashboard.html`, `rec_dashboard.html`, `cv.html`, `formulaire_cv.html`, `parametres*.html`… | Tableaux de bord et formulaires (maquettes). |
| Projet CJEB | `pcjeb.html`, `connexion_cjeb.html`, `cjeb_bord.html` | Espace du projet CJEB. |
| BTEC Event | `btec_event/` | Billetterie, vote, profils. |
| Hôtesses | `hotesse/` | Catalogue et profils d'hôtesses. |
| Administration | `Admin/` | Back-office (template Bootstrap « Portal »). |
| Ressources | `css/`, `js/`, `img/`, `assets/`, `lib/` | Feuilles de style, scripts, images et bibliothèques. |

> **État actuel** : il s'agit d'un prototype front-end. Les formulaires de
> connexion, d'inscription et de contact ne sont pas encore reliés à un serveur,
> et l'espace d'administration n'est pas protégé par une authentification.

## Lancer le site en local

Aucune installation n'est nécessaire. Il suffit de servir le dossier avec un
serveur HTTP statique (les pages utilisent des chemins relatifs) :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

Les bibliothèques externes (jQuery, Bootstrap JS, FontAwesome, Google Fonts)
sont chargées depuis un CDN : une connexion internet est nécessaire.

## Structure

- `*.html` à la racine : pages du site vitrine et des espaces utilisateurs.
- `css/style.css` : feuille de style principale du site.
- `js/main.js` : scripts communs (spinner, navbar collante, bouton « retour en haut »).
- `img/` : images du site (optimisées en 1920 px maximum).
- `assets/logo/favicon.png` : icône du site.
- `lib/` : WOW.js, Owl Carousel, Animate.css, Tempus Dominus…

## Projet Angular (inutilisé)

Le dossier `src/` contient un squelette Angular 19 (SSR) généré par défaut. Il
n'est pas utilisé par le site actuel. Il peut être supprimé ou remplacé lorsque
la stratégie technique sera décidée.

## Contribuer

1. Travailler sur une branche dédiée, jamais directement sur `main`.
2. Vérifier les liens internes et l'affichage sur mobile avant de proposer une modification.
3. Optimiser les nouvelles images (largeur ≤ 1920 px, JPEG ≈ 80 %) avant de les ajouter.
