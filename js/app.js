angular.module('app', ['ui.router', 'ngSanitize']) 

    // Put state/params in rootScope to enable custom background on <body>
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    // $locationProvider.html5Mode(true);
    $stateProvider
      // main page
      .state('main', {
        url         : "/",
        templateUrl : "views/main.tpl.html"
      })
      // about
      .state('about', {
        url         : "/about",
        templateUrl : "views/about.tpl.html",
        data: {
          bodyClass: 'pinkbkg'
        }
      })
      // text
      .state('text', {
        url         : "/text?fn&ln&lang",
        templateUrl : "views/text.tpl.html",
        controller  : "textCtrl",
        data: {
          bodyClass: 'pinkbkg'
        }
      })
  })

  .service('MarkovSvc', function($http) {

    var generatorFactory = {};

    generatorFactory.get = function(language, fname, lname, num) {
      var url = 'http://api.becomeacurator.com/' + language + '?'
              + 'fname=' + fname + '&'
              + 'lname=' + lname + '&';
      if (num) {
        url += 'num=' + num;
      }
      return $http.jsonp(url + '&callback=JSON_CALLBACK');
    }
    return generatorFactory;
  })

  .service('LangSvc', function() {
    var languageFactory = {};

    languageFactory.en = {

      footer: {
        project: "a fun project by",
        and: "and"
      },

      thisLang: "english",
      otherLocale: "es",

      about: "what's this?",
      other: "español",

      title: "curatorial statement generator",
      sub1: "can't figure out what to write?",
      sub2: "we're here to help.",
      invitation: "let's get started:",

      fname: "first name",
      lname: "last name",

      input: "input the artist's name",
      sub3: "(or your own name if youʼre an artist who curates themselves)",
      error: "nope! please input both a first name and a last name.",

      result: "here, your curatorial statement:",
      another: "not satisfied? try another one."
    };

    languageFactory.es = {

      footer: {
        project: "un proyecto de",
        and: "y"
      },

      thisLang: "spanish",
      otherLocale: "en",

      about: "acerca de",
      other: "english",

      title: "generator de textos curatoriales",
      sub1: "¿no sabes qué escribir?",
      sub2: "aquí estamos para ayudar.",
      invitation: "empecemos:",

      fname: "nombres",
      lname: "apellidos",

      input: "ingresa el nombre del artista",
      sub3: "(o tu propio nombre, si eres un artista que se cura a sí mismo)",
      error: "espera! por favor ingresa nombres y apellidos.",

      result: "tu texto curatorial:",
      another: "¿insatisfecho? una vez más."
    };

    return languageFactory;
  })

  .controller('mainCtrl', function($state, LangSvc) {
    var vm = this;
    var userLang = (navigator.language || navigator.userLanguage).substring(0, 2);

    vm.send = function(req) {
      if (typeof req       === "undefined" ||
          typeof req.fname === "undefined" ||
          typeof req.lname === "undefined")
      {
        vm.error = true;
      } else {
        vm.error = false;
        $state.go('text', {
          fn: req.fname,
          ln: req.lname,
          lang: vm.lang.thisLang
        });
      }
    };

    vm.setLang = function(lang, reload) {
      if (lang === 'es') {
        vm.lang = LangSvc.es;
      } else if (lang === 'en') {
        vm.lang = LangSvc.en;
      }
    };

    vm.setLang(userLang, false);
  })

  .controller('textCtrl', function($state, MarkovSvc, $stateParams) {
    var vm = this;

    vm.request = function(lang) {
      vm.loading = true;
      MarkovSvc.get(lang || $stateParams.lang, $stateParams.fn, $stateParams.ln, 5)
        .then(function(response) {
          vm.content = response.data.text;
          vm.loading = false;
        }); 
    };

    vm.loading = true;
    vm.request();
  });