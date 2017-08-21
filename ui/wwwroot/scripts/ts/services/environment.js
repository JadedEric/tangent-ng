var tangent;
(function (tangent) {
    var test;
    (function (test) {
        var services;
        (function (services) {
            "use strict";
            var EnvironmentService = (function () {
                function EnvironmentService(dataservice) {
                    this.dataservice = dataservice;
                    tangent.test.core.EnvironmentService = this;
                }
                Object.defineProperty(EnvironmentService.prototype, "DataService", {
                    get: function () {
                        return this.dataservice;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnvironmentService.SERVICENAME = "EnvironmentService";
                return EnvironmentService;
            }());
            services.EnvironmentService = EnvironmentService;
        })(services = test.services || (test.services = {}));
    })(test = tangent.test || (tangent.test = {}));
})(tangent || (tangent = {}));
