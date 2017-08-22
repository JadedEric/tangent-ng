namespace tangent.test.controllers {
    "use strict";

    export interface ihomescope extends angular.IScope {
        login_user(): void;
        template: string;
        class: string;
    }

    export class HomeController {
        static $inject: Array<string> = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
        static CONTROLLERNAME: string = "HomeController";

        private scope: tangent.test.controllers.ihomescope;
        private rootScope: angular.IRootScopeService;
        private element: angular.IRootElementService;
        private environment: tangent.test.services.EnvironmentService;

        constructor($scope: tangent.test.controllers.ihomescope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService) {
            this.scope = $scope;
            this.rootScope = $rootScope;
            this.element = $element;
            this.environment = environmentService;

            this.is_authenticated();
        }

        /**
         * determines if the current session has been successfully authenticated
         */
        public is_authenticated(): void {
            if (!tangent.test.core.Authentication) {
                this.scope.template = "views/login/partial.html";
                this.scope.class = "login_page";
            }
            else {
                this.scope.template = "views/home/partial.html";
                this.scope.class = "";
            }
        }
    }
}