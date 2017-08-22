/// <reference types="angular" />
declare namespace tangent.test.controllers {
    interface idashboardscope extends angular.IScope {
        employeecount: number;
        maleemployees: number;
        femaleemployees: number;
        employeeslongevity: number;
        birthdays: Array<iemployeeobject>;
    }
    interface ipositionobject {
        id: number;
        level: string;
        name: string;
        sort: number;
    }
    interface iemployeeobject {
        age: number;
        birth_date: string;
        days_to_birthday: number;
        email: string;
        gender: string;
        github_user: string;
        phone_number: string;
        position: ipositionobject;
        race: string;
        user: iuserobject;
        years_worked: number;
    }
    interface iemployeesobject {
        employees: Array<iemployeeobject>;
    }
    class DashboardController {
        static $inject: Array<string>;
        static CONTROLLERNAME: string;
        private scope;
        private rootScope;
        private element;
        private environment;
        private homeController;
        constructor($scope: tangent.test.controllers.idashboardscope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService);
        private pull_employees();
        private employee_callback(d, e);
    }
}
