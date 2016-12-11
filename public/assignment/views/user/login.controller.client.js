(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);


    function LoginController($location, UserService, $rootScope) {
        var vm = this;
        vm.login = login;

        function login(username, password) {
            //var promise = UserService.findUserByCredentials(username, password);
            var promise = UserService.login(username, password);
            promise
                .success(function (user) {
                    if(user != '0') {
                        //var user = response.data;
                        $rootScope.currentUser = user;
                        $location.url("/user/" + user._id);
                    } else {
                        //console.log("no user");
                        vm.error = "No such user";
                    }
                })
                .error (function(){
                    vm.error = "error";
                });
        }
    }

})();
