(function () {
  window.onload = load;

  function load() {
    loadLanguage();
    document.querySelector('.fa-language').addEventListener('click', toggleLang)
  }

  function loadLanguage() {
    const storageLang = localStorage.getItem('language');
    if (storageLang === 'pt-BR')
      setPortugueseLang();
    else
      setEnglishLang();
  }

  function toggleLang() {
    const storageLang = localStorage.getItem('language');
    if (storageLang === 'pt-BR')
      setEnglishLang();
    else
      setPortugueseLang();
  }

  function setEnglishLang() {
    hideAllLang();
    document.querySelectorAll('[lang="en-US"]').forEach(
      span => span.classList.remove('hidden'));
    localStorage.setItem('language', 'en-US');
  }

  function setPortugueseLang() {
    hideAllLang();
    document.querySelectorAll('[lang="pt-BR"]').forEach(
      span => span.classList.remove('hidden'));
    localStorage.setItem('language', 'pt-BR');
  }

  function hideAllLang() {
    document.querySelectorAll('[lang]').forEach(
      span => span.classList.add('hidden'));
  }
})();