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
      another: "not satisfied? try another one.",
      loading: "loading..."
    },

    aboutPage: {
      leadP: "<b>Become a curator</b> is an automatic curatorial text generator. The statements are generated using a computer algorithm powered by statistical models created based on large amounts of text. These models are run through random iterations based on word frequency, to automatically generate clear but meaningless sentences. This process is called a <a href='https://en.wikipedia.org/wiki/Markov_chain'>Markov Chain</a>. The original text comes from processing several curatorial statements by many museums and galleries around the world, such as " /* these. */,

      sourceLink: "these",
      sources: "MoMA, New Museum, MCASD, MALBA, Serpentine Galleries, Tate Modern, The Contemporary Austin, MCA Chicago, MACBA, The Art Museum at Tokio, and The Museum of Contemporary Art in Canada",

      info: 
        "<p>As a disclaimer, we're not attempting to minimize the importance of art curating in any way. We just want to show –hopefully through humor– that art is circular and that most of art speech is somehow related. To find meaning can be fun and this is all about that.</p>" +
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
      another: "¿insatisfecho? una vez más.",
      loading: "cargando..."
    },

    aboutPage: {
      leadP: /* Become a curator... */ " es un generador automático de textos curatoriales. Con él, no nos interesa atacar la labor del curador / comisario en ningún sentido. Creemos en la importancia de su trabajo pero nos interesa mostrar --esperamos que con humor-- que a veces el arte puede ser circular, que los pretextos del arte se tocan y que muchos discursos están de alguna forma relacionados. Encontrar sentido puede ser una tarea divertida y de eso se trata esto.",

      sourceLink: "estos",
      sources: "el Museo de Arte Moderno de Medellín MAMM, Museo de Arte Latinoamericano de Buenos Aires MALBA, el Museo de Arte Contemporáneo - MUAC de la UNAM, Galería Max Estrella, NC-arte, Museo de Arte Contemporáneo de la Unviversidad de Chile",

      info: 
        "<p>Los textos curatoriales son construidos con la ayuda de XXXZXZXASa.asdasda. Ninguna de las frases originales es repetida, en cambio, es generada automáticamente usando XXXZXZXASa.asdasda. Los textos originales provienen de importantes museos y galerías del mundo, como </p>" +
        "<p>Este es un proyecto diseñado por Juliana Castro y desarrollado por Juan José Castro. Si quiere saber más de cómo lo hicimos o exactamente de dónde vienen los textos, por favor no dude en contactarnos. Si simplemente quiere saludar, también estaremos felices de recibir su mensaje en becomeacurator@gmail.com.</p>" +
        "<p>Recuerde que no usaremos sus datos para nada. Puede poner lo que le plazca y divertirse como le parezca.Y claro, si le gustó, por favor comparta:</p>"
    }

  };

  return language;
});