var tangent;
(function (tangent) {
    var test;
    (function (test) {
        var controllers;
        (function (controllers) {
            "use strict";
            var IndexController = (function () {
                function IndexController($scope, $rootScope, $element, environmentService) {
                    this.scope = $scope;
                    this.rootScope = $rootScope;
                    this.element = $element;
                    this.environment = environmentService;
                    this.homeController = angular.element("body").controller();
                    this.scope.version = 2.1;
                    this.on_show();
                    this.pull_user();
                    this.scope.$watch("template", function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            $scope.template = newValue;
                        }
                    });
                    this.scope.load_template = this.load_template.bind(this);
                }
                IndexController.prototype.on_show = function () {
                    angular.element(".page-topbar li.profile").addClass("showopacity");
                    this.scope.pagetitle = "Dashboard";
                    this.scope.template = "views/dashboard/partial.html";
                };
                IndexController.prototype.pull_user = function () {
                    var url = "http://staging.tangent.tngnt.co/api/user/me/";
                    this.environment.DataService.get(url, test.core.Authentication, this.pull_callback.bind(this), false, null);
                };
                IndexController.prototype.pull_callback = function (d, e) {
                    if (d) {
                        tangent.test.core.Me = d;
                        this.scope.user = d;
                        this.scope.user.fullname = d.first_name + " " + d.last_name;
                        this.scope.$digest();
                    }
                };
                IndexController.prototype.load_template = function (name) {
                    this.scope.template = name;
                };
                IndexController.$inject = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
                IndexController.CONTROLLERNAME = "IndexController";
                return IndexController;
            }());
            controllers.IndexController = IndexController;
        })(controllers = test.controllers || (test.controllers = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
