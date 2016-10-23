(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService, $rootScope) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.logout = logout;
        var userId = $routeParams.uid;

        function init(){
            vm.user = UserService.findUserById(userId)
        }
        init();

        function logout() {
            $location.url("/login");
        }

        function updateUser(newUser) {
            UserService.updateUser(userId, newUser);
        }

    }

})();