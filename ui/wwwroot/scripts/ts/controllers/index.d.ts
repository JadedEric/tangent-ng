/// <reference types="angular" />
declare namespace tangent.test.controllers {
    interface iindexscope extends angular.IScope {
        user: iuserobject;
        login(): void;
        version: number;
        pagetitle: string;
        load_template(name?: string): void;
        template: string;
    }
    interface iuserobject {
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
    class IndexController {
        static $inject: Array<string>;
        static CONTROLLERNAME: string;
        private scope;
        private rootScope;
        private element;
        private environment;
        private homeController;
        constructor($scope: tangent.test.controllers.iindexscope, $rootScope: angular.IRootScopeService, $element: angular.IRootElementService, environmentService: tangent.test.services.EnvironmentService);
        private on_show();
        private pull_user();
        private pull_callback(d, e);
        private load_template(name?);
    }
}
