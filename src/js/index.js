(function () {
  window.onload = load;

  const keyLib = {
    ArrowUp: 'u',
    ArrowDown: 'd',
    ArrowLeft: 'l',
    ArrowRight: 'r',
    a: 'a',
    b: 'b',
  };

  const secretCode = ['u', 'u', 'd', 'd', 'l', 'r', 'l', 'r', 'a', 'b'];
  let inputCode = [];

  document.addEventListener('keydown', (event) => {
    if (!keyLib[event.key]) {
      inputCode = [];
      return;
    }
    inputCode.push(keyLib[event.key]);

    checkSecretCode();
  });

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

  function checkSecretCode() {
    const secretString = JSON.stringify(secretCode).replace(/[\[\]']+/g, '');
    const inputString = JSON.stringify(inputCode).replace(/[\[\]']+/g, '');

    if (secretString === inputString) {
      window.location.href = 'https://gabrielluizcm.github.io/strongOnOff';
      console.log('aqui');
    }
    else {
      if (secretString.indexOf(inputString) !== 0)
        inputCode = [];
    }
  }
})();