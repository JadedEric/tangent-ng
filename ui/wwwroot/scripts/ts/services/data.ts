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
        public get(url: string, token: string, callback: Function, cache: boolean, progress: Function): void {
            jQuery.ajax({
                type: "GET",
                url: url,
                beforeSend: (xhr) => {
                    xhr.setRequestHeader("Authorization", "Token " + token);
                },
                async: true,
                crossDomain: true
            }).done((d: any, e: any) => {
                callback(d, e);
            })
        }

        public post(url: string, params: any, callback: Function, cache: boolean, progress: Function): void {
            jQuery.ajax({
                type: "POST",
                url: url,
                data: params,
                async: true,
                crossDomain: true
            }).done((d: any, e: any)=> {
                callback(d, e);
            });
        }

    }
}