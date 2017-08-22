var tangent;
(function (tangent) {
    var test;
    (function (test) {
        var controllers;
        (function (controllers) {
            "use strict";
            var DashboardController = (function () {
                function DashboardController($scope, $rootScope, $element, environmentService) {
                    this.scope = $scope;
                    this.rootScope = $rootScope;
                    this.element = $element;
                    this.environment = environmentService;
                    this.homeController = angular.element("body").controller();
                    this.pull_employees();
                }
                DashboardController.prototype.pull_employees = function () {
                    var url = "http://staging.tangent.tngnt.co/api/employee/";
                    this.environment.DataService.get(url, test.core.Authentication, this.employee_callback.bind(this), false, null);
                };
                DashboardController.prototype.employee_callback = function (d, e) {
                    test.core.Employees = d;
                    // count number of males and number of females
                    var males = jQuery.grep(d, function (v, e) {
                        return v.gender === "M";
                    });
                    var females = jQuery.grep(d, function (v, e) {
                        return v.gender === "F";
                    });
                    // count number of members who have worked for over 5 years
                    var longevity = jQuery.grep(d, function (v, e) {
                        return v.years_worked > 5;
                    });
                    // get all upcoming birthdays for the next 10 days
                    var birthdays = jQuery.grep(d, function (v, e) {
                        return v.days_to_birthday < 10;
                    });
                    this.scope.employeecount = d.length;
                    this.scope.maleemployees = males.length;
                    this.scope.femaleemployees = females.length;
                    this.scope.employeeslongevity = longevity.length;
                    this.scope.birthdays = birthdays;
                    this.scope.$digest();
                };
                DashboardController.$inject = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
                DashboardController.CONTROLLERNAME = "DashboardController";
                return DashboardController;
            }());
            controllers.DashboardController = DashboardController;
        })(controllers = test.controllers || (test.controllers = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
