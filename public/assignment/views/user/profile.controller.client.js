//
// (function(){
//     angular
//         .module("WebAppMaker")
//         .controller("ProfileController", ProfileController);
//
//
//     function ProfileController($routeParams, UserService) {
//         var vm = this;
//         vm.userId = $routeParams["userId"];
//         function init() {
//             vm.user = UserService.findUserById(vm.userId);
//         }
//         init();
//     }
//
// })();

(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService, $rootScope) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.unregister = unregister;
        vm.logout = logout;

        var id = $rootScope.currentUser._id;

        function init() {
            UserService
                .findUserById(id)
                .then(function(response){
                    vm.user = response.data;
                });
        }
        init();

        function logout() {
            UserService
                .logout()
                .then(
                    function(response){
                        $location.url("/login");
                    },
                    function() {
                        $location.url("/login");
                    }
                )
        }

        function unregister() {
            UserService
                .deleteUser(id)
                .then(
                    function(){
                        $location.url("/login");
                    },
                    function() {
                        vm.error = "Unable to remove user"
                    }
                );
        }

        function updateUser(newUser) {
            UserService
                .updateUser(id, newUser)
                .then(
                    function(response) {
                        vm.success = "Updated successfully";
                    },
                    function(error) {
                        vm.error = "Unable to update user"
                    }
                );
        }
    }

})();