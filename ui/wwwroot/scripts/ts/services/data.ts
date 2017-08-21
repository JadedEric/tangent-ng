namespace tangent.test.services {
    "use strict";

    export class DataService {

        private $http: angular.IHttpService = null;
        private $templateRequest: angular.ITemplateRequestService = null;

        constructor($http: angular.IHttpService, $templateRequest: angular.ITemplateRequestService) {
            this.$http = $http;
            this.$templateRequest = $templateRequest;
        }

        /**
         * create a new XMLHttpRequest object
         */
        public create_request(): XMLHttpRequest {
            let request: XMLHttpRequest = null;

            if ((<any>window).XMLHttpRequest) {
                request = new XMLHttpRequest();
            }

            return request;
        }

        /**
         * performs a standard GET request on a given URL
         */
        public get(url: string, params: any, callback: Function, cache: boolean, progress: Function): void {
            jQuery.get(url, params).done(()=> {
                callback;
            });
        }

        public post(url: string, params: any, callback: Function, cache: boolean, progress: Function): void {
            jQuery.post(url, params).done(()=> {
                callback;
            });
        }

    }
}