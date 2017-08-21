var tangent;
(function (tangent) {
    var test;
    (function (test) {
        var services;
        (function (services) {
            "use strict";
            var DataService = (function () {
                function DataService($http, $templateRequest) {
                    this.$http = null;
                    this.$templateRequest = null;
                    this.$http = $http;
                    this.$templateRequest = $templateRequest;
                }
                /**
                 * create a new XMLHttpRequest object
                 */
                DataService.prototype.create_request = function () {
                    var request = null;
                    if (window.XMLHttpRequest) {
                        request = new XMLHttpRequest();
                    }
                    return request;
                };
                /**
                 * performs a standard GET request on a given URL
                 */
                DataService.prototype.get = function (url, params, callback, cache, progress) {
                    jQuery.get(url, params).done(function () {
                        callback;
                    });
                };
                DataService.prototype.post = function (url, params, callback, cache, progress) {
                    jQuery.post(url, params).done(function () {
                        callback;
                    });
                };
                return DataService;
            }());
            services.DataService = DataService;
        })(services = test.services || (test.services = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
