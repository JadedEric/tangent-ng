/// <reference types="angular" />
declare namespace tangent.test.controllers {
    interface iloginscope extends angular.IScope {
        notice: string;
        login(): void;
    }
    interface iloginobject {
        username: string;
        password: string;
    }
    class LoginController {
        static $inject: Array<string>;
        static CONTROLLERNAME: string;
        private scope;
        private rootScope;
        private element;
        private environment;
        private homeController;
        constructor($scope: tangent.test.controllers.iloginscope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService);
        private login();
        private login_callback(d, e);
        private icheck();
    }
}
