var tangent;
(function (tangent) {
    var test;
    (function (test) {
        var controllers;
        (function (controllers) {
            "use strict";
            var modalobject = (function () {
                function modalobject() {
                }
                return modalobject;
            }());
            controllers.modalobject = modalobject;
            var EmployeeController = (function () {
                function EmployeeController($scope, $rootScope, $element, environmentService) {
                    this.scope = $scope;
                    this.rootScope = $rootScope;
                    this.element = $element;
                    this.environment = environmentService;
                    this.homeController = angular.element("body").controller();
                    this.scope.pagetitle = "Employees";
                    this.scope.employees = test.core.Employees;
                    this.scope.gender = this.gender.bind(this);
                    this.scope.view_employee = this.view_employee.bind(this);
                }
                EmployeeController.prototype.gender = function (gender) {
                    var g = "Male";
                    if (gender.toLocaleLowerCase() === "f") {
                        g = "Female";
                    }
                    return g;
                };
                EmployeeController.prototype.view_employee = function (index) {
                    var employee = test.core.Employees[index];
                    if (!this.scope.modal) {
                        this.scope.modal = new modalobject();
                    }
                    this.scope.modal.title = "Details for " + employee.user.first_name + " " + employee.user.last_name;
                    this.scope.modal.fullname = employee.user.first_name + " " + employee.user.last_name;
                    this.scope.modal.age = employee.age;
                    this.scope.modal.email = employee.email;
                    this.scope.modal.phonenumber = employee.phone_number;
                    this.scope.modal.position = employee.position.name;
                    jQuery("#employee_modal").modal("show");
                };
                EmployeeController.$inject = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
                EmployeeController.CONTROLLERNAME = "EmployeeController";
                return EmployeeController;
            }());
            controllers.EmployeeController = EmployeeController;
        })(controllers = test.controllers || (test.controllers = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
