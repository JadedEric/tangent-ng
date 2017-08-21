namespace tangent.test.controllers {
    "use strict";

    export interface ihomescope {
        login_user(): void;
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

            this.scope.login_user = this.login.bind(this);
        }

        /**
         * determines if the current session has been successfully authenticated
         */
        private is_authenticated(): void {
            if (tangent.test.core.Authentication) {
                angular.element("#login").addClass("hide");
                angular.element("#app_layer").removeClass("hide");
            }
            else {
                angular.element("#login").removeClass("hide");
                angular.element("#app_layer").addClass("hide");
            }
        }

        private login(): void {
            let authentication_url: string = "http://staging.tangent.tngnt.co/api-token-auth",
                params: any = {
                    username: angular.element("#username").val(),
                    password: angular.element("#password").val()
                };
                
            tangent.test.core.EnvironmentService.DataService.post(authentication_url, 
                params, 
                this.authentication_callback, 
                false, 
                this.authentication_progress);
        }

        private authentication_callback(data: any, error: any): void {
            tangent.test.core.Authentication = "Hello";
            this.is_authenticated();
            debugger;
        }

        private authentication_progress(e): void {
            debugger;
        }
    }
}