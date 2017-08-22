var tangent;
(function (tangent) {
    var test;
    (function (test) {
        var controllers;
        (function (controllers) {
            "use strict";
            var HomeController = (function () {
                function HomeController($scope, $rootScope, $element, environmentService) {
                    this.scope = $scope;
                    this.rootScope = $rootScope;
                    this.element = $element;
                    this.environment = environmentService;
                    this.is_authenticated();
                }
                /**
                 * determines if the current session has been successfully authenticated
                 */
                HomeController.prototype.is_authenticated = function () {
                    if (!tangent.test.core.Authentication) {
                        this.scope.template = "views/login/partial.html";
                        this.scope.class = "login_page";
                    }
                    else {
                        this.scope.template = "views/home/partial.html";
                        this.scope.class = "";
                    }
                };
                HomeController.$inject = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
                HomeController.CONTROLLERNAME = "HomeController";
                return HomeController;
            }());
            controllers.HomeController = HomeController;
        })(controllers = test.controllers || (test.controllers = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
