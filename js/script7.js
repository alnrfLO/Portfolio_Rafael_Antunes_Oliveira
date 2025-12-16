// Traductions fusionnées avec titres, textes et descriptions des projets
const translations = {
  fr: {
    navAccueil: "Accueil",
    navProjets: "Projets",
    navContact: "Contact",
    navAPropos: "À propos",
    navInfo: "Info",
    navCV: "CV",
    theme: '🎨 Thème',

    // PROJETS DÉVELOPPEMENT (ID 1-7) - Gardés pour la cohérence du script
    proj1title: "Script Python snake",
    proj1text: "Clicker pour Télécharger un fichier.zip contenant le Snake.",
    proj2title: "Script Python Tetris",
    proj2text: "Clicker pour Télécharger un fichier.zip contenant le Tetris",
    proj3title: "Script Python Pong",
    proj3text: "Clicker pour Télécharger un fichier.zip contenant le Pong",
    proj4title: "Script Python TicTacToe",
    proj4text: "Clicker pour Télécharger un fichier.zip contenant le TicTacToe.",
    proj5title: "Site HTML Responsive",
    proj5text: "Site web responsive et accessible réalisé en HTML/CSS/PHP.",
    proj6title: "Jeu en JS",
    proj6text: "Mini-jeu réalisé avec JavaScript.",
    proj7title: "Projet PHP",
    proj7text: "Projet en PHP et base de données.",
    
    // PROJETS GRAPHISME (ID 8 et +)
    proj8title: "Projet Illustrator",
    proj8text: "Création vectorielle et logo.",
    proj9title: "Projet Photoshop",
    proj9text: "Retouche d'image et photomontage.", 

    proj1desc: "Un jeu de serpent classique développé en Python avec Pygame.",
    proj2desc: "Une implémentation du jeu Tetris en Python.",
    proj3desc: "Le jeu Pong classique en Python.",
    proj4desc: "Le jeu du Morpion (Tic-Tac-Toe) en Python.",
    proj5desc: "Un site web professionnel et responsive réalisé dans le cadre du projet SAE203.",
    proj6desc: "Un mini-jeu interactif créé avec JavaScript vanilla.",
    proj7desc: "Description détaillée du projet PHP.",
    proj8desc: "Création d'un logo vectoriel et d'illustrations complexes avec Adobe Illustrator. Compétences en typographie et composition visuelle.",
    proj9desc: "Utilisation avancée d'Adobe Photoshop pour la retouche professionnelle et la création de photomontages. Maîtrise des calques, masques et effets spéciaux.",
    
    modalDownload: "Télécharger",
    modalVisit: "Visiter",
    modalClose: "Fermer",
    
    allRightsReserved: "Tous droits réservés",
    footerMentions: "Mentions Légales"
  },
  en: {
    // ... (Vos traductions en anglais)
    navAccueil: "Home",
    navProjets: "Projects",
    navContact: "Contact",
    navAPropos: "About",
    navInfo: "Info",
    navCV: "CV",
    theme: '🎨 Theme',
    proj8title: "Illustrator Project",
    proj8text: "Vector creation and logo design.",
    proj9title: "Photoshop Project",
    proj9text: "Image retouching and photo manipulation.",
    proj8desc: "Creation of a vector logo and complex illustrations using Adobe Illustrator. Skills in typography and visual composition.",
    proj9desc: "Advanced use of Adobe Photoshop for professional retouching and photomontage creation. Mastery of layers, masks, and special effects.",
    modalDownload: "Download",
    modalVisit: "Visit",
    modalClose: "Close",
    allRightsReserved: "All rights reserved",
    footerMentions: "Legal Notice"
  },
  pt: {
    // ... (Vos traductions en portugais)
    navAccueil: "Início",
    navProjets: "Projetos",
    navContact: "Contato",
    navAPropos: "Sobre",
    navInfo: "Info",
    navCV: "CV",
    theme: '🎨 Tema',
    proj8title: "Projeto Illustrator",
    proj8text: "Criação vetorial e logotipo.",
    proj9title: "Projeto Photoshop",
    proj9text: "Retoque de imagem e fotomontagem.",
    proj8desc: "Criação de um logotipo vetorial e ilustrações complexas usando Adobe Illustrator.",
    proj9desc: "Uso avançado do Adobe Photoshop para retoque profissional e criação de fotomontagens.",
    modalDownload: "Baixar",
    modalVisit: "Visitar",
    modalClose: "Fechar",
    allRightsReserved: "Todos os direitos reservados",
    footerMentions: "Aviso Legal"
  }
};
// ⚡ Détails des projets pour le modal et le carrousel
// ATTENTION : Pour éviter les erreurs 'File Not Found', l'image de couverture est dupliquée 3 fois.
// REMPLACER ces chemins plus tard par des captures d'écran réelles.
const projectDetails = {
  1: { images: ["../img/snake.png", "../img/snake.png", "../img/snake.png"], languages: ["Python", "Pygame"], download: "../downloads/snake.zip" },
  2: { images: ["../img/tetris.png", "../img/tetris.png", "../img/tetris.png"], languages: ["Python", "Pygame"], download: "../downloads/Tetris.zip" },
  3: { images: ["../img/pong.png", "../img/pong.png", "../img/pong.png"], languages: ["Python", "Pygame"], download: "../downloads/Pong.zip" },
  4: { images: ["../img/tictactoe.png", "../img/tictactoe.png", "../img/tictactoe.png"], languages: ["Python"], download: "../downloads/TicTacToe.zip" },
  5: { images: ["../img/SAE203.png", "../img/SAE203.png", "../img/SAE203.png"], languages: ["HTML", "CSS", "PHP"], link: "http://81.194.40.26/~antunes--oliveira/SAE203/" },
  6: { images: ["../img/jeu-js.png", "../img/jeu-js.png", "../img/jeu-js.png"], languages: ["JavaScript", "HTML", "CSS"], link: "../projets/jeu-js.html" },
  7: { images: ["../img/php_project.png", "../img/php_project.png", "../img/php_project.png"], languages: ["PHP","CSS"], link: "../projets/" } 
};


// Variables d'état du carrousel
let currentSlideIndex = 0;
let currentProjectId = null;


// ===================================================================
// LOGIQUE DE TRADUCTION ET D'AFFICHAGE DU TEXTE
// ===================================================================

function applyText(lang) {
  const t = translations[lang] || translations.fr;
  const currentUrl = window.location.href;

  // Mise à jour des textes des projets sur la carte
  for (let i = 1; i <= 7; i++) {
    const card = document.querySelector(`.project-card[data-project-id="${i}"]`);
    if (card) {
      card.querySelector('h3').textContent = t[`proj${i}title`];
      card.querySelector('p').textContent = t[`proj${i}text`];
      
      // Mise à jour de la description pour l'accessibilité
      card.dataset.description = t[`proj${i}desc`]; 
    }
  }

  // Mise à jour des textes génériques (navigation, pied de page)
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Mise à jour du bouton de la modale pour la langue
  const actionBtn = document.getElementById('modalActionBtn');
  if (actionBtn) {
      if (actionBtn.dataset.action === 'download') {
          actionBtn.textContent = t.modalDownload;
      } else if (actionBtn.dataset.action === 'link') {
          actionBtn.textContent = t.modalVisit;
      }
  }
}

// ===================================================================
// LOGIQUE DU CARROUSEL
// ===================================================================

function showSlides(n) {
    const details = projectDetails[currentProjectId];
    const images = details ? details.images : [];
    const slidesContainer = document.getElementById('slides-container');
    const dotsContainer = document.getElementById('dot-container');

    if (!images || images.length === 0) {
        slidesContainer.innerHTML = '';
        dotsContainer.innerHTML = '';
        return;
    }

    if (n > images.length - 1) {
        currentSlideIndex = 0;
    }
    if (n < 0) {
        currentSlideIndex = images.length - 1;
    }

    // Affichage des slides par transformation
    // Le slidesContainer DOIT avoir la largeur totale de TOUTES les slides (e.g., 300% pour 3 slides)
    slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Mise à jour des points
    dotsContainer.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === currentSlideIndex) {
            dot.classList.add('active');
        }
        // Utilisation de i pour naviguer directement au slide
        dot.onclick = () => showSlides(i); 
        dotsContainer.appendChild(dot);
    }
}

function plusSlides(n) {
    // n doit être -1 ou 1
    currentSlideIndex += n;
    showSlides(currentSlideIndex);
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
}

function handleModalAction() {
    const btn = document.getElementById('modalActionBtn');
    const link = btn.dataset.link;
    if (link) {
        if (btn.dataset.action === 'download') {
            // Création d'un lien temporaire pour forcer le téléchargement
            const a = document.createElement('a');
            a.href = link;
            a.download = ''; // force le navigateur à télécharger
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else if (btn.dataset.action === 'link') {
            window.open(link, '_blank'); // Ouvrir dans un nouvel onglet
        }
    }
}

// ===================================================================
// LOGIQUE D'OUVERTURE DE LA MODALE
// ===================================================================

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const details = projectDetails[projectId];
    const card = document.querySelector(`.project-card[data-project-id="${projectId}"]`);

    if (!details || !card) return;

    // Récupérer la langue actuelle pour la description
    const lang = localStorage.getItem('lang') || 'fr';
    const t = translations[lang] || translations.fr;
    const descKey = `proj${projectId}desc`;
    
    currentProjectId = projectId;
    currentSlideIndex = 0; 
    
    // Remplir les détails du projet
    document.getElementById('modalTitle').textContent = t[`proj${projectId}title`];
    document.getElementById('modalDescription').textContent = t[descKey];

    // Gérer le bouton d'action
    const actionBtn = document.getElementById('modalActionBtn');
    actionBtn.style.display = 'block'; 

    if (details.download) {
        actionBtn.textContent = t.modalDownload;
        actionBtn.dataset.action = 'download';
        actionBtn.dataset.link = details.download;
    } else if (details.link) {
        actionBtn.textContent = t.modalVisit;
        actionBtn.dataset.action = 'link';
        actionBtn.dataset.link = details.link;
    } else {
        actionBtn.style.display = 'none';
        actionBtn.removeAttribute('data-action');
        actionBtn.removeAttribute('data-link');
    }

    // Gérer les tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = details.languages.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Gérer le carrousel
    const images = details.images || [];
    const slidesContainer = document.getElementById('slides-container');
    slidesContainer.innerHTML = '';

    if (images.length > 0) {
        // Crée toutes les slides
        images.forEach(src => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide';
            slideDiv.innerHTML = `<img src="${src}" alt="Project image" />`;
            slidesContainer.appendChild(slideDiv);
        });

        // Met à jour la largeur du conteneur des slides pour la translation CSS
        slidesContainer.style.width = `${images.length * 100}%`;

        // Montre/cache les flèches et points si plus d'une image
        const hasMultipleImages = images.length > 1;
        document.querySelector('.carousel-container .prev').style.display = hasMultipleImages ? 'block' : 'none';
        document.querySelector('.carousel-container .next').style.display = hasMultipleImages ? 'block' : 'none';
        document.getElementById('dot-container').style.display = hasMultipleImages ? 'block' : 'none';
        
        showSlides(0); 
    }


    modal.classList.add('active');
}


// ===================================================================
// Initialisation de la page et gestion des filtres
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Récupérer tous les éléments nécessaires
    const filterButtons = document.querySelectorAll('#project-filters button');
    const statSegments = document.querySelectorAll('.stat-segment');
    const projectCards = document.querySelectorAll('.project-card');

    // Fonction de filtrage
    function updateFilter(filter) {
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        statSegments.forEach(segment => {
            segment.classList.remove('active', 'inactive');
            if (filter === 'all') {
                segment.classList.add('active');
            } else if (
                (filter === 'Illustrator' && segment.classList.contains('stat-Illustrator')) ||
                (filter === 'Photoshop' && segment.classList.contains('stat-Photoshop')) 
            ) {
                segment.classList.add('active');
            } else {
                segment.classList.add('inactive');
            }
        });
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Écouteurs pour les boutons de filtre
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            updateFilter(filter);
        });
    });

    // Appliquer le filtre initial
    updateFilter('all');

    // Gestion de la langue
    const langSelect = document.getElementById("langSelect");
    const savedLang = localStorage.getItem("lang") || "fr";
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener("change", e => {
            const lang = e.target.value;
            localStorage.setItem("lang", lang);
            applyText(lang);
        });
    }

    applyText(savedLang);

    // Écouteurs pour les cartes de projet
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // openModal(projectId) prend l'ID du projet
            openModal(card.dataset.projectId);
        });
    });

    // Écouteur pour fermer la modale en cliquant à l'extérieur
    window.addEventListener('click', e => {
        if (e.target === document.getElementById('projectModal')) {
            closeModal();
        }
    });

    // Mise à jour de l'année
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});