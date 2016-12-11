(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService, $rootScope) {
        var vm = this;
        vm.register = register;


        function register(username, password, password2) {
            if(!username || !password || !password2){
                vm.error = "error";
            }
            else{
                var newUser = {
                    username: username,
                    password: password
                };
                if (password === password2) {
                    UserService
                        .register(newUser)
                        .success(function (user) {
                            $rootScope.currentUser = user;
                            $location.url("/user/" + user._id);
                        })
                        .error(function () {
                            vm.error = "error";
                        });
                }
            }

        }


    }
})();