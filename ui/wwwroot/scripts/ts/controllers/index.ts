namespace tangent.test.controllers {
    "use strict";

    export interface iindexscope extends angular.IScope {
        user: iuserobject;
        login(): void;
        version: number;
        pagetitle: string;
        load_template(name?: string): void;
        template: string;
    }

    export interface iuserobject {
        email: string;
        first_name: string;
        id: number;
        is_active: boolean;
        is_staff: boolean;
        is_superuser: boolean;
        last_name: string;
        username: string;
        fullname?: string;
    }

    export class IndexController {
        static $inject: Array<string> = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
        static CONTROLLERNAME: string = "IndexController";

        private scope: tangent.test.controllers.iindexscope;
        private rootScope: angular.IRootScopeService;
        private element: angular.IRootElementService;
        private environment: tangent.test.services.EnvironmentService;
        private homeController: tangent.test.controllers.HomeController;

        constructor($scope: tangent.test.controllers.iindexscope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService) {
            this.scope = $scope;
            this.rootScope = $rootScope;
            this.element = $element;
            this.environment = environmentService;

            this.homeController = <tangent.test.controllers.HomeController>angular.element("body").controller();
           
            this.scope.version = 2.1;

            this.on_show();
            this.pull_user();

            this.scope.$watch("template", (newValue: any, oldValue: any) => {
                if (newValue !== oldValue) {
                    $scope.template = newValue;
                }
            });

            this.scope.load_template = this.load_template.bind(this);
        }

        private on_show(): void {
            angular.element(".page-topbar li.profile").addClass("showopacity");
            this.scope.pagetitle = "Dashboard";
            this.scope.template = "views/dashboard/partial.html";
        }

        private pull_user(): void {
            let url: string = "http://staging.tangent.tngnt.co/api/user/me/";
            this.environment.DataService.get(url, core.Authentication, this.pull_callback.bind(this), false, null);
        }

        private pull_callback(d: iuserobject, e: any): void {
            if (d) {
                tangent.test.core.Me = d;
                this.scope.user = d;
                this.scope.user.fullname = d.first_name + " " + d.last_name;
                this.scope.$digest();
            }
        }

        private load_template(name?: string): void {
            this.scope.template = name;
        }
    }
}