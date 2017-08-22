/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/angular/index.d.ts" />

namespace tangent.test.core {
    "use strict";

    export interface itokenobject {
        token: string;
    }

    export let TangentApp: angular.IModule = angular.module("TangentApp", []);
    export let Authentication: string;
    export let CompileProvider: angular.ICompileProvider = null;
    export let EnvironmentService: tangent.test.services.EnvironmentService = null;
    export let Me: tangent.test.controllers.iuserobject = null;
    export let Employees: Array<tangent.test.controllers.iemployeeobject> = null;
    
    TangentApp.config(($compileProvider: angular.ICompileProvider, $controllerProvider: angular.IControllerProvider) => {
        $controllerProvider.allowGlobals();
        CompileProvider = $compileProvider;
    });
    
    TangentApp.service("DataService", ["$http", "$templateRequest", tangent.test.services.DataService]);
    TangentApp.service(tangent.test.services.EnvironmentService.SERVICENAME, ["DataService", tangent.test.services.EnvironmentService]);

    // controller registration
    TangentApp.controller(tangent.test.controllers.HomeController.CONTROLLERNAME, tangent.test.controllers.HomeController);
    TangentApp.controller(tangent.test.controllers.LoginController.CONTROLLERNAME, tangent.test.controllers.LoginController);
    TangentApp.controller(tangent.test.controllers.DashboardController.CONTROLLERNAME, tangent.test.controllers.DashboardController);
    TangentApp.controller(tangent.test.controllers.EmployeeController.CONTROLLERNAME, tangent.test.controllers.EmployeeController);
    TangentApp.controller(tangent.test.controllers.IndexController.CONTROLLERNAME, tangent.test.controllers.IndexController);

    // bootstrap
    angular.bootstrap(document, ["TangentApp"]);
}