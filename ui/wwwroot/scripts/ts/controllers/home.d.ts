/// <reference types="angular" />
declare namespace tangent.test.controllers {
    interface ihomescope extends angular.IScope {
        login_user(): void;
        template: string;
        class: string;
    }
    class HomeController {
        static $inject: Array<string>;
        static CONTROLLERNAME: string;
        private scope;
        private rootScope;
        private element;
        private environment;
        constructor($scope: tangent.test.controllers.ihomescope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService);
        /**
         * determines if the current session has been successfully authenticated
         */
        is_authenticated(): void;
    }
}
