namespace tangent.test.controllers {
    "use strict";

    export interface iemployeescope extends angular.IScope {
        pagetitle: string;
        employees: Array<iemployeeobject>;
        gender(): string;
        view_employee(index: number): void;
        modal: imodalobject;
    }

    export interface imodalobject {
        title?: string;
        fullname?: string;
        email?: string;
        age?: number;
        birthday?: string;
        phonenumber?: string;
        position?: string;
    }

    export class modalobject implements imodalobject {

    }

    export class EmployeeController {
        static $inject: Array<string> = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
        static CONTROLLERNAME: string = "EmployeeController";

        private scope: tangent.test.controllers.iemployeescope;
        private rootScope: angular.IRootScopeService;
        private element: angular.IRootElementService;
        private environment: tangent.test.services.EnvironmentService;
        private homeController: tangent.test.controllers.HomeController;

        constructor($scope: tangent.test.controllers.iemployeescope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService) {
            this.scope = $scope;
            this.rootScope = $rootScope;
            this.element = $element;
            this.environment = environmentService;

            this.homeController = <tangent.test.controllers.HomeController>angular.element("body").controller();
        
            this.scope.pagetitle = "Employees";
            this.scope.employees = core.Employees;

            this.scope.gender = this.gender.bind(this);
            this.scope.view_employee = this.view_employee.bind(this);
        }

        private gender(gender: string): string {
            let g: string = "Male";

            if (gender.toLocaleLowerCase() === "f") {
                g = "Female";
            }

            return g;
        }

        private view_employee(index: number): void {
            let employee: iemployeeobject = <iemployeeobject>core.Employees[index];
            
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
        }
    }
}