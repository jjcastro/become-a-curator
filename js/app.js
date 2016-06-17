angular.module('app', []) 

.service('MarkovSvc', function($http) {

  var generatorFactory = {};

  generatorFactory.get = function(language, fname, lname, num) {
    
    var url = 'http://api.becomeacurator.com/' + language + '?';
            + 'fname=' + fname + '&'
            + 'lname=' + lname + '&';

    if (num) {
      url += 'num=' + num;
    }

    return $http.get(url);
  }

  return generatorFactory;

})

.controller('markovCtrl', function(MarkovSvc) {

  var vm = this;

  vm.mes = MarkovSvc.get('spanish', 'man', 'gor');

});