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
      // console page
      .state('console', {
        url         : "/console",
        templateUrl : "views/console.tpl.html",
        controller  : "consoleCtrl",
      })
  })

  // BACKEND SERVICE
  // ========================

  .service('GeneratorSvc', function($http) {

    var generator = {};

    generator.get = function(language, fname, lname, num) {
      var url = 'http://api.becomeacurator.com/' + language + '?'
              + 'fname=' + fname + '&'
              + 'lname=' + lname + '&';
      if (num) {
        url += 'num=' + num;
      }
      return $http.jsonp(url + '&callback=JSON_CALLBACK');
    };

    generator.getBits = function(document) {
      var url = 'http://api.becomeacurator.com/bits?'
              + 'document=' + document;
      return $http.jsonp(url + '&callback=JSON_CALLBACK');
    };

    // generator.getBits = function(document) {
    //   var url = 'http://api.becomeacurator.com/bits?'
    //           + 'document=' + document;
    //   return $http.jsonp(url + '&callback=JSON_CALLBACK');
    // }

    return generator;
  })

  // MAIN CONTROLLER
  // ========================

  .controller('mainCtrl', function($state, LangSvc) {
    var vm = this;
    var userLang = (navigator.language || navigator.userLanguage).substring(0, 2);

    vm.setLang = function(lang, reload) {
      if (lang === 'es') {
        vm.lang = LangSvc.es;
      } else if (lang === 'en') {
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

  .controller('consoleCtrl', function($state, GeneratorSvc, $stateParams) {
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
  });