angular
  .module('ToDoApp', ['ui.router',
                      'ngResource',
                      'ui.bootstrap']);

angular.module('ToDoApp').config(routeConf);

function routeConf($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/login");
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller:  'LoginController'
    })
    .state('register', {
      url: "/register",
      templateUrl: 'views/register.html',
      controller: 'RegisterController'
    })
    .state('mytasks', {
      url: '/mytasks',
      templateUrl: 'views/main.html',
      controller: 'TasksController'
    });
}

angular
  .module('ToDoApp')
  .config(resourceConfig);

function resourceConfig($resourceProvider){
  $resourceProvider.defaults.stripTrailingSlashes = false;
}
