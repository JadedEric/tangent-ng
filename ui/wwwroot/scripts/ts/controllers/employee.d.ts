/// <reference types="angular" />
declare namespace tangent.test.controllers {
    interface iemployeescope extends angular.IScope {
        pagetitle: string;
        employees: Array<iemployeeobject>;
        gender(): string;
        view_employee(index: number): void;
        modal: imodalobject;
    }
    interface imodalobject {
        title?: string;
        fullname?: string;
        email?: string;
        age?: number;
        birthday?: string;
        phonenumber?: string;
        position?: string;
    }
    class modalobject implements imodalobject {
    }
    class EmployeeController {
        static $inject: Array<string>;
        static CONTROLLERNAME: string;
        private scope;
        private rootScope;
        private element;
        private environment;
        private homeController;
        constructor($scope: tangent.test.controllers.iemployeescope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService);
        private gender(gender);
        private view_employee(index);
    }
}
