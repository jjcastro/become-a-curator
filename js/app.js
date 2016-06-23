angular.module('app', ['ui.router', 'ngSanitize', 'langService']) 

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

  .controller('mainCtrl', function($state, LangSvc) {
    var vm = this;
    var userLang = (navigator.language || navigator.userLanguage).substring(0, 2);

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