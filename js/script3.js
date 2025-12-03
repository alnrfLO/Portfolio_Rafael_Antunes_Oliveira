const translations = {
  fr: {
    contact_title: 'Contacte-moi',
    alert_fill: 'Merci de remplir tous les champs.',
    alert_email: 'Veuillez saisir un email valide.',
    alert_thanks: 'Merci pour votre message ! Je vous répondrai bientôt.',
    placeholder_name: 'Votre nom',
    placeholder_email: 'Votre email',
    placeholder_message: 'Votre message',
    submit: 'Envoyer',
    theme: '🎨 Thème'
  },
  en: {
    contact_title: 'Contact me',
    alert_fill: 'Please fill in all fields.',
    alert_email: 'Please enter a valid email.',
    alert_thanks: 'Thank you for your message! I will reply soon.',
    placeholder_name: 'Your name',
    placeholder_email: 'Your email',
    placeholder_message: 'Your message',
    submit: 'Send',
    theme: '🎨 Theme'
  },
  pt: {
    contact_title: 'Contacte-me',
    alert_fill: 'Por favor, preencha todos os campos.',
    alert_email: 'Por favor, insira um email válido.',
    alert_thanks: 'Obrigado pela sua mensagem! Responderei em breve.',
    placeholder_name: 'Seu nome',
    placeholder_email: 'Seu email',
    placeholder_message: 'Sua mensagem',
    submit: 'Enviar',
    theme: '🎨 Tema'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let lang = window.APP_LANG || 'fr';

  const form = document.querySelector('.contact-form');
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector('textarea');
  const submitBtn = form.querySelector('button[type="submit"]');
  const themeBtn = document.getElementById('themeBtn');
  const langSelect = document.getElementById('langSelect');

  function applyTranslations(lang) {
    const t = translations[lang] || translations.fr;
    nameInput.placeholder = t.placeholder_name;
    emailInput.placeholder = t.placeholder_email;
    messageInput.placeholder = t.placeholder_message;
    submitBtn.textContent = t.submit;
    themeBtn.textContent = t.theme;
  }

  applyTranslations(lang);
  langSelect.value = lang;

  langSelect.addEventListener('change', (e) => {
    lang = e.target.value;
    window.APP_LANG = lang;
    applyTranslations(lang);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const t = translations[lang] || translations.fr;

    if (!name || !email || !message) {
      alert(t.alert_fill);
      return;
    }

    if (!validateEmail(email)) {
      alert(t.alert_email);
      return;
    }

    alert(t.alert_thanks);

    form.reset();

    document.body.classList.add('fade-out');
    setTimeout(() => {
      document.body.classList.remove('fade-out');
    }, 1000);
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
