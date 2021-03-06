angular.module('app', ['ui.router', 'ngSanitize', 'langService'])  

  // Put state/params in rootScope to enable custom background on <body>
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }])

  // ROUTES CONFIGURATION
  // ========================

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
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

  // BACKEND SERVICE
  // ========================

  .service('GeneratorSvc', function($http) {

    var generator = {};

    generator.get = function(language, fname, lname, num) {
      var url = 'http://become-a-curator-backend.herokuapp.com/' + language + '?'
              + 'fname=' + fname + '&'
              + 'lname=' + lname + '&';
      if (num) {
        url += 'num=' + num;
      }
      return $http.jsonp(url + '&callback=JSON_CALLBACK');
    };

    generator.getBits = function(document) {
      var url = 'http://become-a-curator-backend.herokuapp.com/bits?'
              + 'document=' + document;
      return $http.jsonp(url + '&callback=JSON_CALLBACK');
    };

    generator.addBits = function(document, string) {
      var url = 'http://become-a-curator-backend.herokuapp.com/bits?'
              + 'document=' + document;
      return $http.post(url, { string: string });
    };

    generator.addName = function(name) {
      var url = 'http://become-a-curator-backend.herokuapp.com/names';
      return $http.post(url, { user: {
        name: name,
        date: new Date()
      }});
    };

    return generator;
  })

  // MAIN CONTROLLER
  // ========================

  .controller('mainCtrl', function($state, LangSvc, GeneratorSvc) {
    var vm = this;
    var userLang = (navigator.language || navigator.userLanguage).substring(0, 2);

    vm.setLang = function(lang, reload) {
      if (lang === 'es') {
        vm.lang = LangSvc.es;
      } else {
        vm.lang = LangSvc.en;
      }
    };

    vm.send = function(req) {
      if (typeof req       === "undefined" ||
          typeof req.fname === "undefined" ||
          typeof req.lname === "undefined" ||
          typeof req.fname === ""          ||
          typeof req.lname === "")
      {
        vm.error = true;
      } else {
        vm.error = false;

        GeneratorSvc.addName(req.fname + ' ' + req.lname);

        $state.go('text', {
          fn: req.fname,
          ln: req.lname,
          lang: vm.lang.thisLang
        });
      }
    };

    vm.expandSources = function() {
      vm.expanded = true;
    };

    vm.setLang(userLang, false);
  })

  // TEXT RESULTS CONTROLLER
  // ========================

  .controller('textCtrl', function($state, GeneratorSvc, $stateParams) {
    var vm = this;

    vm.request = function(lang) {
      vm.loading = true;

      GeneratorSvc.get(lang || $stateParams.lang, $stateParams.fn, $stateParams.ln, 5)
        .then(function(response) {
          vm.content = response.data.text;
          vm.loading = false;
        });
    };

    vm.loading = true;
    vm.request();
  })

  // CONSOLE CONTROLLER
  // ========================

  .controller('consoleCtrl', function(GeneratorSvc, $state) {
    var vm = this;

    vm.getBits = function(lang) {
      GeneratorSvc.getBits('english-influences')
        .then(function(response) { vm.englishI = response.data }); 
      GeneratorSvc.getBits('english-cities')
        .then(function(response) { vm.englishC = response.data }); 
      GeneratorSvc.getBits('spanish-influences')
        .then(function(response) { vm.spanishI = response.data }); 
      GeneratorSvc.getBits('spanish-cities')
        .then(function(response) { vm.spanishC = response.data }); 
    };

    vm.add = function(doc, string) {
      if (typeof string !== "undefined" && string !== "") {
        GeneratorSvc.addBits(doc, string)
          .then(function(response) {
            $state.go($state.current, {}, {reload: true})
          });
      }
    };

    vm.getBits();
  });
