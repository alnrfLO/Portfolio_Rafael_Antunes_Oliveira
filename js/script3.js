const translations = {
  fr: {
    // Menu Hamburger
    navAccueil: "Accueil",
    navProjets: "Projets",
    navContact: "Contact",
    navAPropos: "À propos",
    navInfo: "Info",
    navCV: "CV",

    // Contact Form
    contact_title: 'Contacte-moi',
    alert_fill: 'Merci de remplir tous les champs.',
    alert_email: 'Veuillez saisir un email valide.',
    alert_thanks: 'Merci pour votre message ! Je vous répondrai bientôt.',
    alert_error: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
    placeholder_name: 'Votre nom',
    placeholder_email: 'Votre email',
    placeholder_message: 'Votre message',
    submit: 'Envoyer',
    submitting: 'Envoi...',
    theme: 'Thème',
    
    // TRADUCTIONS FOOTER AJOUTÉES
    allRightsReserved: "Tous droits réservés",
    footerMentions: "Mentions Légales"
  },
  en: {
    navAccueil: "Home",
    navProjets: "Projects",
    navContact: "Contact",
    navAPropos: "About",
    navInfo: "Info",
    navCV: "CV",

    contact_title: 'Contact me',
    alert_fill: 'Please fill in all fields.',
    alert_email: 'Please enter a valid email.',
    alert_thanks: 'Thank you for your message! I will reply soon.',
    alert_error: 'An error occurred during submission. Please try again.',
    placeholder_name: 'Your name',
    placeholder_email: 'Your email',
    placeholder_message: 'Your message',
    submit: 'Send',
    submitting: 'Sending...',
    theme: 'Theme',
    
    // TRADUCTIONS FOOTER AJOUTÉES
    allRightsReserved: "All rights reserved",
    footerMentions: "Legal Notice"
  },
  pt: {
    navAccueil: "Início",
    navProjets: "Projetos",
    navContact: "Contato",
    navAPropos: "Sobre",
    navInfo: "Info",
    navCV: "CV",

    contact_title: 'Contacte-me',
    alert_fill: 'Por favor, preencha todos os campos.',
    alert_email: 'Por favor, insira um email válido.',
    alert_thanks: 'Obrigado pela sua mensagem! Responderei em breve.',
    alert_error: 'Ocorreu um erro ao enviar. Por favor, tente novamente.',
    placeholder_name: 'Seu nome',
    placeholder_email: 'Seu email',
    placeholder_message: 'Sua mensagem',
    submit: 'Enviar',
    submitting: 'A enviar...',
    theme: 'Tema',
    
    // TRADUCTIONS FOOTER AJOUTÉES
    allRightsReserved: "Todos os direitos reservados",
    footerMentions: "Aviso Legal" // Corrigé
  },
  es: {
    navAccueil: "Inicio",
    navProjets: "Proyectos",
    navContact: "Contacto",
    navAPropos: "Acerca de",
    navInfo: "Info",
    navCV: "CV",

    contact_title: 'Contácteme',
    alert_fill: 'Por favor, rellene todos los campos.',
    alert_email: 'Por favor, ingrese un correo electrónico válido.',
    alert_thanks: '¡Gracias por su mensaje! Le responderé pronto.',
    alert_error: 'Ocurrió un error al enviar. Por favor, inténtelo de nuevo.',
    placeholder_name: 'Su nombre',
    placeholder_email: 'Su correo electrónico',
    placeholder_message: 'Su mensaje',
    submit: 'Enviar',
    submitting: 'Enviando...',
    theme: 'Tema',
    
    allRightsReserved: "Todos los derechos reservados",
    footerMentions: "Aviso Legal"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let lang = localStorage.getItem('lang') || 'fr';

  const form = document.querySelector('.contact-form');
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector('textarea');
  const submitBtn = form.querySelector('button[type="submit"]');
  const themeBtn = document.getElementById('themeBtn');
  const langSelect = document.getElementById('langSelect');

  // Met à jour le texte de la page selon la langue
  function applyTranslations(currentLang) {
    const t = translations[currentLang] || translations.fr;

    // Menu hamburger & FOOTER
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (t[key]) el.textContent = t[key];
    });

    // Contact form
    const contactTitle = document.getElementById('contactTitle');
    if (contactTitle) contactTitle.textContent = t.contact_title;
    nameInput.placeholder = t.placeholder_name;
    emailInput.placeholder = t.placeholder_email;
    messageInput.placeholder = t.placeholder_message;
    if (submitBtn.textContent !== t.submitting) submitBtn.textContent = t.submit;
    if (themeBtn) themeBtn.textContent = t.theme;
  }

  // Appliquer les traductions initiales
  applyTranslations(lang);
  if (langSelect) langSelect.value = lang;

  // Changement de langue
  if (langSelect) {
    langSelect.addEventListener('change', e => {
      lang = e.target.value;
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
    });
  }

  // Validation email simple
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Soumission du formulaire
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const t = translations[lang] || translations.fr;

    if (!name || !email || !message) { alert(t.alert_fill); return; }
    if (!validateEmail(email)) { alert(t.alert_email); return; }

    submitBtn.textContent = t.submitting;
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert(t.alert_thanks);
        form.reset();
      } else {
        const errorData = await response.json();
        console.error('Erreur Formspree:', errorData);
        alert(`${t.alert_error} (Statut: ${response.status})`);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      alert(`${t.alert_error} (Erreur réseau)`);
    } finally {
      submitBtn.textContent = t.submit;
      submitBtn.disabled = false;
    }
  });
});