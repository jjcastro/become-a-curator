angular.module('langService', [])

.service('LangSvc', function() {
    var language = {};

    language.en = {

      footer: {
        project: "a fun project by",
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
        p1: "Become a curator un generador automático de textos curatoriales. Con él, no nos interesa atacar la labor del curador / comisario en ningún sentido. Creemos en la importancia de su trabajo pero nos interesa mostrar --esperamos que con humor-- que a veces el arte puede ser circular, que los pretextos del arte se tocan y que muchos discursos están de alguna forma relacionados. Encontrar sentido puede ser una tarea divertida y de eso se trata esto.",

        p2: "Los textos curatoriales son construidos con la ayuda de XXXZXZXASa.asdasda.  usando textos reales de importantes museos y galerías del mundo como el Museo de Arte Moderno de Medellín MAMM, Museo de Arte Latinoamericano de Buenos Aires MALBA, el Museo de Arte Contemporáneo - MUAC de la UNAM, Galería Max Estrella, NC-arte, Museo de Arte Contemporáneo de la Unviversidad de Chile, entre otros. Ninguna de las frases originales es repetida, en cambio, es generada automáticamente usando XXXZXZXASa.asdasda.",

        p3: "Este es un proyecto diseñado por Juliana Castro y desarrollado por Juan José Castro. Si quiere saber más de cómo lo hicimos o exactamente de dónde vienen los textos, por favor no dude en contactarnos. Si simplemente quiere saludar, también estaremos felices de recibir su mensaje en becomeacurator@gmail.com.",

        p4: "Recuerde que no usaremos sus datos para nada. Puede poner lo que le plazca y divertirse como le parezca.",

        social: "Y claro, si le gustó, por favor comparta:"
      }
    };

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
        error: "espera! por favor ingresa nombres y apellidos."
      },

      result: {
        result: "tu texto curatorial:",
        another: "¿insatisfecho? una vez más.",
        loading: "cargando..."
      },

      aboutPage: {
        p1: "Become a Curator is an automatic curatorial text generator. By doing this, we do not attempt to minimize the importance or attack curating in any sense. We just want to show --hopefully through humor-- that art is circular and that most of art speeches are somehow related. To find meaning can be a fun task and this is all about that.",

        p2: "The curatorial notes are builted up using  lablablablabalbalablabalbal. The original texts come from many museums and galleries around the world such as MoMA, el New Museum, MCASD, MALBA, Serpentine Galleries, Tate Modern, The Contemporary Austin, The MCA Chicago, The MACBA, The Art Museum at Tokio and the Museum of Contemporary Art in Canada. The final texts are created by a machine, none of them are repeated. Yes, a machine. Yes, not repeated. This is how it works: lablablablabalbalablabalbal.",

        p3: "This page was designed by Juliana Castro V. and developed by Juan José Castro. If you want to find out more about our project, how did we created it or where do texts come from don't hesitate to contact us. If you just want to say hello, we will also be pleased to receive your message at becomeacurator@gmail.com.",

        p4: "Remember, we are not going to use your data to do anything. You can just put names and words and have fun out of it.",

        social: "Oh, yes. If you liked it, please share:"
      }
    };

    return language;
  })