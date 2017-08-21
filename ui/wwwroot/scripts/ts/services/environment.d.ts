declare namespace tangent.test.services {
    class EnvironmentService {
        static SERVICENAME: string;
        private dataservice;
        constructor(dataservice: tangent.test.services.DataService);
        readonly DataService: tangent.test.services.DataService;
    }
}
