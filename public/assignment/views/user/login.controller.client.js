(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);


    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(username, password) {
            // var user = UserService.findUserByCredentials(username, password);
            // if(user != null) {
            //     $location.url("/user/" + user._id);
            // } else {
            //     vm.alert = "Unable to login";
            // }
            var promise = UserService.findUserByCredentials(username, password);
            promise
                .success(function (user) {
                    if(user != '0') {
                        $location.url("/user/" + user._id);
                    } else {
                        vm.error = "No such user";
                    }
                })
                .error (function(){
                    vm.error = "error";
                });
        }
    }

})();
