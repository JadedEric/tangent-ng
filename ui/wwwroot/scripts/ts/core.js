/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
var tangent;
(function (tangent) {
    var test;
    (function (test) {
        var core;
        (function (core) {
            "use strict";
            core.TangentApp = angular.module("TangentApp", []);
            core.CompileProvider = null;
            core.EnvironmentService = null;
            core.Me = null;
            core.Employees = null;
            core.TangentApp.config(function ($compileProvider, $controllerProvider) {
                $controllerProvider.allowGlobals();
                core.CompileProvider = $compileProvider;
            });
            core.TangentApp.service("DataService", ["$http", "$templateRequest", tangent.test.services.DataService]);
            core.TangentApp.service(tangent.test.services.EnvironmentService.SERVICENAME, ["DataService", tangent.test.services.EnvironmentService]);
            // controller registration
            core.TangentApp.controller(tangent.test.controllers.HomeController.CONTROLLERNAME, tangent.test.controllers.HomeController);
            core.TangentApp.controller(tangent.test.controllers.LoginController.CONTROLLERNAME, tangent.test.controllers.LoginController);
            core.TangentApp.controller(tangent.test.controllers.DashboardController.CONTROLLERNAME, tangent.test.controllers.DashboardController);
            core.TangentApp.controller(tangent.test.controllers.EmployeeController.CONTROLLERNAME, tangent.test.controllers.EmployeeController);
            core.TangentApp.controller(tangent.test.controllers.IndexController.CONTROLLERNAME, tangent.test.controllers.IndexController);
            // bootstrap
            angular.bootstrap(document, ["TangentApp"]);
        })(core = test.core || (test.core = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
