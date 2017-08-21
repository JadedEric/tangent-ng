/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference types="angular" />
declare namespace tangent.test.core {
    let TangentApp: angular.IModule;
    let Authentication: string;
    let CompileProvider: angular.ICompileProvider;
    let EnvironmentService: tangent.test.services.EnvironmentService;
}
