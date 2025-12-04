// Traductions
const text = {
  fr: {
    // Menu Hamburger
    navAccueil: "Accueil",
    navProjets: "Projets",
    navContact: "Contact",
    navAPropos: "À propos",
    navInfo: "Info",
    navCV: "CV",

    // Projets
    proj1title: "🐍 Script Python snake",
    proj1text: "Clicker pour Télécharger un fichier.zip contenant le Snake.",
    proj2title: "🐍 Script Python Tetris",
    proj2text: "Clicker pour Télécharger un fichier.zip contenant le Tetris",
    proj3title: "🐍 Script Python Pong",
    proj3text: "Clicker pour Télécharger un fichier.zip contenant le Pong",
    proj4title: "🐍 Script Python TicTacToe",
    proj4text: "Clicker pour Télécharger un fichier.zip contenant le TicTacToe.",
    proj5title: "🌐 Site HTML Responsive",
    proj5text: "Site web responsive et accessible réalisé en HTML/CSS/PHP.",
    proj6title: "🎮 Jeu en JS",
    proj6text: "Mini-jeu réalisé avec JavaScript.",

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

    proj1title: "🐍 Python Snake Script",
    proj1text: "Click to download a .zip file containing the Snake game.",
    proj2title: "🐍 Python Tetris Script",
    proj2text: "Click to download a .zip file containing the Tetris game.",
    proj3title: "🐍 Python Pong Script",
    proj3text: "Click to download a .zip file containing the Pong game.",
    proj4title: "🐍 Python TicTacToe Script",
    proj4text: "Click to download a .zip file containing the TicTacToe game.",
    proj5title: "🌐 Responsive HTML Website",
    proj5text: "Responsive and accessible site made with HTML/CSS/PHP.",
    proj6title: "🎮 JS Game",
    proj6text: "Mini-game made with JavaScript.",

    modalDownload: "Download",
    modalVisit: "Visit",
    modalClose: "Close"
  },
  pt: {
    navAccueil: "Início",
    navProjets: "Projetos",
    navContact: "Contato",
    navAPropos: "Sobre",
    navInfo: "Info",
    navCV: "CV",

    proj1title: "🐍 Script Python Snake",
    proj1text: "Clique para baixar um arquivo .zip contendo o jogo Snake.",
    proj2title: "🐍 Script Python Tetris",
    proj2text: "Clique para baixar um arquivo .zip contendo o jogo Tetris.",
    proj3title: "🐍 Script Python Pong",
    proj3text: "Clique para baixar um arquivo .zip contendo o jogo Pong.",
    proj4title: "🐍 Script Python TicTacToe",
    proj4text: "Clique para baixar um arquivo .zip contendo o jogo TicTacToe.",
    proj5title: "🌐 Site HTML Responsivo",
    proj5text: "Site responsivo e acessível feito com HTML/CSS/PHP.",
    proj6title: "🎮 Jogo JS",
    proj6text: "Mini-jogo feito com JavaScript.",

    modalDownload: "Baixar",
    modalVisit: "Visitar",
    modalClose: "Fechar"
  }
};

// Projet
const projectDetails = {
  1: {
    title: "🐍 Script Python snake",
    description: "Un jeu de serpent classique développé en Python avec Pygame. Le joueur contrôle un serpent qui grandit à chaque nourriture consommée. Le jeu se termine si le serpent se heurte à un mur ou à lui-même.",
    image: "../img/snake.png",
    languages: ["Python", "Pygame"],
    download: "downloads/snake.zip"
  },
  2: {
    title: "🐍 Script Python Tetris",
    description: "Une implémentation du jeu Tetris en Python. Les pièces tombent du haut et le joueur doit les positionner pour remplir des lignes. Chaque ligne complète est supprimée et rapporte des points.",
    image: "../img/tetris.png",
    languages: ["Python", "Pygame"],
    download: "downloads/Tetris.zip"
  },
  3: {
    title: "🐍 Script Python Pong",
    description: "Le jeu Pong classique en Python. Deux joueurs contrôlent des raquettes pour faire rebondir une balle. C'est un jeu multijoueur simple et addictif.",
    image: "../img/pong.png",
    languages: ["Python", "Pygame"],
    download: "downloads/Pong.zip"
  },
  4: {
    title: "🐍 Script Python TicTacToe",
    description: "Le jeu du Morpion (Tic-Tac-Toe) en Python. Jouez contre l'ordinateur avec une intelligence artificielle simple. C'est un projet pédagogique pour apprendre les algorithmes de base.",
    image: "../img/tictactoe.png",
    languages: ["Python"],
    download: "downloads/TicTacToe.zip"
  },
  5: {
    title: "🌐 Site HTML Responsive",
    description: "Un site web professionnel et responsive réalisé dans le cadre du projet SAE203. Accessible sur tous les appareils (desktop, tablet, mobile) avec un design moderne et épuré.",
    image: "../img/website.png",
    languages: ["HTML", "CSS", "PHP"],
    link: "http://81.194.40.26/~antunes--oliveira/SAE203/"
  },
  6: {
    title: "🎮 Jeu en JS",
    description: "Un mini-jeu interactif créé avec JavaScript vanilla. Testez vos réflexes et essayez de battre le meilleur score. Code moderne et optimisé.",
    image: "../img/jeu-js.png",
    languages: ["JavaScript", "HTML", "CSS"],
    link: "../projets/jeu-js.html"
  }
};

// Appliquer les traductions
function applyText(lang) {
  const t = text[lang];
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) el.textContent = t[key];
  });
}

// Typewriter animation
let typewriterTimeout, currentIndex = 0;
function startTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;
  const lang = document.getElementById("langSelect").value || "fr";
  const textContent = {
    fr: "Salut, je suis Rafael Antunes Oliveira",
    en: "Hi, I'm Rafael Antunes Oliveira",
    pt: "Oi, sou Rafael Antunes Oliveira"
  }[lang];

  el.textContent = '';
  currentIndex = 0;

  function type() {
    if (currentIndex < textContent.length) {
      el.textContent += textContent.charAt(currentIndex);
      currentIndex++;
      typewriterTimeout = setTimeout(type, 120);
    }
  }
  type();
}

// Modal
function openModal(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;
  const lang = document.getElementById("langSelect").value || "fr";
  const t = text[lang];

  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;

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
    window.location.href = btn.dataset.link;
  }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById("langSelect");
  const savedLang = localStorage.getItem("lang") || "fr";
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", e => {
      const lang = e.target.value;
      localStorage.setItem("lang", lang);
      applyText(lang);
      startTypewriter();
    });
  }
  applyText(savedLang);
  startTypewriter();

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
});
