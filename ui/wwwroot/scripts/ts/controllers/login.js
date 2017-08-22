var tangent;
(function (tangent) {
    var test;
    (function (test) {
        var controllers;
        (function (controllers) {
            "use strict";
            var LoginController = (function () {
                function LoginController($scope, $rootScope, $element, environmentService) {
                    this.scope = $scope;
                    this.rootScope = $rootScope;
                    this.element = $element;
                    this.environment = environmentService;
                    this.homeController = angular.element("body").controller();
                    this.icheck();
                    this.scope.login = this.login.bind(this);
                }
                LoginController.prototype.login = function () {
                    var url = "http://staging.tangent.tngnt.co/api-token-auth/", params = {
                        username: angular.element("#user_login").val(),
                        password: angular.element("#user_pass").val()
                    };
                    this.environment.DataService.post(url, params, this.login_callback.bind(this), true, null);
                };
                LoginController.prototype.login_callback = function (d, e) {
                    if (d.token) {
                        test.core.Authentication = d.token;
                        this.homeController.is_authenticated();
                        this.homeController.scope.$digest();
                    }
                };
                LoginController.prototype.icheck = function () {
                    angular.element("input[type=checkbox].iCheck").iCheck({
                        checkboxClass: "icheckbox_minimal",
                        radioClass: "iradio_minimal",
                        increaseArea: "20%"
                    });
                    var x = 0, colors = ["-green", "-red", "-yellow", "-blue", "-aero", "-orange", "-grey", "-pink", "-purple", "-white"];
                    for (x = 0; x < colors.length; x++) {
                        if (x == 0) {
                            angular.element("input.skin-square").iCheck({
                                checkboxClass: "icheckbox_square" + colors[x],
                                radioClass: "iradio_square" + colors[x],
                                increaseArea: "20%"
                            });
                        }
                        angular.element("input.skin-square" + colors[x]).iCheck({
                            checkboxClass: "icheckbox_square" + colors[x],
                            radioClass: "iradio_square" + colors[x],
                            increaseArea: "20%"
                        });
                    }
                };
                LoginController.$inject = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
                LoginController.CONTROLLERNAME = "LoginController";
                return LoginController;
            }());
            controllers.LoginController = LoginController;
        })(controllers = test.controllers || (test.controllers = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
