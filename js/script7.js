// Traductions fusionnées avec titres, textes et descriptions des projets
const translations = {
  fr: {
    navAccueil: "Accueil",
    navProjets: "Projets",
    navContact: "Contact",
    navAPropos: "À propos",
    navInfo: "Info",
    navCV: "CV",

    // PROJETS DÉVELOPPEMENT (ID 1-7)
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
    
    // PROJETS GRAPHISME (NOUVEAU - ID 8-9)
    proj8title: "Projet Illustrator",
    proj8text: "Création vectorielle et logo (Télécharger le PDF).",
    proj9title: "Création Photoshop",
    proj9text: "Retouche photo et montage complexe (Voir l'image).",

    proj1desc: "Un jeu de serpent classique développé en Python avec Pygame. Le joueur contrôle un serpent qui grandit à chaque nourriture consommée. Le jeu se termine si le serpent se heurte à un mur ou à lui-même.",
    proj2desc: "Une implémentation du jeu Tetris en Python. Les pièces tombent du haut et le joueur doit les positionner pour remplir des lignes. Chaque ligne complète est supprimée et rapporte des points.",
    proj3desc: "Le jeu Pong classique en Python. Deux joueurs contrôlent des raquettes pour faire rebondir une balle. C'est un jeu multijoueur simple et addictif.",
    proj4desc: "Le jeu du Morpion (Tic-Tac-Toe) en Python. Jouez contre l'ordinateur avec une intelligence artificielle simple. C'est un projet pédagogique pour apprendre les algorithmes de base.",
    proj5desc: "Un site web professionnel et responsive réalisé dans le cadre du projet SAE203. Accessible sur tous les appareils (desktop, tablet, mobile) avec un design moderne et épuré.",
    proj6desc: "Un mini-jeu interactif créé avec JavaScript vanilla. Testez vos réflexes et essayez de battre le meilleur score. Code moderne et optimisé.",
    proj7desc: "Description du projet PHP réalisé avec une gestion de base de données (ex: MySQL) pour un développement back-end.",
    
    // DESCRIPTIONS GRAPHISME (NOUVEAU)
    proj8desc: "Conception d'une identité visuelle complète, création de logos vectoriels et supports de communication en utilisant Adobe Illustrator.",
    proj9desc: "Projet de retouche photo avancée, d'illustration numérique ou de photomontage créatif réalisé avec Adobe Photoshop.",

    modalDownload: "Télécharger",
    modalVisit: "Visiter",
    modalClose: "Fermer"
  },
  en: {
    navAccueil: "Home",
    navProjets: "Projects",
    navContact: "Contact",
    navAPropos: "About",
    navInfo: "Info",
    navCV: "CV",

    // PROJETS DÉVELOPPEMENT
    proj1title: "Python Snake Script",
    proj1text: "Click to download a .zip file containing the Snake game.",
    proj2title: "Python Tetris Script",
    proj2text: "Click to download a .zip file containing the Tetris game.",
    proj3title: "Python Pong Script",
    proj3text: "Click to download a .zip file containing the Pong game.",
    proj4title: "Python TicTacToe Script",
    proj4text: "Click to download a .zip file containing the TicTacToe game.",
    proj5title: "Responsive HTML Website",
    proj5text: "Responsive and accessible site made with HTML/CSS/PHP.",
    proj6title: "JS Game",
    proj6text: "Mini-game made with JavaScript.",
    proj7title: "PHP Project",
    proj7text: "PHP and database project.",

    // PROJETS GRAPHISME (NOUVEAU)
    proj8title: "Illustrator Project",
    proj8text: "Vector creation and logo (Download PDF).",
    proj9title: "Photoshop Creation",
    proj9text: "Photo editing and complex montage (View image).",

    proj1desc: "A classic Snake game developed in Python with Pygame...",
    proj2desc: "An implementation of Tetris in Python...",
    proj3desc: "The classic Pong game in Python...",
    proj4desc: "Tic-Tac-Toe in Python...",
    proj5desc: "A professional and responsive website made for the SAE203 project...",
    proj6desc: "An interactive mini-game created with vanilla JavaScript...",
    proj7desc: "Description of the PHP project developed with database management (e.g., MySQL) for back-end development.",

    // DESCRIPTIONS GRAPHISME (NOUVEAU)
    proj8desc: "Design of a complete visual identity, creation of vector logos and communication materials using Adobe Illustrator.",
    proj9desc: "Advanced photo editing or creative photomontage project realized with Adobe Photoshop.",
    
    modalDownload: "Download",
    modalVisit: "Visit",
    modalClose: "Close"
  },
  pt: {
    navAccueil: "Início",
    navProjetos: "Projetos",
    navContato: "Contato",
    navAPropos: "Sobre",
    navInfo: "Info",
    navCV: "CV",

    // PROJETOS DESENVOLVIMENTO
    proj1title: "Script Python Snake",
    proj1text: "Clique para baixar um arquivo .zip contendo o jogo Snake.",
    proj2title: "Script Python Tetris",
    proj2text: "Clique para baixar um arquivo .zip contendo o jogo Tetris.",
    proj3title: "Script Python Pong",
    proj3text: "Clique para baixar um arquivo .zip contendo o jogo Pong.",
    proj4title: "Script Python TicTacToe",
    proj4text: "Clique para baixar um arquivo .zip contendo o jogo TicTacToe.",
    proj5title: "Site HTML Responsivo",
    proj5text: "Site responsivo e acessível feito com HTML/CSS/PHP.",
    proj6title: "Jogo JS",
    proj6text: "Mini-jogo feito com JavaScript.",
    proj7title: "Projeto PHP",
    proj7text: "Projeto PHP e banco de dados.",

    // PROJETOS GRÁFICOS (NOVO)
    proj8title: "Projeto Illustrator",
    proj8text: "Criação vetorial e logotipo (Baixar PDF).",
    proj9title: "Criação Photoshop",
    proj9text: "Retoque de fotos e montagem complexa (Ver imagem).",

    proj1desc: "Um jogo clássico de Snake desenvolvido em Python com Pygame...",
    proj2desc: "Uma implementação do jogo Tetris em Python...",
    proj3desc: "O jogo clássico Pong em Python...",
    proj4desc: "O jogo da velha (Tic-Tac-Toe) em Python...",
    proj5desc: "Um site profissional e responsivo feito para o projeto SAE203...",
    proj6desc: "Um mini-jogo interativo criado com JavaScript vanilla...",
    proj7desc: "Descrição do projeto PHP desenvolvido com gerenciamento de banco de dados (ex: MySQL) para desenvolvimento back-end.",

    // DESCRIÇÕES GRÁFICAS (NOVO)
    proj8desc: "Design de uma identidade visual completa, criação de logotipos vetoriais e materiais de comunicação utilizando Adobe Illustrator.",
    proj9desc: "Projeto de retoque fotográfico avançado ou fotomontagem criativa realizado com Adobe Photoshop.",

    modalDownload: "Baixar",
    modalVisit: "Visitar",
    modalClose: "Fechar"
  }
};

// ⚡ Project details pour le modal
const projectDetails = {
  // PROJETS DÉVELOPPEMENT (ID 1-7)
  1: { image: "../img/snake.png", languages: ["Python", "Pygame"], download: "../downloads/snake.zip" },
  2: { image: "../img/tetris.png", languages: ["Python", "Pygame"], download: "../downloads/Tetris.zip" },
  3: { image: "../img/pong.png", languages: ["Python", "Pygame"], download: "../downloads/Pong.zip" },
  4: { image: "../img/tictactoe.png", languages: ["Python"], download: "../downloads/TicTacToe.zip" },
  5: { image: "../img/SAE203.png", languages: ["HTML", "CSS", "PHP"], link: "http://81.194.40.26/~antunes--oliveira/SAE203/" },
  6: { image: "../img/jeu-js.png", languages: ["JavaScript", "HTML", "CSS"], link: "../projets/jeu-js.html" },
  7: { image: "", languages: ["PHP","CSS", "MySQL"], link: "../projets/" },

  // PROJETS GRAPHISME (NOUVEAU - ID 8-9)
  8: { image: "../img/illustrator_mockup.png", languages: ["Illustrator", "Vectoriel", "Design"], download: "../downloads/illustrator_project.pdf" },
  9: { image: "../img/photoshop_result.jpg", languages: ["Photoshop", "Retouche", "Montage"], link: "../img/photoshop_result.jpg" }
};


function applyText(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) el.textContent = t[key];
  });

  // Boucle mise à jour pour inclure les projets Graphisme (jusqu'à 9)
  for (let i = 1; i <= 9; i++) { 
    const titleEl = document.getElementById(`proj${i}title`);
    const textEl = document.getElementById(`proj${i}text`);
    if (titleEl && t[`proj${i}title`]) titleEl.textContent = t[`proj${i}title`];
    if (textEl && t[`proj${i}text`]) textEl.textContent = t[`proj${i}text`];
  }
}


function openModal(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;

  const lang = document.getElementById("langSelect").value || "fr";
  const t = translations[lang];

  document.getElementById('modalTitle').textContent = t[`proj${projectId}title`];
  document.getElementById('modalDescription').textContent = t[`proj${projectId}desc`];

  const imgEl = document.getElementById('modalImage');
  if (project.image) {
    imgEl.src = project.image;
    imgEl.style.display = 'block';
  } else imgEl.style.display = 'none';

  const tagsContainer = document.getElementById('modalTags');
  tagsContainer.innerHTML = '';
  project.languages.forEach(langTag => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = langTag;
    tagsContainer.appendChild(span);
  });

  const actionBtn = document.getElementById('modalActionBtn');
  if (project.download) {
    actionBtn.textContent = t.modalDownload;
    actionBtn.dataset.action = 'download';
    actionBtn.dataset.link = project.download;
  } else if (project.link) {
    actionBtn.textContent = t.modalVisit;
    actionBtn.dataset.action = 'link';
    actionBtn.dataset.link = project.link;
  }

  const closeBtn = document.querySelector('.modal-btn.secondary');
  if (closeBtn) closeBtn.textContent = t.modalClose;

  document.getElementById('projectModal').classList.add('active');
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
}

function handleModalAction() {
  const btn = document.getElementById('modalActionBtn');
  if (btn.dataset.action === 'download') {
    const a = document.createElement('a');
    a.href = btn.dataset.link;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else if (btn.dataset.action === 'link') {
    // Si c'est un lien, ouvrir dans un nouvel onglet
    window.open(btn.dataset.link, '_blank'); 
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById("langSelect");
  const savedLang = localStorage.getItem("lang") || "fr";
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", e => {
      const lang = e.target.value;
      localStorage.setItem("lang", lang);
      applyText(lang);
      // NOTE: startTypewriter() n'est pas défini dans ce script (il est probablement dans un autre fichier js/étoile.js ou directement dans index.html)
      // Si startTypewriter est nécessaire sur ces pages, assurez-vous qu'il est bien chargé.
    });
  }

  applyText(savedLang);
  // startTypewriter(); // Commenté car il n'est pas défini ici et ne semble pas nécessaire sur les pages projets

  // Project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.projectId);
    });
  });

  // Modal click outside
  window.addEventListener('click', e => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) closeModal();
  });

  // Set current year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});