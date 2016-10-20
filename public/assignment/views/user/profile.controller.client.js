(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService, $rootScope) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.logout = logout;

        var id = $rootScope._id;

        function logout() {
            $location.url("/login");
        }

        function updateUser(newUser) {
            UserService.updateUser(id, newUser);
        }
    }

})();