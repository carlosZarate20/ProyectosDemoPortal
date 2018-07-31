var frases = {
    'en': {
      'idioma': 'Chose language',
      "lan-en": "English",
      "lan-es": "Spanish",
      'home': 'Home',
      'about': 'About',
      'contact': 'Contact',
      'nombre': 'First Name',
      'apellido': 'Last Name',
      'telefono': 'Phone',
      'email': 'E-mail',
      'direccion': 'Address',
      'ciudad': 'City',
      'estado': 'State',
      'codigoZip': 'Zip code',
      'website': 'Website or domain name',
      'proyecto': 'Project Description',
      'enviar': 'Send',
      'yes': 'Yes',
      'no': 'No'
    },
    'es': {
      'idioma': 'Escoger idioma',
      "lan-en": "Inglés",
      "lan-es": "Español",
      'home': 'Inicio',
      'about': 'Sobre',
      'contact': 'Contacto',
      'nombre': 'Nombres',
      'apellido': 'Apellidos',
      'telefono': 'Telefono',
      'email': 'Correo',
      'direccion': 'Direccion',
      'ciudad': 'Ciudad',
      'estado': 'Estado',
      'codigoZip': 'Codigo Zip',
      'website': 'Sitio web o nombre de dominio',
      'proyecto': 'Descripcion del Proyecto',
      'enviar': 'Enviar',
      'yes': 'Si',
      'no': 'No'  
    }
  }


function cambiarIdioma(lang){
    var elements = document.querySelectorAll(".intfrase");
    for (var x= 0; x < elements.length; x++){
        elements[x].innerHTML = frases[lang][elements[x].getAttribute("data-id")];
    }
}

cambiarIdioma('es');

/*var frases = {
    'en':{
        'home': 'Home',
        'about': 'About',
        'contact': 'Contact'
    },
    'es':{
        'home': 'Inicio',
        'about': 'Sobre',
        'contact': 'Contacto'
    }
};

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(frases[lang][$(this).attr('key')])
        });
    });
});

<button class="translate" id="en" key="english">English</button>
        <button class="translate" id="es" key="spanish">Spanish</button>

        <ul>
            <li class="lang" key="home">Home</li>
            <li class="lang" key="about">About</li>
            <li class="lang" key="contact">Contact</li>
        </ul>

frases = {
    "en": {
      "idioma": "Change language:",
      "lan-en": "English",
      "lan-es": "Spanish"
    },
    "es": {
      "idioma": "Cambiar idioma:",
      "lan-en": "Inglés",
      "lan-es": "Español"
    }
  }

function cambiarIdioma(lang){
    var elements = document.querySelectorAll(".intfrase");
    for (var x= 0; x < elements.length; x++){
        elements[x].innerHTML = frases[lang][elements[x].dataset.id];
    }
}

cambiarIdioma('es');


/*var language;
function getLanguage(){
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({ 
        url: '/language/' + localStorage.getItem('language') + '.json',
        datatype: 'json',
        async: false,
        datatype: 'json',
        success: function (lang) {language = lang}
    });
}

function setLanguage(lang){
    localStorage.setItem('language', lang);
}

$(document).ready(function(){
    $('#div1').text(language.date);
});*/
