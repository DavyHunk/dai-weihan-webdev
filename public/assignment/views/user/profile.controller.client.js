(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.logout = logout;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
        vm.deleteUser = deleteUser;
        vm.userId = $routeParams.uid;

        function init(){
            UserService
                .findUserById(vm.userId)
                .success(function (user) {
                    if(user != '0') {
                        vm.user = user;
                    }
                })
                .error (function(){
                    vm.error = "error";
                });
=======
        var userId = $routeParams.uid;

        function init(){
            vm.user = UserService.findUserById(userId)
>>>>>>> origin/master
        }
        init();

        function logout() {
            $location.url("/login");
        }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
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

<<<<<<< HEAD
=======
=======
        function updateUser(newUser) {
            UserService.updateUser(userId, newUser);
>>>>>>> origin/master
>>>>>>> origin/master
        }

    }

})();