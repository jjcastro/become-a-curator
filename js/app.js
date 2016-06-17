angular.module('app', []) 

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

.controller('markovCtrl', function(MarkovSvc) {

  var vm = this;

  vm.send = function(req) {
    MarkovSvc.get(req.language, req.fname, req.lname, req.num)
      .then(function(data) {
        vm.mes = data.data;
      }); 
  };

  
});