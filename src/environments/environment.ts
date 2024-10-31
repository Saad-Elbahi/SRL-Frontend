// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr: false,
    apiUrl: 'http://localhost:4000',

    unreachableHost: 'http://localhost:9100',

    authHost: 'http://localhost:6108',
    authCmdHost: 'http://localhost:6108/jwt/commands',
    authQueryHost: 'http://localhost:6108/jwt/queries',

    subContractorCmdHost: 'https://node118212-env-sr-str.jcloud-ver-jpe.ik-server.com/subcontractors/commands',
    subContractorQueryHost: 'https://node118212-env-sr-str.jcloud-ver-jpe.ik-server.com/soustraitances/queries/byMarche/',
//Logistique
    affaireapi: "http://localhost:6201/affaireapi",
    chauffeurapi: "http://localhost:6201/chauffeurapi",
    fournisseurapi: "http://localhost:6201/fournisseurapi",
    frommvtapi: "http://localhost:6201/frommvtapi",
    tripimpapi: "http://localhost:6201/tripimpapi",
    vhgpsapi: "http://localhost:6201/vhgpsapi",
    vhrouteapi: "http://localhost:6201/vhrouteapi",
    soustraitantapi:"http://localhost:6201/soustraitantapi",
    lotApi:"http://localhost:6201/lotApi",
    clientApi:"http://localhost:6201/clientApi"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
