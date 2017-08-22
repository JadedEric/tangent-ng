namespace tangent.test.controllers {
    "use strict";

    export interface idashboardscope extends angular.IScope {
        employeecount: number;
        maleemployees: number;
        femaleemployees: number;
        employeeslongevity: number;
        birthdays: Array<iemployeeobject>;
    }

    export interface ipositionobject {
        id: number;
        level: string;
        name: string;
        sort: number;
    }

    export interface iemployeeobject {
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

    export interface iemployeesobject {
        employees: Array<iemployeeobject>;
    }

    export class DashboardController {
        static $inject: Array<string> = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
        static CONTROLLERNAME: string = "DashboardController";

        private scope: tangent.test.controllers.idashboardscope;
        private rootScope: angular.IRootScopeService;
        private element: angular.IRootElementService;
        private environment: tangent.test.services.EnvironmentService;
        private homeController: tangent.test.controllers.HomeController;

        constructor($scope: tangent.test.controllers.idashboardscope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService) {
            this.scope = $scope;
            this.rootScope = $rootScope;
            this.element = $element;
            this.environment = environmentService;

            this.homeController = <tangent.test.controllers.HomeController>angular.element("body").controller();

            this.pull_employees();
        }

        private pull_employees(): void {
            let url: string = "http://staging.tangent.tngnt.co/api/employee/";

            this.environment.DataService.get(url, core.Authentication, this.employee_callback.bind(this), false, null);
        }

        private employee_callback(d: Array<iemployeeobject>, e: any): void {
            core.Employees = d;

            // count number of males and number of females
            let males: Array<iemployeeobject> = jQuery.grep(d, (v: iemployeeobject, e: number): boolean => {
                return v.gender === "M";
            });

            let females: Array<iemployeeobject> = jQuery.grep(d, (v: iemployeeobject, e: number): boolean => {
                return v.gender === "F";
            });

            // count number of members who have worked for over 5 years

            let longevity: Array<iemployeeobject> = jQuery.grep(d, (v: iemployeeobject, e: number): boolean => {
                return v.years_worked > 5;
            });

            // get all upcoming birthdays for the next 10 days
            let birthdays: Array<iemployeeobject> = jQuery.grep(d, (v: iemployeeobject, e: number): boolean => {
                return v.days_to_birthday < 10;
            });

            this.scope.employeecount = d.length;
            this.scope.maleemployees = males.length;
            this.scope.femaleemployees = females.length;
            this.scope.employeeslongevity = longevity.length;
            this.scope.birthdays = birthdays;
            this.scope.$digest();
        }
    }
}