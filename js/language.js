angular.module('langService', []).service('LangSvc', function() { 
  var language = {};


  // ENGLISH LANGUAGE TEXT
  // ================================

  language.en = {

    footer: {
      project: "a project by",
      and: "and"
    },

    thisLang: "english",
    otherLocale: "es",

    about: "what's this?",
    other: "español",

    main: {
      title: "curatorial statement generator",
      sub1: "can't figure out what to write?",
      sub2: "we're here to help.",
      invitation: "let's get started:",

      fname: "first name",
      lname: "last name",

      input: "input the artist's name",
      sub3: "(or your own name if youʼre an artist who curates themselves)",
      error: "nope! please input both a first name and a last name.",
    },

    result: {
      result: "here, your curatorial statement:",
      another: "try again",
      loading: "loading..."
    },

    aboutPage: {
      leadP: "<b>Become a curator</b> is an automatic curatorial text generator. The statements are generated using a computer algorithm powered by statistical models. These are created based on large amounts of text. The models are run through random iterations based on word frequency, to automatically generate clear but meaningless sentences. This process is called a <a href='https://en.wikipedia.org/wiki/Markov_chain'>Markov chain</a>. The original text comes from processing several curatorial statements by many museums and galleries around the world, such as " /* these. */,

      sourceLink: "these",
      sources: "MoMA, New Museum, MCASD, MALBA, Serpentine Galleries, Tate Modern, The Contemporary Austin, MCA Chicago, MACBA, The Art Museum at Tokio, and The Museum of Contemporary Art in Canada",

      info: 
        "<p>As a disclaimer, by creating this we're not attempting to minimize the importance of art curating in any way. We just want to show –hopefully through humor– that art is circular and that most of art speech is somehow related. Finding meaning can be fun and this is all about that.</p>" +
        "<p>Keep in mind, we are not storing your data. If you want to find out more about our project, how we created it, where the texts come from or you just want to say hello, don't hesitate to get in touch at <a href='mailto:becomeacurator@gmail.com'>becomeacurator@gmail.com</a>.  If you liked it, please share:</p>",

      credits: "Designed, developed and curated by <a href='http://julianacastrov.com'>Juliana Castro</a> and <a href='http://jjcastro.com'>Juan José Castro</a>."
    }
  };


  // SPANISH LANGUAGE TEXT
  // ================================

  language.es = {

    footer: {
      project: "un proyecto de",
      and: "y"
    },

    thisLang: "spanish",
    otherLocale: "en",

    about: "acerca de",
    other: "english",

    main: {
      title: "generador de textos curatoriales",
      sub1: "¿no sabes qué escribir?",
      sub2: "aquí estamos para ayudar.",
      invitation: "empecemos:",

      fname: "nombres",
      lname: "apellidos",

      input: "ingresa el nombre del artista",
      sub3: "(o tu propio nombre, si eres un artista que se cura a sí mismo)",
      error: "¡espera! por favor ingresa nombres y apellidos."
    },

    result: {
      result: "tu texto curatorial:",
      another: "una vez más",
      loading: "cargando..."
    },

    aboutPage: {
      leadP: "<b>Become a curator</b> es un generador automático de textos curatoriales. Estos textos son producidos usando un algoritmo que funciona a través de modelos probabilísticos creados con base en grandes cantidades de texto. Los modelos se ejecutan recorriendo iteraciones aleatorias basadas en la frecuencia de palabras, para producir frases claras pero sin sentido. Este proceso se conoce como <a href='https://en.wikipedia.org/wiki/Markov_chain'>cadena de Márkov</a>. Los textos originales salen de procesar textos de sala de muchos museos y galerías alrededor del mundo, como " /* estos */,

      sourceLink: "estos",
      sources: "el Museo de Arte Moderno de Medellín MAMM, Museo de Arte Latinoamericano de Buenos Aires MALBA, el Museo de Arte Contemporáneo - MUAC de la UNAM, Galería Max Estrella, NC-arte, Museo de Arte Contemporáneo de la Unviversidad de Chile",

      info: 
        "<p>Es importante aclarar que no queremos minimizar la importancia de la curaduría en ningún sentido. Solo queremos mostrar –ojalá a través del humor– que el arte es circular y que muchos de los discursos del arte están de alguna forma relacionados. Encontrar sentido puede ser una tarea divertida y de eso se trata todo.</p><p>Recuerda que no estamos archivando tu información. Si quieres saber más de nuestro proyecto, cómo lo creamos, de dónde vienen los textos o simplemente quieres saludar, no dudes en contactarnos escribiendo a becomeacurator@gmail.com. Si te gustó, por favor comparte.</p>"
        ,
        credits: "Diseñado, desarrollado y curado por <a href='http://julianacastrov.com'>Juliana Castro</a> y <a href='http://jjcastro.com'>Juan José Castro</a>."
    }

  };

  return language;
});