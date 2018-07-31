/**
 * JSON con las cadenas traducidas a los diferentes idiomas.
 * No hay español, por ser el default.
 */
frases = {
    "en": {
      "Cambiar idioma:": "Change language:",
      "Español": "Spanish",
      "Inglés": "English",
      "Portugués": "Portuguese"
    },
    "pt": {
      "Cambiar idioma:": "Mudar idioma:",
      "Español": "Espanhol",
      "Inglés": "Inglês",
      "Portugués": "Português"
    }
  };
  
  /**
   * Función que cambia todos los elementos al nuevo idioma.
   *
   * @param {string} lang
   */
  function cambiarIdioma(lang) {
    // Habilita las 2 siguientes para guardar la preferencia.
    lang = lang || sessionStorage.getItem('app-lang') || 'es';
    sessionStorage.setItem('app-lang', lang);
  
    var elems = document.querySelectorAll('[data-tr]');
    for (var x = 0; x < elems.length; x++) {
      elems[x].innerHTML = frases.hasOwnProperty(lang)
        ? frases[lang][elems[x].getAttribute("data-tr")]
        : elems[x].dataset.getAttribute("data-tr");
    }
  }
  
  window.onload = function(){
    cambiarIdioma();
    
    document
      .getElementById('btn-es')
      .addEventListener('click', cambiarIdioma.bind(null, 'es'));
  
    document
      .getElementById('btn-en')
      .addEventListener('click', cambiarIdioma.bind(null, 'en'));
  
    document
      .getElementById('btn-pt')
      .addEventListener('click', cambiarIdioma.bind(null, 'pt'));
  }