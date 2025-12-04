const text = {
  fr: {

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
    proj6text: "Mini-jeu réalisé avec JavaScript."
  },
  en: {

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
    proj6text: "Mini-game made with JavaScript."
  },
  pt: {

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
    proj6text: "Mini-jogo feito com JavaScript."
  }
};

function applyText(lang) {
  const t = text[lang];
  for (let key in t) {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const initLang = urlParams.get("lang") || localStorage.getItem("lang") || "fr";
  document.getElementById("langSelect").value = initLang;
  applyText(initLang);

  document.getElementById("langSelect").addEventListener("change", e => {
    const lang = e.target.value;
    localStorage.setItem("lang", lang);
    applyText(lang);
  });

  document.querySelectorAll('#project-filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#project-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.project-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const downloadLink = card.getAttribute('data-download');
      const pageLink = card.getAttribute('data-link');

      if (downloadLink) {
        const a = document.createElement('a');
        a.href = downloadLink;
        a.download = '';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else if (pageLink) {
        window.location.href = pageLink;
      }
    });
  });
});
