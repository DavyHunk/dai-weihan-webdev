(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;


        function register(username, password, password2) {
            if (password === password2) {
                UserService
                    .createUser(username, password)
                    .success(function (user) {
                        $location.url("/user/" + user._id);
                    })
                    .error (function(){
                        vm.error = "error";
                    });
            }
            else{
                console.log("please verify password");
            }
        }


    }
})();