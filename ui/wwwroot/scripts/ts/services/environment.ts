namespace tangent.test.services {
    "use strict";

    export class EnvironmentService {

        static SERVICENAME: string = "EnvironmentService";

        private dataservice: tangent.test.services.DataService;

        constructor(dataservice: tangent.test.services.DataService) {
            this.dataservice = dataservice;

            tangent.test.core.EnvironmentService = this;
        }

        public get DataService(): tangent.test.services.DataService {
            return this.dataservice;
        }

    }
}