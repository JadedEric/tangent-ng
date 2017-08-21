/// <reference types="angular" />
declare namespace tangent.test.services {
    class DataService {
        private $http;
        private $templateRequest;
        constructor($http: angular.IHttpService, $templateRequest: angular.ITemplateRequestService);
        /**
         * create a new XMLHttpRequest object
         */
        create_request(): XMLHttpRequest;
        /**
         * performs a standard GET request on a given URL
         */
        get(url: string, params: any, callback: Function, cache: boolean, progress: Function): void;
        post(url: string, params: any, callback: Function, cache: boolean, progress: Function): void;
    }
}
