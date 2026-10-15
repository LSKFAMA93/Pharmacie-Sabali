/**
 * PHARMACIE SABALI — SCRIPT PRINCIPAL JAVASCRIPT
 * Version 1.0 — Vanilla JS sans dépendance
 * Conçu selon le Cahier des Charges
 */

// ==========================================================================
// 1. CONFIGURATION CENTRALISÉE & PLACEHOLDERS MODIFIABLES
// ==========================================================================
const PHARMACIE_CONFIG = {
  nom: "PHARMACIE SABALI",
  telephone: "+223 77 25 52 42",
  telephoneLink: "+22377255242",
  whatsapp: "22391033837",
  whatsappDisplay: "+223 91 03 38 37",
  email: "pharmaciesabali223@gmail.com",
  adresse: "BACO DJICORONI RUE 636, BAMAKO",
  googleMapsUrl: "https://www.google.com/maps/place/Pharmacie+Sabali/@12.5987037,-8.0312152,17z",
  horairesSemaine: "Lundi au Jeudi : 08h15 – 22h30 | Vendredi : 08h30 – 22h30 | Samedi : 08h15 – 22h30",
  horairesDimanche: "Dimanche : 10h00 – 20h00"
};

// ==========================================================================
// 2. DONNÉES DU CATALOGUE DE PRODUITS (EXACTEMENT 3 PAR CATÉGORIE)
// ==========================================================================
const PRODUCTS_DATA = [
  // --- Médicaments ---
  {
    id: "med-1",
    category: "medicaments",
    categoryName: "Médicaments",
    title: "Paracétamol 500mg / 1g",
    shortDesc: "Antalgique et antipyrétique de référence pour soulager douleurs d'intensité légère à modérée et fièvres.",
    fullDesc: "Formulation comprimés sous blister. Indiqué dans le traitement symptomatique des céphalées, états grippaux, douleurs dentaires et courbatures. Posologie et espacement des prises à respecter rigoureusement.",
    precautions: "Respecter la dose maximale journalière. Ne pas associer à d'autres médicaments contenant du paracétamol.",
    image: "images/produits/prod-paracetamol.JPG",
    badge: "Conseil Officinal"
  },
  {
    id: "med-2",
    category: "medicaments",
    categoryName: "Médicaments",
    title: "Solution Réhydratation Orale (SRO)",
    shortDesc: "Sachets de sels de réhydratation indispensables pour compenser les pertes électrolytiques.",
    fullDesc: "Préparation hydro-électrolytique recommandée par l'OMS pour la prévention et la prise en charge précoce des déshydratations aiguës consécutives aux diarrhées et vomissements.",
    precautions: "À dissoudre dans exactement 1 litre d'eau potable. Conserver la solution préparée 24h maximum.",
    image: "images/produits/prod-sro.jpg",
    badge: "Essentiel Santé"
  },
  {
    id: "med-3",
    category: "medicaments",
    categoryName: "Médicaments",
    title: "Sirop Voies Respiratoires",
    shortDesc: "Sirop adoucissant pour apaiser les irritations de la gorge et favoriser le confort respiratoire.",
    fullDesc: "Formule apaisante adaptée aux affections bronchiques courantes et toux d'irritation. Aide à fluidifier les sécrétions et procure un soulagement immédiat des muqueuses.",
    precautions: "Demandez conseil pour adapter le traitement selon le type de toux (sèche ou productive).",
    image: "images/produits/prod-sirop.jpg",
    badge: "Conseil Officinal"
  },

  // --- Parapharmacie ---
  {
    id: "para-1",
    category: "parapharmacie",
    categoryName: "Parapharmacie",
    title: "Eau Thermale Apaisante",
    shortDesc: "Brume d'eau thermale pure riche en oligo-éléments pour calmer les rougeurs et peaux sensibles.",
    fullDesc: "Soin quotidien naturel, apaisant, anti-irritant et adoucissant. Idéal après une exposition solaire, un acte dermatologique ou pour rafraîchir le teint en cours de journée.",
    precautions: "Pulvériser en fine brume, laisser agir 2 à 3 minutes puis sécher délicatement sans frotter.",
    image: "images/produits/prod-eau-thermale.jpg",
    badge: "Dermo-soin"
  },
  {
    id: "para-2",
    category: "parapharmacie",
    categoryName: "Parapharmacie",
    title: "Solaire SPF 50+ Haute Protection",
    shortDesc: "Protection solaire dermatologique très haute protection à large spectre UVA/UVB.",
    fullDesc: "Texture fluide invisible, résistante à l'eau et formulée pour les peaux sensibles et intolérantes au soleil. Prévient les taches pigmentaires et le vieillissement cutané prématuré.",
    precautions: "Appliquer généreusement avant toute exposition et renouveler toutes les deux heures.",
    image: "images/produits/prod-creme-solaire.jpg",
    badge: "Protection Solaire"
  },
  {
    id: "para-3",
    category: "parapharmacie",
    categoryName: "Parapharmacie",
    title: "Sérum Acide Hyaluronique",
    shortDesc: "Concentré hydratant et repulpant intensif pour tous types de peaux, même déshydratées.",
    fullDesc: "Formule hautement concentrée en acide hyaluronique pur de différents poids moléculaires pour agir en surface et en profondeur. Restaure l'élasticité cutanée et l'éclat.",
    precautions: "Appliquer matin et soir quelques gouttes sur visage propre avant votre crème de jour.",
    image: "images/produits/prod-serum.jpg",
    badge: "Éclat & Hydratation"
  },

  // --- Hygiène et soins ---
  {
    id: "hyg-1",
    category: "hygiene",
    categoryName: "Hygiène et soins",
    title: "Gel Lavant Dermatologique Doux",
    shortDesc: "Nettoyant sans savon au pH physiologique formulé pour préserver le film hydrolipidique.",
    fullDesc: "Hygiène quotidienne du visage et du corps pour toute la famille. Nettoie en douceur sans dessécher et prévient les sensations de tiraillement et d'inconfort cutané.",
    precautions: "Faire mousser sur peau humide, rincer abondamment à l'eau claire.",
    image: "images/produits/prod-gel-lavant.jpg",
    badge: "Tolérance Haute"
  },
  {
    id: "hyg-2",
    category: "hygiene",
    categoryName: "Hygiène et soins",
    title: "Solution Hydroalcoolique Antiseptique",
    shortDesc: "Solution désinfectante pour l'hygiène et l'antisepsie rapide des mains par friction.",
    fullDesc: "Activité bactéricide, fongicide et virucide conforme aux normes hospitalières. Enrichie en agents glycérinés hydratants pour respecter les épidermes sensibles.",
    precautions: "Frotter les mains jusqu'à séchage complet. Ne pas appliquer sur peau lésée.",
    image: "images/produits/prod-solution-hydroalcoolique.jpg",
    badge: "Hygiène & Sécurité"
  },
  {
    id: "hyg-3",
    category: "hygiene",
    categoryName: "Hygiène et soins",
    title: "Dentifrice Protection Complète Émail",
    shortDesc: "Pâte dentifrice fluorée renforçant l'émail et protégeant contre la sensibilité dentaire.",
    fullDesc: "Formule cliniquement testée qui reminéralise l'émail dentaire et prévient la formation de la plaque bactérienne tout en apaisant les gencives sensibles.",
    precautions: "Brossage régulier après chaque repas pendant deux minutes. Utiliser une brosse souple.",
    image: "images/produits/prod-dentifrice.jpg",
    badge: "Santé Bucco-dentaire"
  },

  // --- Bébé ---
  {
    id: "bebe-1",
    category: "bebe",
    categoryName: "Bébé & Maternité",
    title: "Lait Infantile 1er Âge",
    shortDesc: "Formule infantile de relais et de croissance complète adaptée aux besoins nutritionnels dès la naissance.",
    fullDesc: "Apport équilibré en protéines, acides gras essentiels (DHA), vitamines et oligo-éléments essentiels au bon développement psychomoteur et immunitaire du nourrisson.",
    precautions: "Le lait maternel est l'aliment idéal du nourrisson. Préparation rigoureuse du biberon requise.",
    image: "images/produits/prod-lait-infantile.jpg",
    badge: "Nutrition Bébé"
  },
  {
    id: "bebe-2",
    category: "bebe",
    categoryName: "Bébé & Maternité",
    title: "Liniment Oléo-Calcaire Bio",
    shortDesc: "Soin nettoyant et protecteur traditionnel à base d'huile d'olive pour le change de bébé.",
    fullDesc: "Formule hypoallergénique sans parfum ni conservateur. Laisse un film lipidique protecteur qui isole l'épiderme fessier de l'humidité et de l'acidité des selles et urines.",
    precautions: "Agiter avant emploi. Appliquer à l'aide d'un coton doux. Ne nécessite aucun rinçage.",
    image: "images/produits/prod-liniment.jpg",
    badge: "Bio & Naturel"
  },
  {
    id: "bebe-3",
    category: "bebe",
    categoryName: "Bébé & Maternité",
    title: "Eau Nettoyante Douce Sans Rinçage",
    shortDesc: "Eau micellaire pure formulée spécialement pour la toilette délicate du nourrisson.",
    fullDesc: "Élimine efficacement et en toute douceur les impuretés du visage et du corps de bébé. Respecte la barrière cutanée encore immature grâce à ses extraits apaisants.",
    precautions: "Appliquer délicatement avec un coton propre jusqu'à propreté parfaite de la peau.",
    image: "images/produits/prod-eau-bebe.jpg",
    badge: "Toilette Douceur"
  },

  // --- Matériel médical ---
  {
    id: "mat-1",
    category: "materiel",
    categoryName: "Matériel médical",
    title: "Tensiomètre Électronique Bras",
    shortDesc: "Dispositif médical certifié pour l'automesure précise de la pression artérielle et du pouls.",
    fullDesc: "Grand écran rétroéclairé, indicateur visuel selon les seuils OMS, détection d'arythmie cardiaque et mémoire multipatient pour un suivi fiable à domicile.",
    precautions: "Prendre les mesures au repos complet, en position assise, sans parler.",
    image: "images/produits/prod-tensiometre.jpg",
    badge: "Automesure Médicale"
  },
  {
    id: "mat-2",
    category: "materiel",
    categoryName: "Matériel médical",
    title: "Thermomètre Infrarouge Sans Contact",
    shortDesc: "Prise de température instantanée et précise sans contact cutané, idéal enfants et adultes.",
    fullDesc: "Technologie infrarouge médicale haute sensibilité. Alarme sonore et chromatique en cas de fièvre. Permet également la mesure de température de biberon ou d'ambiance.",
    precautions: "Positionner le capteur à 3-5 cm du front propre et sec pour une fiabilité maximale.",
    image: "images/produits/prod-thermometre.jpg",
    badge: "Diagnostic Rapide"
  },
  {
    id: "mat-3",
    category: "materiel",
    categoryName: "Matériel médical",
    title: "Oxymètre de Pouls Digital",
    shortDesc: "Appareil compact de mesure de la saturation sanguine en oxygène (SpO2) et fréquence cardiaque.",
    fullDesc: "Mesure non invasive par pince de doigt. Écran OLED multidirectionnel avec affichage de la courbe pléthysmographique. Arrêt automatique après retrait du doigt.",
    precautions: "Mesurer sur un doigt tiède sans vernis ni ongle artificiel.",
    image: "images/produits/prod-oxymetre.jpg",
    badge: "Surveillance Vitale"
  },

  // --- Bien-être & Nutrition ---
  {
    id: "bie-1",
    category: "bien-etre",
    categoryName: "Bien-être & Nutrition",
    title: "Complexe Multivitamines & Minéraux",
    shortDesc: "Association complète de 12 vitamines et 8 minéraux pour soutenir la vitalité et l'immunité.",
    fullDesc: "Complément nutritionnel recommandé lors des changements de saison, périodes de fatigue passagère, surmenage professionnel ou convalescence.",
    precautions: "Ne dispense pas d'une alimentation variée et équilibrée. Ne pas dépasser la dose conseillée.",
    image: "images/produits/prod-multivitamines.jpg",
    badge: "Énergie & Vitalité"
  },
  {
    id: "bie-2",
    category: "bien-etre",
    categoryName: "Bien-être & Nutrition",
    title: "Magnésium Marin + Vitamine B6",
    shortDesc: "Soutien du système nerveux, réduction de la fatigue musculaire et meilleure gestion du stress.",
    fullDesc: "Formule d'origine marine hautement biodisponible associée à la vitamine B6 pour faciliter l'assimilation cellulaire et procurer une détente neuromusculaire durable.",
    precautions: "Cure recommandée de 30 à 60 jours. Consulter en cas d'insuffisance rénale.",
    image: "images/produits/prod-magnesium.jpg",
    badge: "Anti-fatigue & Zen"
  },
  {
    id: "bie-3",
    category: "bien-etre",
    categoryName: "Bien-être & Nutrition",
    title: "Infusion Sommeil & Relaxation",
    shortDesc: "Mélange de plantes traditionnelles sélectionnées pour favoriser l'endormissement naturel.",
    fullDesc: "Tisane biologique formulée à base de camomille, mélisse, tilleul et passiflore. Favorise un repos réparateur sans risque d'accoutumance ni somnolence au réveil.",
    precautions: "Laisser infuser 5 à 10 minutes dans une eau frémissante avant le coucher.",
    image: "images/produits/prod-infusion.jpg",
    badge: "Plantes & Sérénité"
  }
];

// ==========================================================================
// 3. INITIALISATION ET GESTION DU HEADER & NAVIGATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppLinks();
  initMobileMenu();
  initHeaderScroll();
  initBackToTop();
  initActiveNavigation();
  initScrollAnimations();

  // Modules spécifiques selon la page
  initProductsPage();
  initGalleryLightbox();
  initFaqAccordion();
  initContactForms();
});

// Configuration dynamique des liens WhatsApp
function initWhatsAppLinks() {
  const waButtons = document.querySelectorAll("[data-wa-action], .btn-whatsapp, .floating-wa-btn");
  waButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Si le bouton a déjà un lien href personnalisé, le respecter
      const customHref = btn.getAttribute("href");
      if (customHref && customHref !== "#" && !customHref.startsWith("javascript:")) {
        return;
      }
      e.preventDefault();
      const action = btn.getAttribute("data-wa-action") || "contact";
      let message = "Bonjour Pharmacie SABALI, je vous contacte depuis votre site internet.";

      if (action === "ask-info") {
        message = "Bonjour Pharmacie SABALI, je souhaiterais obtenir des informations sur vos services et disponibilités.";
      } else if (action === "product") {
        const prodName = btn.getAttribute("data-product-name") || "un produit";
        message = `Bonjour Pharmacie SABALI, je souhaiterais me renseigner sur la disponibilité du produit : ${prodName}.`;
      } else if (action === "ordonnance") {
        message = "Bonjour Pharmacie SABALI, je souhaiterais vous transmettre une ordonnance ou demander un conseil pharmaceutique.";
      }

      const waUrl = `https://wa.me/${PHARMACIE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  });
}

// Menu Mobile Hamburger
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const drawer = document.querySelector(".mobile-menu-drawer");

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    drawer.classList.add("open");
    toggleBtn.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    drawer.classList.remove("open");
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", toggleMenu);

  // Fermeture lors d'un clic sur un lien du menu
  const navLinks = drawer.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Fermeture si la fenêtre repasse en mode desktop (> 768px)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && drawer.classList.contains("open")) {
      closeMenu();
    }
  });

  // Touche Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeMenu();
    }
  });
}

// Effet de header au scroll
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

// Bouton retour en haut de page
function initBackToTop() {
  const btn = document.querySelector(".scroll-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Détection de la page active dans le menu
function initActiveNavigation() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll(".nav-link");

  allNavLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPath = href.split("/").pop();

    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ==========================================================================
// 4. MODULE PAGE PRODUITS : FILTRAGE, RECHERCHE & MODALE DÉTAILLÉE
// ==========================================================================
function initProductsPage() {
  const productsGrid = document.getElementById("productsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("productSearchInput");

  if (!productsGrid) return;

  let currentCategory = "all";
  let currentSearchQuery = "";

  // Vérifier si un paramètre d'URL "cat" est fourni (ex: produits.html?cat=medicaments)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("cat");
  if (catParam) {
    currentCategory = catParam;
    filterBtns.forEach(btn => {
      if (btn.getAttribute("data-category") === catParam) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Rendu initial
  renderProducts();

  // Événements sur les boutons de filtrage
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Événement sur la barre de recherche
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  function renderProducts() {
    let filtered = PRODUCTS_DATA.filter(item => {
      const matchCat = currentCategory === "all" || item.category === currentCategory;
      const matchQuery = currentSearchQuery === "" ||
        item.title.toLowerCase().includes(currentSearchQuery) ||
        item.shortDesc.toLowerCase().includes(currentSearchQuery) ||
        item.categoryName.toLowerCase().includes(currentSearchQuery);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="margin-bottom: 0.5rem;">Aucun produit trouvé</h3>
          <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 1.5rem;">
            Aucun résultat ne correspond à votre recherche. N'hésitez pas à nous contacter directement sur WhatsApp pour toute demande spécifique.
          </p>
          <button class="btn btn-primary" onclick="resetProductFilters()">Réinitialiser les filtres</button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(product => `
      <article class="product-card fade-in-element is-visible" data-id="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          <span class="product-category-tag">${product.categoryName}</span>
        </div>
        <div class="product-content">
          <div style="margin-bottom: 0.5rem;">
            <span class="rx-indicator">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M2 12h20"/></svg>
              ${product.badge}
            </span>
          </div>
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.shortDesc}</p>
          <div class="product-footer">
            <button class="btn btn-secondary btn-sm btn-product-details" data-id="${product.id}">
              En savoir plus
            </button>
            <button class="btn btn-whatsapp btn-sm btn-product-wa" data-title="${product.title}" title="Demander ce produit sur WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.963 1.2 0.662.59 1.22.772 1.393.859.173.087.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/></svg>
              WhatsApp
            </button>
          </div>
        </div>
      </article>
    `).join("");

    // Attacher les clics sur les boutons détails
    document.querySelectorAll(".btn-product-details").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openProductModal(id);
      });
    });

    // Attacher les clics sur WhatsApp pour chaque produit
    document.querySelectorAll(".btn-product-wa").forEach(btn => {
      btn.addEventListener("click", () => {
        const title = btn.getAttribute("data-title");
        const msg = `Bonjour Pharmacie SABALI, je souhaiterais savoir si le produit "${title}" est disponible en officine.`;
        window.open(`https://wa.me/${PHARMACIE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
      });
    });
  }

  // Fonction globale pour réinitialiser
  window.resetProductFilters = function () {
    currentCategory = "all";
    currentSearchQuery = "";
    if (searchInput) searchInput.value = "";
    filterBtns.forEach(b => {
      if (b.getAttribute("data-category") === "all") b.classList.add("active");
      else b.classList.remove("active");
    });
    renderProducts();
  };
}

// Modale de détail du produit
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById("productModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "productModal";
    modal.className = "product-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="product-modal-dialog">
      <button class="modal-close-btn" id="modalCloseBtn" aria-label="Fermer la fenêtre">&times;</button>
      <div class="product-modal-img">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-modal-body">
        <span class="product-category-tag" style="position: static; display: inline-block; width: fit-content; margin-bottom: 0.75rem;">
          ${product.categoryName}
        </span>
        <h2 style="font-size: 1.5rem; margin-bottom: 0.75rem;">${product.title}</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
          ${product.fullDesc}
        </p>
        <div style="background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; border-left: 3px solid var(--secondary);">
          <div style="font-weight: 700; font-size: 0.85rem; color: var(--secondary-dark); margin-bottom: 0.25rem;">CONSEIL & PRÉCAUTIONS</div>
          <div style="font-size: 0.875rem; color: var(--text-muted);">${product.precautions}</div>
        </div>
        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.75rem;">
          <button class="btn btn-whatsapp" id="modalWaBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.963 1.2 0.662.59 1.22.772 1.393.859.173.087.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/></svg>
            Demander ce produit sur WhatsApp
          </button>
          <div style="font-size: 0.775rem; text-align: center; color: var(--text-light);">
            * Délivrance soumise à ordonnance médicale pour les médicaments réglementés.
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Actions
  document.getElementById("modalCloseBtn").addEventListener("click", closeProductModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProductModal();
  });

  document.getElementById("modalWaBtn").addEventListener("click", () => {
    const msg = `Bonjour Pharmacie SABALI, je souhaiterais me renseigner sur le produit "${product.title}" (Catégorie : ${product.categoryName}).`;
    window.open(`https://wa.me/${PHARMACIE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  });

  document.addEventListener("keydown", handleModalKey);
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleModalKey);
  }
}

function handleModalKey(e) {
  if (e.key === "Escape") closeProductModal();
}

// ==========================================================================
// 5. MODULE GALERIE & VISIONNEUSE LIGHTBOX (PAGE À PROPOS)
// ==========================================================================
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  if (galleryItems.length === 0) return;

  const imagesList = Array.from(galleryItems).map(item => {
    const img = item.querySelector("img");
    const caption = item.getAttribute("data-caption") || img.getAttribute("alt") || "Pharmacie SABALI";
    return {
      src: img.getAttribute("src"),
      caption: caption
    };
  });

  let currentIndex = 0;

  // Création dynamique de la modale Lightbox si absente
  let lightbox = document.getElementById("galleryLightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "galleryLightbox";
    lightbox.className = "lightbox-modal";
    lightbox.innerHTML = `
      <button class="lightbox-close" id="lightboxClose" aria-label="Fermer la visionneuse">&times;</button>
      <button class="lightbox-prev" id="lightboxPrev" aria-label="Image précédente">&#10094;</button>
      <button class="lightbox-next" id="lightboxNext" aria-label="Image suivante">&#10095;</button>
      <div class="lightbox-content">
        <img class="lightbox-img" id="lightboxImg" src="" alt="Vue agrandie">
        <div class="lightbox-caption" id="lightboxCaption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  function showImage(index) {
    currentIndex = (index + imagesList.length) % imagesList.length;
    lightboxImg.src = imagesList[currentIndex].src;
    lightboxCaption.textContent = imagesList[currentIndex].caption;
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleLightboxKeys);
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleLightboxKeys);
  }

  function handleLightboxKeys(e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
  nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// ==========================================================================
// 6. MODULE FAQ ACCORDÉON (PAGE NOTRE EXPERTISE)
// ==========================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Fermer tous les autres
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });

      // Basculer l'élément courant
      if (isActive) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// 7. MODULE FORMULAIRES DE CONTACT AVEC VALIDATION STRICTE
// ==========================================================================
function initContactForms() {
  const forms = document.querySelectorAll(".contact-form");
  if (forms.length === 0) return;

  forms.forEach(form => {
    const nomInput = form.querySelector('[name="nom"]');
    const telInput = form.querySelector('[name="telephone"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');

    // Validation à la frappe
    if (nomInput) nomInput.addEventListener("input", () => validateField(nomInput, val => val.trim().length >= 2, "Veuillez renseigner un nom valide (au moins 2 caractères)."));
    if (telInput) telInput.addEventListener("input", () => validateField(telInput, val => /^[\d\s+\-().]{6,20}$/.test(val.trim()), "Veuillez indiquer un numéro de téléphone valide."));
    if (emailInput) emailInput.addEventListener("input", () => validateField(emailInput, val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()), "Veuillez saisir une adresse email valide."));
    if (messageInput) messageInput.addEventListener("input", () => validateField(messageInput, val => val.trim().length >= 10, "Votre message doit contenir au moins 10 caractères."));

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;

      if (nomInput && !validateField(nomInput, val => val.trim().length >= 2, "Veuillez renseigner votre nom complet.")) isValid = false;
      if (telInput && !validateField(telInput, val => /^[\d\s+\-().]{6,20}$/.test(val.trim()), "Veuillez indiquer un numéro de téléphone valide.")) isValid = false;
      if (emailInput && !validateField(emailInput, val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()), "Veuillez saisir une adresse email valide.")) isValid = false;
      if (messageInput && !validateField(messageInput, val => val.trim().length >= 10, "Votre message doit contenir au moins 10 caractères.")) isValid = false;

      if (!isValid) {
        showToast("Veuillez corriger les champs en rouge avant d'envoyer.", "danger");
        return;
      }

      // Préparation du message simulé
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "Envoyer";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Traitement en cours...`;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        form.reset();
        form.querySelectorAll(".is-valid, .is-invalid").forEach(el => {
          el.classList.remove("is-valid", "is-invalid");
        });

        // Affichage confirmation modale / Toast
        showSuccessModal();
      }, 700);
    });
  });

  function validateField(input, testFn, errorMsg) {
    const value = input.value;
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains("invalid-feedback")) {
      feedback = document.createElement("div");
      feedback.className = "invalid-feedback";
      input.parentNode.insertBefore(feedback, input.nextSibling);
    }

    if (testFn(value)) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedback.textContent = "";
      return true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedback.textContent = errorMsg;
      return false;
    }
  }
}

// Notification Toast légère
function showToast(message, type = "info") {
  let toast = document.getElementById("toastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotification";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  const icon = type === "danger" ? "⚠️" : (type === "success" ? "✅" : "ℹ️");
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Modale de confirmation de soumission sans backend
function showSuccessModal() {
  let modal = document.getElementById("successModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "successModal";
    modal.className = "product-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="product-modal-dialog" style="max-width: 520px; display: block; padding: 2.5rem; text-align: center;">
      <div style="width: 64px; height: 64px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem;">
        ✓
      </div>
      <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem;">Message bien reçu !</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
        Merci d'avoir contacté la <strong>PHARMACIE SABALI</strong>. Dans cette version de démonstration sans serveur, la validation côté navigateur a réussi.
      </p>
      <div style="background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-md); font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.75rem;">
        Pour toute demande urgente, vous pouvez nous joindre instantanément par WhatsApp ou téléphone.
      </div>
      <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-whatsapp btn-sm" onclick="window.open('https://wa.me/${PHARMACIE_CONFIG.whatsapp}', '_blank')">
          Continuer sur WhatsApp
        </button>
        <button class="btn btn-secondary btn-sm" onclick="closeSuccessModal()">
          Fermer
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  window.closeSuccessModal = function () {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  modal.addEventListener("click", (e) => {
    if (e.target === modal) window.closeSuccessModal();
  });
}

// ==========================================================================
// 8. ANIMATIONS FLUIDES AU DÉFILEMENT (INTERSECTION OBSERVER)
// ==========================================================================
function initScrollAnimations() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in-element").forEach(el => {
    observer.observe(el);
  });
}
