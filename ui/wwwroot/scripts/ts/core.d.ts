/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference types="angular" />
declare namespace tangent.test.core {
    interface itokenobject {
        token: string;
    }
    let TangentApp: angular.IModule;
    let Authentication: string;
    let CompileProvider: angular.ICompileProvider;
    let EnvironmentService: tangent.test.services.EnvironmentService;
    let Me: tangent.test.controllers.iuserobject;
    let Employees: Array<tangent.test.controllers.iemployeeobject>;
}
