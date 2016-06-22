angular.module('app', ['ui.router']) 

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
      templateUrl : "views/about.tpl.html"
    });
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

      about: "what's this?",
      other: "español",
      otherLocale: "es",

      title: "curatorial statement generator",
      sub1: "can't figure out what to write?",
      sub2: "we're here to help.",
      invitation: "let's get started:",

      fname: "first name",
      lname: "last name",

      input: "input the artist's name",
      sub3: "(or your own name if youʼre an artist who curates themselves)"
    };

    languageFactory.es = {

      about: "acerca de",
      other: "english",
      otherLocale: "en",

      title: "generator de textos curatoriales",
      sub1: "¿no sabes qué escribir?",
      sub2: "aquí estamos para ayudar.",
      invitation: "manos a la obra:",

      fname: "nombres",
      lname: "apellidos",

      input: "ingresa el nombre del artista",
      sub3: "(o tu propio nombre, si eres un artista que se cura a sí mismo)"
    };

    return languageFactory;
  })

  .controller('mainCtrl', function(MarkovSvc, LangSvc) {
    var vm = this;
    var userLang = (navigator.language || navigator.userLanguage).substring(0, 2);

    vm.send = function(req) {
      MarkovSvc.get(req.language, req.fname, req.lname, req.num)
        .then(function(data) {
          vm.mes = data.data;
        }); 
    };

    vm.setLang = function(lang) {
      console.log('Locale: ' + lang);
      if (lang === 'es') {
        vm.lang = LangSvc.es;
      } else if (lang === 'en') {
        vm.lang = LangSvc.en;
      }
    };

    vm.setLang(userLang);
  });