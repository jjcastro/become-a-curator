angular.module('app', ['ui.router']) 

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");
  // $locationProvider.html5Mode(true);
  $stateProvider
    // login page
    .state('main', {
      url         : "/",
      templateUrl : "views/main.tpl.html"
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

  .controller('mainCtrl', function(MarkovSvc) {

    var userLang = navigator.language || navigator.userLanguage; 
    console.log("The language is: " + userLang);

    var vm = this;

    vm.send = function(req) {
      MarkovSvc.get(req.language, req.fname, req.lname, req.num)
        .then(function(data) {
          vm.mes = data.data;
        }); 
    };

    
  });