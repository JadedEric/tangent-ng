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
                    this.scope.login_user = this.login.bind(this);
                }
                /**
                 * determines if the current session has been successfully authenticated
                 */
                HomeController.prototype.is_authenticated = function () {
                    if (tangent.test.core.Authentication) {
                        angular.element("#login").addClass("hide");
                        angular.element("#app_layer").removeClass("hide");
                    }
                    else {
                        angular.element("#login").removeClass("hide");
                        angular.element("#app_layer").addClass("hide");
                    }
                };
                HomeController.prototype.login = function () {
                    var authentication_url = "http://staging.tangent.tngnt.co/api-token-auth", params = {
                        username: angular.element("#username").val(),
                        password: angular.element("#password").val()
                    };
                    tangent.test.core.EnvironmentService.DataService.post(authentication_url, params, this.authentication_callback, false, this.authentication_progress);
                };
                HomeController.prototype.authentication_callback = function (data, error) {
                    tangent.test.core.Authentication = "Hello";
                    this.is_authenticated();
                    debugger;
                };
                HomeController.prototype.authentication_progress = function (e) {
                    debugger;
                };
                HomeController.$inject = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
                HomeController.CONTROLLERNAME = "HomeController";
                return HomeController;
            }());
            controllers.HomeController = HomeController;
        })(controllers = test.controllers || (test.controllers = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
