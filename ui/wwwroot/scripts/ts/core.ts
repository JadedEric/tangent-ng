/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/angular/index.d.ts" />

namespace tangent.test.core {
    "use strict";

    export let TangentApp: angular.IModule = angular.module("TangentApp", []);
    export let Authentication: string;
    export let CompileProvider: angular.ICompileProvider = null;
    export let EnvironmentService: tangent.test.services.EnvironmentService = null;
    
    TangentApp.config(($compileProvider: angular.ICompileProvider, $controllerProvider: angular.IControllerProvider) => {
        $controllerProvider.allowGlobals();
        CompileProvider = $compileProvider;
    });
    
    TangentApp.service("DataService", ["$http", "$templateRequest", tangent.test.services.DataService]);
    TangentApp.service(tangent.test.services.EnvironmentService.SERVICENAME, ["DataService", tangent.test.services.EnvironmentService]);

    // controller registration
    TangentApp.controller(tangent.test.controllers.HomeController.CONTROLLERNAME, tangent.test.controllers.HomeController);


    // bootstrap
    angular.bootstrap(document, ["TangentApp"]);
}