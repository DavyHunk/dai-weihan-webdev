//
// (function(){
//     angular
//         .module("WebAppMaker")
//         .controller("RegisterController", RegisterController);
//
//
//     function RegisterController($routeParams, UserService) {
//         var vm = this;
//         vm.userId = $routeParams["userId"];
//         function init() {
//             vm.user = UserService.findUserById(vm.userId);
//         }
//         init();
//     }
//
// })();

(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;

        vm.register = register;

        function register(username, password, password2) {
            UserService
                .register(username, password)
                .then(
                    function(response){
                        var user = response.data;
                        if(user) {
                            $location.url("/profile/"+user._id);
                        }
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
    }
})();