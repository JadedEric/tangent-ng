/// <reference types="angular" />
declare namespace tangent.test.controllers {
    interface ihomescope {
        login_user(): void;
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
        private is_authenticated();
        private login();
        private authentication_callback(data, error);
        private authentication_progress(e);
    }
}
