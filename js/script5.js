
    const text = {
      fr: {
        title: "Bienvenue, je suis Rafael Antunes Oliveira",
        projectsTitle: "Découvre mon univers",
        proj1title: "✨ Qui suis-je ?",
        proj1text: "Créatif, curieux, passionné par le web, j’aime construire des expériences visuelles utiles et sensibles.",
        proj2title: "🛠 Ma démarche",
        proj2text: "Je conçois chaque projet comme une collaboration. Écoute, intuition et précision sont au cœur de mon travail.",
        proj3title: "🚀 Ce site",
        proj3text: "Ici, je partage mes projets, mes idées et mon envie de relier technologie, esthétique et sens.",
        skillsTitle: "Compétences",
        filterAll: "Tout",
        filterFrontend: "Frontend",
        filterBackend: "Backend",
        filterDesign: "Design",
        filterOther: "Autres",
        skillHTML: "HTML / CSS",
        skillJS: "JavaScript",
        skillReact: "React.js",
        skillUX: "UX/UI",
        skillNode: "Node.js"
      },
      en: {
        title: "Welcome, I'm Rafael Antunes Oliveira",
        projectsTitle: "Discover My Universe",
        proj1title: "✨ About Me",
        proj1text: "Creative and curious, I build visual experiences that are both meaningful and functional.",
        proj2title: "🛠 My Approach",
        proj2text: "I see every project as a collaboration. Listening, intuition, and precision guide my work.",
        proj3title: "🚀 This Website",
        proj3text: "Here, I share my work, my ideas, and my passion for linking technology, aesthetics, and purpose.",
        skillsTitle: "Skills",
        filterAll: "All",
        filterFrontend: "Frontend",
        filterBackend: "Backend",
        filterDesign: "Design",
        filterOther: "Other",
        skillHTML: "HTML / CSS",
        skillJS: "JavaScript",
        skillReact: "React.js",
        skillUX: "UX/UI",
        skillNode: "Node.js"
      },
      pt: {
        title: "Bem-vindo, eu sou Rafael Antunes Oliveira",
        projectsTitle: "Descubra Meu Universo",
        proj1title: "✨ Sobre Mim",
        proj1text: "Criativo e curioso, construo experiências visuais que são ao mesmo tempo significativas e funcionais.",
        proj2title: "🛠 Minha Abordagem",
        proj2text: "Vejo cada projeto como uma colaboração. Escuta, intuição e precisão guiam meu trabalho.",
        proj3title: "🚀 Este Site",
        proj3text: "Aqui, compartilho meu trabalho, minhas ideias e minha paixão por conectar tecnologia, estética e propósito.",
        skillsTitle: "Competências",
        filterAll: "Todos",
        filterFrontend: "Frontend",
        filterBackend: "Backend",
        filterDesign: "Design",
        filterOther: "Outros",
        skillHTML: "HTML / CSS",
        skillJS: "JavaScript",
        skillReact: "React.js",
        skillUX: "UX/UI",
        skillNode: "Node.js"
}

    };

    function applyText(lang) {
      const t = text[lang];
      for (let key in t) {
        const el = document.getElementById(key);
        if (el) el.textContent = t[key];
      }
    }

    function toggleTheme() {
      document.body.classList.toggle("light-theme");
    }

    document.querySelectorAll('#skill-filters button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#skill-filters button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.skill-item').forEach(item => {
          item.classList.toggle('show', filter === 'all' || item.dataset.category === filter);
        });
      });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const initLang = urlParams.get("lang") || localStorage.getItem("lang") || "fr";
    document.getElementById("langSelect").value = initLang;
    applyText(initLang);

    document.getElementById("langSelect").addEventListener("change", e => {
      const lang = e.target.value;
      localStorage.setItem("lang", lang);
      applyText(lang);
    });
