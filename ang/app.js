(function(angular) { 'use strict';

var appModule = angular.module('CeradBlogApp', 
[
  'ngRoute'
]);
appModule.run(['$document', function($document) 
{
  // With jqLite, this seems to be the best solution
  var queryResult = $document[0].getElementById('angular-not-running');
  
  angular.element(queryResult).remove();
  
  console.log('CeradBlogApp run');
}]);

})(angular);
