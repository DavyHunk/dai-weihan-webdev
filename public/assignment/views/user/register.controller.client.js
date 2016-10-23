(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;


        function register(username, password, password2) {
            var date = new Date();
            var n = date.getTime();
            var newUser = {
                username: username,
                password: password,
                _id: n+""
            };
            if (password === password2){
                UserService.createUser(newUser);
                $location.url("/user/"+newUser._id);
            }
            else{
                vm.error = "Unable to create new user";
            }
        }
    }
})();