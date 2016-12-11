(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.logout = logout;
        vm.deleteUser = deleteUser;
        //vm.userId = $routeParams.uid;

        function init(){
            UserService
                //.findUserById(vm.userId)
                .findCurrentUser()
                .success(function (user) {
                    if(user != '0') {
                        vm.user = user;
                    }
                })
                .error (function(){
                    vm.error = "error";
                });
        }
        init();

        function logout() {
            UserService
                .logout()
                .success(function(){
                    $location.url("/login");
            })
                .error (function(){
                    vm.error = "error";
                });
        }

        function updateUser() {
            UserService
                .updateUser(vm.user)
                .success(function(){

                })
                .error (function(){
                    vm.error = "error";
                });
        }

        function deleteUser() {
            UserService
                .deleteUser(vm.user._id)
                .success(function(){
                    $location.url("/login");
                })
                .error (function(){
                    vm.error = "error";
                });

        }

    }

})();