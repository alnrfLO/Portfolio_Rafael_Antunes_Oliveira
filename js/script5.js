

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
