# PHARMACIE SABALI — Site Web Vitrine Officiel

> **Site vitrine moderne, responsive et professionnel conçu pour la PHARMACIE SABALI.**  
> Développé en **HTML5 sémantique**, **CSS3 moderne** et **JavaScript vanilla** (sans framework obligatoire ni dépendance externe lourde).

---

## 🌟 1. Présentation du projet

La plateforme web de la **PHARMACIE SABALI** offre une vitrine d'excellence pour l'officine :
- **Accueil complet** : mise en valeur de la pharmacie, présentation des services clés, aperçu des produits, section dédiée aux services sur place (**AMO, SARALI, Consultation**), appel à l'action et contact rapide.
- **À propos** : histoire de l'officine, valeurs éthiques & déontologiques, trombinoscope de l'équipe et galerie photos interactive avec visionneuse grand format (**Lightbox**).
- **Notre expertise** : 6 domaines d'intervention clés, engagement pour la sécurité et la traçabilité du médicament, et Foire Aux Questions (FAQ) interactive sous forme d'accordéon.
- **Nos produits** : catalogue de 18 produits répartis sur 6 catégories (3 produits par catégorie), filtres dynamiques en JavaScript, recherche textuelle en temps réel, modale détaillée et bouton de demande directe sur WhatsApp.
- **Nos contacts** : coordonnées complètes (téléphone, WhatsApp, email, adresse, horaires), formulaire interactif avec validation en temps réel côté client, carte de localisation OpenStreetMap intégrée et numéros d'urgence.

---

## 📁 2. Arborescence du projet

```text
pharmacie/
├── index.html                  # Page d'accueil principale
├── a-propos.html               # Page À propos (Histoire, Équipe, Valeurs, Galerie Lightbox)
├── expertise.html              # Page Notre expertise (Domaines de compétences, FAQ)
├── produits.html               # Page Nos produits (Catalogue interactif, filtres, recherche)
├── contact.html                # Page Nos contacts (Coordonnées, Formulaire, Carte)
├── favicon.svg                 # Icône de favori SVG haute résolution
├── favicon.ico                 # Icône de favori standard
├── css/
│   └── style.css               # Feuille de style principale (Design system, responsive, animations)
├── js/
│   └── main.js                 # Script principal (Catalogue, Lightbox, filtres, validation, WhatsApp)
├── images/
│   ├── logo/
│   │   └── logo.svg            # Logo vectoriel officiel de la Pharmacie SABALI
│   ├── pharmacie/
│   │   ├── hero.jpg            # Photo principale haute résolution de l'officine
│   │   └── interieur.jpg       # Vue des rayonnages et de l'espace parapharmacie
│   ├── equipe/
│   │   ├── pharmacien-titulaire.jpg    # Photo du Pharmacien Titulaire
│   │   ├── pharmacienne-adjointe.jpg   # Photo de la Pharmacienne Adjointe
│   │   ├── preparateur.svg             # Avatar Préparateur en pharmacie
│   │   └── conseillere.svg             # Avatar Conseillère dermo-cosmétique
│   ├── produits/               # Visuels vectoriels des 18 produits et des 6 catégories
│   ├── services/
│   │   └── consultation.jpg    # Photo d'illustration espace consultation & conseil
│   └── galerie/                # Visuels haute définition pour la galerie Lightbox (galerie-1 à 6)
└── README.md                   # Guide complet d'utilisation et de personnalisation
```

---

## 🚀 3. Instructions de lancement

Le projet est entièrement autonome et ne nécessite aucune installation de paquets `npm` ou de serveur complexe.

### Option A — Ouverture directe (Local)
1. Double-cliquez simplement sur le fichier `index.html` pour l'ouvrir dans votre navigateur web favori (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
2. Toutes les pages sont interconnectées via des chemins relatifs et fonctionnent immédiatement.

### Option B — Avec Live Server (VS Code / Éditeur)
1. Ouvrez le dossier dans VS Code ou votre IDE.
2. Faites un clic droit sur `index.html` et sélectionnez **« Open with Live Server »**.
3. Le site sera disponible à l'adresse locale `http://127.0.0.1:5500/index.html`.

---

## ⚙️ 4. Guide de personnalisation pas-à-pas

Toutes les données temporaires de démonstration ont été balisées avec des placeholders clairement identifiables. Voici comment les mettre à jour facilement :

### 4.1. Modifier les coordonnées et le numéro WhatsApp (Centralisé)
Ouvrez le fichier `js/main.js`. En haut du fichier, modifiez l'objet `PHARMACIE_CONFIG` :

```javascript
const PHARMACIE_CONFIG = {
  nom: "PHARMACIE SABALI",
  telephone: "+223 20 XX XX XX",              // Remplacer par le numéro de téléphone réel
  whatsapp: "22370000000",                    // Remplacer par le numéro WhatsApp (avec indicatif pays, sans le signe +)
  email: "contact@pharmacie-sabali.com",       // Remplacer par l'adresse email officielle
  adresse: "Rue 123, Porte 456, Quartier Sabali, Bamako", // Remplacer par l'adresse physique exacte
  googleMapsUrl: "https://maps.google.com/?q=Pharmacie+Sabali", // Lien d'itinéraire Google Maps
  horairesSemaine: "Lundi au Samedi : 08h00 – 22h00",
  horairesDimanche: "Dimanche & Jours fériés : Garde selon rotation (24h/24)"
};
```
*Note : Tous les boutons WhatsApp du site, les liens de contact et l'ouverture d'itinéraire utiliseront automatiquement ces nouvelles informations.*

### 4.2. Modifier ou ajouter des produits au catalogue
Dans `js/main.js`, le tableau `PRODUCTS_DATA` contient la liste de tous les articles.  
Pour modifier un produit existant ou en ajouter un nouveau :

```javascript
{
  id: "mon-produit-1",
  category: "medicaments", // "medicaments", "parapharmacie", "hygiene", "bebe", "materiel", "bien-etre"
  categoryName: "Médicaments",
  title: "Nom du produit",
  shortDesc: "Courte description visible sur la carte du catalogue.",
  fullDesc: "Description complète affichée dans la modale d'information.",
  precautions: "Conseils d'utilisation et contre-indications du pharmacien.",
  image: "images/produits/votre-image.jpg",
  badge: "Conseil Officinal"
}
```
Les chemins et extensions doivent respecter exactement la casse des noms de fichiers, notamment sur GitHub Pages (Linux). Après l’ajout ou le remplacement d’une image, publiez le fichier image et la modification de `js/main.js` dans le même commit.

### 4.3. Remplacer les photos et le logo
- **Logo** : Remplacez `images/logo/logo.svg` par votre fichier de logo officiel (format SVG ou PNG haute définition).
- **Façade et intérieur de la pharmacie** : Remplacez `images/pharmacie/hero.jpg` et `images/pharmacie/interieur.jpg` par vos véritables photos d'officine.
- **Photos de l'équipe** : Déposez les portraits des membres dans le dossier `images/equipe/`.
- **Galerie photos** : Remplacez les images `images/galerie/galerie-1.jpg` à `galerie-6.jpg`.

### 4.4. Connecter le formulaire de contact à un serveur / API
Le formulaire est actuellement géré côté client avec une simulation de confirmation et un renvoi vers WhatsApp. Pour le brancher sur un serveur de messagerie :
- **Solution sans backend (ex : Formspree / EmailJS)** : Remplacez l'action du `<form>` dans `contact.html` par l'URL fournie par le service (ex: `action="https://formspree.io/f/VOTRE_ID"`).
- **Backend PHP ou Node.js** : Modifiez l'écouteur d'événement `submit` dans `js/main.js` pour envoyer une requête `fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })`.

---

## 🛡️ 5. Conformité & Avertissements légaux
- **Médicaments sous ordonnance** : Conformément à la législation pharmaceutique, aucun achat ni paiement en ligne n'est permis pour les médicaments sur cette version vitrine. La dispensation s'effectue en officine physique sur ordonnance médicale valide.
- **Placeholders de démonstration** : Les noms des professionnels, dates et coordonnées temporaires sont des démonstrateurs à remplacer par les données réelles de l'établissement.

---

## 🎨 6. Charte graphique & Technologies
- **Palette de couleurs** :
  - Vert pharmaceutique : `#059669` (hover: `#047857`, subtle: `#ecfdf5`)
  - Bleu médical : `#0284c7` (hover: `#0369a1`)
  - Vert WhatsApp : `#25d366`
  - Fond de page : `#f8fafc`
  - Typographie : *Plus Jakarta Sans* (textes courants) & *Outfit* (titres)
- **Normes** : W3C HTML5 sémantique, CSS3 Flexbox & CSS Grid, Mobile-First responsive, WCAG Accessibilité (contrastes soignés et navigation au clavier).

---

*Version 1.0 — Base de développement HTML / CSS / JavaScript pour la Pharmacie SABALI.*
