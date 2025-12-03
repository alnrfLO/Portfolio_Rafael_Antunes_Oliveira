const langTexts = {
  fr: {
    title: "Bienvenue dans mon Univers",
    text: "Un portfolio pas comme les autres. Prépare-toi à être surpris, inspiré, transcendé.",
    button: "Explorer"
  },
  en: {
    title: "Welcome to My Universe",
    text: "A portfolio like no other. Get ready to be amazed, inspired, and transformed.",
    button: "Enter"
  },
  pt: {
    title: "Bem-vindo ao Meu Universo",
    text: "Um portfólio como nenhum outro. Prepare-se para se surpreender, inspirar e transformar.",
    button: "Entrar"
  }
};

function applyLang(lang) {
  document.getElementById("welcomeTitle").textContent = langTexts[lang].title;
  document.getElementById("welcomeText").textContent = langTexts[lang].text;
  document.getElementById("exploreBtn").textContent = langTexts[lang].button;
}

document.getElementById("lang").addEventListener("change", e => {
  const lang = e.target.value;
  applyLang(lang);
  localStorage.setItem("lang", lang);
});

function navigate() {
  const lang = document.getElementById("lang").value;
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "index.php?Article=2&lang=" + lang;
  }, 1000);
}

function toggleMenu(btn) {
  btn.classList.toggle("active");
  document.getElementById("mobileMenu").classList.toggle("active");
}

window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  document.getElementById("lang").value = savedLang;
  applyLang(savedLang);
  document.body.classList.remove("fade-out");
};
