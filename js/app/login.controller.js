angular
  .module('ToDoApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$http','$state'];

function LoginController($scope, $http, $state) {
  $scope.signIn = signIn;
  $scope.signUp = signUp;
  this.loginSucces=loginSucces;
  this.loginError=loginError;


  function signIn() {
    var login = $scope.login;
    var pass = $scope.password;
    $http.post('/api/v1/auth/login/', {username : login, password : pass})
      .then(loginSucces,loginError);
  }

  function loginSucces(response){
    console.log('succes');
  }

  function loginError(response){
    console.log('error');
    $scope.allertMsg='Error:';
    $scope.isMsgHide=false;
  }

  function signUp(){
    $state.go('register');
  }
}
