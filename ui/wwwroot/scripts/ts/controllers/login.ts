namespace tangent.test.controllers {
    "use strict";

    export interface iloginscope extends angular.IScope {
        notice: string;
        login(): void;
    }

    export interface iloginobject {
        username: string;
        password: string;
    }

    export class LoginController {
        static $inject: Array<string> = ["$scope", "$rootScope", "$element", tangent.test.services.EnvironmentService.SERVICENAME];
        static CONTROLLERNAME: string = "LoginController";

        private scope: tangent.test.controllers.iloginscope;
        private rootScope: angular.IRootScopeService;
        private element: angular.IRootElementService;
        private environment: tangent.test.services.EnvironmentService;
        private homeController: tangent.test.controllers.HomeController;

        constructor($scope: tangent.test.controllers.iloginscope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService) {
            this.scope = $scope;
            this.rootScope = $rootScope;
            this.element = $element;
            this.environment = environmentService;

            this.homeController = <tangent.test.controllers.HomeController>angular.element("body").controller();

            this.icheck();
            this.scope.login = this.login.bind(this);
        }

        private login(): void {
            let url: string = "http://staging.tangent.tngnt.co/api-token-auth/",
                params: iloginobject = {
                    username: angular.element("#user_login").val(),
                    password: angular.element("#user_pass").val()
                };

            this.environment.DataService.post(url, params, this.login_callback.bind(this), true, null);
        }

        private login_callback(d: core.itokenobject, e: any): void {
            if (d.token) {
                core.Authentication = d.token;
                this.homeController.is_authenticated();

                (<any>this.homeController).scope.$digest();
            }
        }

        private icheck(): void {
           (<any>angular.element("input[type=checkbox].iCheck")).iCheck({
               checkboxClass: "icheckbox_minimal",
               radioClass: "iradio_minimal",
               increaseArea: "20%"
           });

           let x: number = 0,
               colors: Array<string> = ["-green", "-red", "-yellow", "-blue", "-aero", "-orange", "-grey", "-pink", "-purple","-white"];

           for (x = 0; x < colors.length; x++) {
               if (x == 0) {
                   (<any>angular.element("input.skin-square")).iCheck({
                    checkboxClass: "icheckbox_square" + colors[x],
                    radioClass: "iradio_square" + colors[x],
                    increaseArea: "20%"
                   });
               }

               (<any>angular.element("input.skin-square" + colors[x])).iCheck({
                checkboxClass: "icheckbox_square" + colors[x],
                radioClass: "iradio_square" + colors[x],
                increaseArea: "20%"
               });
           }
        }
    }
}