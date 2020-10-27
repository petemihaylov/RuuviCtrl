(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/fake/fake-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_helpers/fake/fake-api.service.ts ***!
  \***************************************************/
/*! exports provided: FakeAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeAPIService", function() { return FakeAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fake_db_users_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-db/users.table */ "./src/app/_helpers/fake/fake-db/users.table.ts");
/* harmony import */ var _fake_db_cars_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-db/cars.table */ "./src/app/_helpers/fake/fake-db/cars.table.ts");




class FakeAPIService {
    constructor() { }
    /**
     * Create Fake DB and API
     */
    createDb() {
        // tslint:disable-next-line:class-name
        const db = {
            // auth module
            users: _fake_db_users_table__WEBPACK_IMPORTED_MODULE_1__["UsersTable"].users,
            // data-table
            cars: _fake_db_cars_table__WEBPACK_IMPORTED_MODULE_2__["CarsTable"].cars,
        };
        return db;
    }
}
FakeAPIService.ɵfac = function FakeAPIService_Factory(t) { return new (t || FakeAPIService)(); };
FakeAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeAPIService, factory: FakeAPIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/fake/fake-db/cars.table.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/fake/fake-db/cars.table.ts ***!
  \*****************************************************/
/*! exports provided: CarsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsTable", function() { return CarsTable; });
class CarsTable {
}
CarsTable.cars = [
    {
        id: 1,
        cModel: 'Elise',
        cManufacture: 'Lotus',
        cModelYear: 2004,
        cMileage: 116879,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lotus Elise first appeared in 1996 and revolutionised small sports car design with its lightweight extruded aluminium chassis and composite body. There have been many variations, but the basic principle remain the same.`,
        cColor: 'Red',
        cPrice: 18347,
        cCondition: 1,
        createdDate: '09/30/2017',
        cStatus: 0,
        cVINCode: '1FTWX3D52AE575540',
    },
    {
        id: 2,
        cModel: 'Sunbird',
        cManufacture: 'Pontiac',
        cModelYear: 1984,
        cMileage: 99515,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Sunbird is an automobile that was produced by Pontiac, initially as a subcompact for the 1976 to 1980 cModel years,and later as a compact for the 1982 to 1994 cModel years. The Sunbird badge ran for 18 years (with a hiatus during the 1981 and 1982 cModel years, as the 1982 cModel was called J2000) and was then replaced in 1995 by the Pontiac Sunfire. Through the years the Sunbird was available in notchback coupé, sedan, hatchback, station wagon, and convertible body styles.`,
        cColor: 'Khaki',
        cPrice: 165956,
        cCondition: 0,
        createdDate: '03/22/2018',
        cStatus: 1,
        cVINCode: 'JM1NC2EF8A0293556',
    },
    {
        id: 3,
        cModel: 'Amigo',
        cManufacture: 'Isuzu',
        cModelYear: 1993,
        cMileage: 138027,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Isuzu MU is a mid-size SUV that was produced by the Japan-based cManufacturer Isuzu. The three-door MU was introduced in 1989, followed in 1990 by the five-door version called Isuzu MU Wizard, both of which stopped production in 1998 to be replaced by a second generation. This time, the five-door version dropped the "MU" prefix, to become the Isuzu Wizard. The acronym "MU" is short for "Mysterious Utility". Isuzu cManufactured several variations to the MU and its derivates for sale in other countries.`,
        cColor: 'Aquamarine',
        cPrice: 45684,
        cCondition: 0,
        createdDate: '03/06/2018',
        cStatus: 0,
        cVINCode: '1G6DG8E56C0973889',
    },
    {
        id: 4,
        cModel: 'LS',
        cManufacture: 'Lexus',
        cModelYear: 2004,
        cMileage: 183068,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lexus LS (Japanese: レクサス・LS, Rekusasu LS) is a full-size luxury car (F-segment in Europe) serving as the flagship cModel of Lexus, the luxury division of Toyota. For the first four generations, all LS cModels featured V8 engines and were predominantly rear-wheel-drive, with Lexus also offering all-wheel-drive, hybrid, and long-wheelbase variants. The fifth generation changed to using a V6 engine with no V8 option, and the long wheelbase variant was removed entirely.`,
        cColor: 'Mauv',
        cPrice: 95410,
        cCondition: 1,
        createdDate: '02/03/2018',
        cStatus: 1,
        cVINCode: '2T1BU4EE6DC859114',
    },
    {
        id: 5,
        cModel: 'Paseo',
        cManufacture: 'Toyota',
        cModelYear: 1997,
        cMileage: 74884,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota Paseo (known as the Cynos in Japan and other regions) is a sports styled compact car sold from 1991–1999 and was loosely based on the Tercel. It was available as a coupe and in later cModels as a convertible. Toyota stopped selling the car in the United States in 1997, however the car continued to be sold in Canada, Europe and Japan until 1999, but had no direct replacement. The Paseo, like the Tercel, shares a platform with the Starlet. Several parts are interchangeable between the three`,
        cColor: 'Pink',
        cPrice: 24796,
        cCondition: 1,
        createdDate: '08/13/2017',
        cStatus: 0,
        cVINCode: '1D7RB1GP0AS597432',
    },
    {
        id: 6,
        cModel: 'M',
        cManufacture: 'Infiniti',
        cModelYear: 2009,
        cMileage: 194846,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Infiniti M is a line of mid-size luxury (executive) cars from the Infiniti luxury division of Nissan.\r\nThe first iteration was the M30 Coupe/Convertible, which were rebadged JDM Nissan Leopard.\r\nAfter a long hiatus, the M nameplate was used for Infiniti's mid-luxury sedans (executive cars). First was the short-lived M45 sedan, a rebadged version of the Japanese-spec Nissan Gloria. The next generations, the M35/45 and M37/56/35h/30d, became the flagship of the Infiniti brand and are based on the JDM Nissan Fuga.`,
        cColor: 'Puce',
        cPrice: 30521,
        cCondition: 1,
        createdDate: '01/27/2018',
        cStatus: 0,
        cVINCode: 'YV1940AS1D1542424',
    },
    {
        id: 7,
        cModel: 'Phantom',
        cManufacture: 'Rolls-Royce',
        cModelYear: 2008,
        cMileage: 164124,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Rolls-Royce Phantom VIII is a luxury saloon car cManufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of Rolls-Royce Phantom, and the second launched by Rolls-Royce under BMW ownership. It is offered in two wheelbase lengths`,
        cColor: 'Purple',
        cPrice: 196247,
        cCondition: 1,
        createdDate: '09/28/2017',
        cStatus: 1,
        cVINCode: '3VWML7AJ1DM234625',
    },
    {
        id: 8,
        cModel: 'QX',
        cManufacture: 'Infiniti',
        cModelYear: 2002,
        cMileage: 57410,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Infiniti QX80 (called the Infiniti QX56 until 2013) is a full-size luxury SUV built by Nissan Motor Company's Infiniti division. The naming convention originally adhered to the current trend of using a numeric designation derived from the engine's displacement, thus QX56 since the car has a 5.6-liter engine. From the 2014 cModel year, the car was renamed the QX80, as part of Infiniti's cModel name rebranding. The new name carries no meaning beyond suggesting that the vehicle is larger than smaller cModels such as the QX60`,
        cColor: 'Green',
        cPrice: 185775,
        cCondition: 1,
        createdDate: '11/15/2017',
        cStatus: 0,
        cVINCode: 'WDDHF2EB9CA161524',
    },
    {
        id: 9,
        cModel: 'Daytona',
        cManufacture: 'Dodge',
        cModelYear: 1993,
        cMileage: 4444,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Dodge Daytona was an automobile which was produced by the Chrysler Corporation under their Dodge division from 1984 to 1993. It was a front-wheel drive hatchback based on the Chrysler G platform, which was derived from the Chrysler K platform. The Chrysler Laser was an upscale rebadged version of the Daytona. The Daytona was restyled for 1987, and again for 1992. It replaced the Mitsubishi Galant-based Challenger, and slotted between the Charger and the Conquest. The Daytona was replaced by the 1995 Dodge Avenger, which was built by Mitsubishi Motors. The Daytona derives its name mainly from the Dodge Charger Daytona, which itself was named after the Daytona 500 race in Daytona Beach, Florida.`,
        cColor: 'Maroon',
        cPrice: 171898,
        cCondition: 0,
        createdDate: '12/24/2017',
        cStatus: 1,
        cVINCode: 'WBAET37422N752051',
    },
    {
        id: 10,
        cModel: '1500 Silverado',
        cManufacture: 'Chevrolet',
        cModelYear: 1999,
        cMileage: 195310,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Chevrolet Silverado, and its mechanically identical cousin, the GMC Sierra, are a series of full-size and heavy-duty pickup trucks cManufactured by General Motors and introduced in 1998 as the successor to the long-running Chevrolet C/K line. The Silverado name was taken from a trim level previously used on its predecessor, the Chevrolet C/K pickup truck from 1975 through 1998. General Motors continues to offer a GMC-badged variant of the Chevrolet full-size pickup under the GMC Sierra name, first used in 1987 for its variant of the GMT400 platform trucks.`,
        cColor: 'Blue',
        cPrice: 25764,
        cCondition: 0,
        createdDate: '08/30/2017',
        cStatus: 1,
        cVINCode: '1N6AF0LX6EN590806',
    },
    {
        id: 11,
        cModel: 'CTS',
        cManufacture: 'Cadillac',
        cModelYear: 2012,
        cMileage: 170862,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Cadillac CTS is a mid-size luxury car / executive car designed, engineered, cManufactured and marketed by General Motors, and now in its third generation. \r\nInitially available only as a 4-door sedan on the GM Sigma platform, GM had offered the second generation CTS in three body styles: 4-door sedan, 2-door coupe, and 5-door sport wagon also using the Sigma platform — and the third generation in coupe and sedan configurations, using a stretched version of the GM Alpha platform.\r\nWayne Cherry and Kip Wasenko designed the exterior of the first generation CTS, marking the production debut of a design language (marketed as "Art and Science") first seen on the Evoq concept car. Bob Boniface and Robin Krieg designed the exterior of the third generation CTS`,
        cColor: 'Crimson',
        cPrice: 80588,
        cCondition: 0,
        createdDate: '02/15/2018',
        cStatus: 0,
        cVINCode: '1G4HR54KX4U506530',
    },
    {
        id: 12,
        cModel: 'Astro',
        cManufacture: 'Chevrolet',
        cModelYear: 1995,
        cMileage: 142137,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Chevrolet Astro was a rear-wheel drive van/minivan cManufactured and marketed by the American automaker Chevrolet from 1985 to 2005 and over two build generations. Along with its rebadged variant, the GMC Safari, the Astro was marketed in passenger as well as cargo and livery configurations—featuring a V6 engine, unibody construction with a separate front engine/suspension sub-frame, leaf-spring rear suspension, rear bi-parting doors, and a seating capacity of up to eight passengers`,
        cColor: 'Teal',
        cPrice: 72430,
        cCondition: 1,
        createdDate: '07/31/2017',
        cStatus: 0,
        cVINCode: 'KMHGH4JH2DU676107',
    },
    {
        id: 13,
        cModel: 'XL7',
        cManufacture: 'Suzuki',
        cModelYear: 2009,
        cMileage: 165165,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Suzuki XL-7 (styled as XL7 for the second generation) is Suzuki's mid-sized SUV that was made from 1998 to 2009, over two generations. It was slotted above the Grand Vitara in Suzuki's lineup.`,
        cColor: 'Puce',
        cPrice: 118667,
        cCondition: 0,
        createdDate: '02/04/2018',
        cStatus: 0,
        cVINCode: '1N6AF0LX9EN733005',
    },
    {
        id: 14,
        cModel: 'SJ 410',
        cManufacture: 'Suzuki',
        cModelYear: 1984,
        cMileage: 176074,
        // tslint:disable-next-line:max-line-length
        cDescription: `The SJ-Series was introduced to the United States (Puerto Rico (SJ-410) and Canada earlier) in 1985 for the 1986 cModel year. It was cPriced at $6200 and 47,000 were sold in its first year. The Samurai had a 1.3 liter, 63 hp (47 kW), 4-cylinder engine and was available as a convertible or a hardtop, and with or without a rear seat. The Suzuki Samurai became intensely popular within the serious 4WD community for its good off-road performance and reliability compared to other 4WDs of the time. This is due to the fact that while very compact and light, it is a real 4WD vehicle equipped with a transfer case, switchable 4WD and low range. Its lightness makes it a very nimble off-roader less prone to sinking in softer ground than heavier types. It is also considered a great beginner off-roader due to its simple design and ease of engine and suspension modifications.`,
        cColor: 'Orange',
        cPrice: 84325,
        cCondition: 0,
        createdDate: '12/22/2017',
        cStatus: 0,
        cVINCode: '2C3CDYBT6DH183756',
    },
    {
        id: 15,
        cModel: 'F-Series',
        cManufacture: 'Ford',
        cModelYear: 1995,
        cMileage: 53030,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Ford F-Series is a series of light-duty trucks and medium-duty trucks (Class 2-7) that have been marketed and cManufactured by Ford Motor Company since 1948. While most variants of the F-Series trucks are full-size pickup trucks, the F-Series also includes chassis cab trucks and commercial vehicles. The Ford F-Series has been the best-selling vehicle in the United States since 1986 and the best-selling pickup since 1977.[1][2] It is also the best selling vehicle in Canada.[3] As of the 2018 cModel year, the F-Series generates $41.0 billion in annual revenue for Ford, making the F-Series brand more valuable than Coca-Cola and Nike.`,
        cColor: 'Aquamarine',
        cPrice: 77108,
        cCondition: 0,
        createdDate: '01/09/2018',
        cStatus: 0,
        cVINCode: 'WBAVB33526P873481',
    },
    {
        id: 16,
        cModel: 'HS',
        cManufacture: 'Lexus',
        cModelYear: 2011,
        cMileage: 84718,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lexus HS (Japanese: レクサス・HS, Rekusasu HS) is a dedicated hybrid vehicle introduced by Lexus as a new entry-level luxury compact sedan in 2009.[2] Built on the Toyota New MC platform,[3] it is classified as a compact under Japanese regulations concerning vehicle exterior dimensions and engine displacement. Unveiled at the North American International Auto Show in January 2009, the HS 250h went on sale in July 2009 in Japan, followed by the United States in August 2009 as a 2010 cModel. The HS 250h represented the first dedicated hybrid vehicle in the Lexus lineup, as well as the first offered with an inline-four gasoline engine.[4] Bioplastic materials are used for the vehicle interior.[5] With a total length of 184.8 inches, the Lexus HS is slightly larger than the Lexus IS, but still smaller than the mid-size Lexus ES.`,
        cColor: 'Purple',
        cPrice: 140170,
        cCondition: 0,
        createdDate: '11/14/2017',
        cStatus: 1,
        cVINCode: '1FTWF3A56AE545514',
    },
    {
        id: 17,
        cModel: 'Land Cruiser',
        cManufacture: 'Toyota',
        cModelYear: 2008,
        cMileage: 157019,
        // tslint:disable-next-line:max-line-length
        cDescription: `Production of the first generation Land Cruiser began in 1951 (90 units) as Toyota's version of a Jeep-like vehicle.[2][3] The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis versions. The Land Cruiser's reliability and longevity has led to huge popularity, especially in Australia where it is the best-selling body-on-frame, four-wheel drive vehicle.[4] Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain. In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store.`,
        cColor: 'Crimson',
        cPrice: 72638,
        cCondition: 1,
        createdDate: '08/08/2017',
        cStatus: 1,
        cVINCode: '3C3CFFDR2FT957799',
    },
    {
        id: 18,
        cModel: 'Wrangler',
        cManufacture: 'Jeep',
        cModelYear: 1994,
        cMileage: 55857,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Jeep Wrangler is a series of compact and mid-size (Wrangler Unlimited and Wrangler 4-door JL) four-wheel drive off-road vehicle cModels, cManufactured by Jeep since 1986, and currently migrating from its third into its fourth generation. The Wrangler JL was unveiled in late 2017 and will be produced at Jeep's Toledo Complex.`,
        cColor: 'Red',
        cPrice: 193523,
        cCondition: 0,
        createdDate: '02/28/2018',
        cStatus: 1,
        cVINCode: '3C4PDCAB7FT652291',
    },
    {
        id: 19,
        cModel: 'Sunbird',
        cManufacture: 'Pontiac',
        cModelYear: 1994,
        cMileage: 165202,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Sunbird is an automobile that was produced by Pontiac, initially as a subcompact for the 1976 to 1980 cModel years, and later as a compact for the 1982 to 1994 cModel years. The Sunbird badge ran for 18 years (with a hiatus during the 1981 and 1982 cModel years, as the 1982 cModel was called J2000) and was then replaced in 1995 by the Pontiac Sunfire. Through the years the Sunbird was available in notchback coupé, sedan, hatchback, station wagon, and convertible body styles.`,
        cColor: 'Blue',
        cPrice: 198739,
        cCondition: 0,
        createdDate: '05/13/2017',
        cStatus: 1,
        cVINCode: '1GD22XEG9FZ103872',
    },
    {
        id: 20,
        cModel: 'A4',
        cManufacture: 'Audi',
        cModelYear: 1998,
        cMileage: 117958,
        // tslint:disable-next-line:max-line-length
        cDescription: `The A4 has been built in five generations and is based on the Volkswagen Group B platform. The first generation A4 succeeded the Audi 80. The automaker's internal numbering treats the A4 as a continuation of the Audi 80 lineage, with the initial A4 designated as the B5-series, followed by the B6, B7, B8 and the B9. The B8 and B9 versions of the A4 are built on the Volkswagen Group MLB platform shared with many other Audi cModels and potentially one Porsche cModel within Volkswagen Group`,
        cColor: 'Yellow',
        cPrice: 159377,
        cCondition: 0,
        createdDate: '12/15/2017',
        cStatus: 1,
        cVINCode: '2C3CDXCT2FH350366',
    },
    {
        id: 21,
        cModel: 'Camry Solara',
        cManufacture: 'Toyota',
        cModelYear: 2006,
        cMileage: 22436,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota Camry Solara, popularly known as the Toyota Solara, is a mid-size coupe/convertible built by Toyota. The Camry Solara is mechanically based on the Toyota Camry and effectively replaced the discontinued Camry Coupe (XV10); however, in contrast with its predecessor's conservative design, the Camry Solara was designed with a greater emphasis on sportiness, with more rakish styling, and uprated suspension and engine tuning intended to provide a sportier feel.[5] The coupe was launched in late 1998 as a 1999 cModel.[1] In 2000, the convertible was introduced, effectively replacing the Celica convertible in Toyota's North American lineup`,
        cColor: 'Green',
        cPrice: 122562,
        cCondition: 0,
        createdDate: '07/11/2017',
        cStatus: 0,
        cVINCode: '3C3CFFHH6DT874066',
    },
    {
        id: 22,
        cModel: 'Tribeca',
        cManufacture: 'Subaru',
        cModelYear: 2007,
        cMileage: 127958,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Subaru Tribeca is a mid-size crossover SUV made from 2005 to 2014. Released in some markets, including Canada, as the Subaru B9 Tribeca, the name "Tribeca" derives from the Tribeca neighborhood of New York City.[1] Built on the Subaru Legacy platform and sold in five- and seven-seat configurations, the Tribeca was intended to be sold alongside a slightly revised version known as the Saab 9-6. Saab, at the time a subsidiary of General Motors (GM), abandoned the 9-6 program just prior to its release subsequent to GM's 2005 divestiture of its 20 percent stake in FHI.`,
        cColor: 'Yellow',
        cPrice: 90221,
        cCondition: 1,
        createdDate: '11/12/2017',
        cStatus: 0,
        cVINCode: 'WVWGU7AN9AE957575',
    },
    {
        id: 23,
        cModel: '1500 Club Coupe',
        cManufacture: 'GMC',
        cModelYear: 1997,
        cMileage: 95783,
        // tslint:disable-next-line:max-line-length
        cDescription: `GMC (General Motors Truck Company), formally the GMC Division of General Motors LLC, is a division of the American automobile cManufacturer General Motors (GM) that primarily focuses on trucks and utility vehicles. GMC sells pickup and commercial trucks, buses, vans, military vehicles, and sport utility vehicles marketed worldwide by General Motors.`,
        cColor: 'Teal',
        cPrice: 64376,
        cCondition: 1,
        createdDate: '06/28/2017',
        cStatus: 0,
        cVINCode: 'SCFBF04BX7G920997',
    },
    {
        id: 24,
        cModel: 'Firebird',
        cManufacture: 'Pontiac',
        cModelYear: 2002,
        cMileage: 74063,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Firebird is an American automobile built by Pontiac from the 1967 to the 2002 cModel years. Designed as a pony car to compete with the Ford Mustang, it was introduced 23 February 1967, the same cModel year as GM's Chevrolet division platform-sharing Camaro.[1] This also coincided with the release of the 1967 Mercury Cougar, Ford's upscale, platform-sharing version of the Mustang. The name "Firebird" was also previously used by GM for the General Motors Firebird 1950s and early-1960s`,
        cColor: 'Puce',
        cPrice: 94178,
        cCondition: 1,
        createdDate: '09/13/2017',
        cStatus: 0,
        cVINCode: '3C63D2JL5CG563879',
    },
    {
        id: 25,
        cModel: 'RAV4',
        cManufacture: 'Toyota',
        cModelYear: 1996,
        cMileage: 99461,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota RAV4 (Japanese: トヨタ RAV4 Toyota Ravufō) is a compact crossover SUV (sport utility vehicle) produced by the Japanese automobile cManufacturer Toyota. This was the first compact crossover SUV;[1] it made its debut in Japan and Europe in 1994,[2] and in North America in 1995. The vehicle was designed for consumers wanting a vehicle that had most of the benefits of SUVs, such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with the maneuverability and fuel economy of a compact car. Although not all RAV4s are four-wheel-drive, RAV4 stands for "Recreational Activity Vehicle: 4-wheel drive", because the aforementioned equipment is an option in select countries`,
        cColor: 'Goldenrod',
        cPrice: 48342,
        cCondition: 0,
        createdDate: '12/29/2017',
        cStatus: 0,
        cVINCode: '2C4RDGDG6DR836144',
    },
    {
        id: 26,
        cModel: 'Amanti / Opirus',
        cManufacture: 'Kia',
        cModelYear: 2007,
        cMileage: 189651,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Kia Opirus was an executive car cManufactured and marketed by Kia Motors that was launched in April 2003 and was marketed globally under various nameplates, prominently as the Amanti. It was considered to be Kia's flagship vehicle.`,
        cColor: 'Indigo',
        cPrice: 44292,
        cCondition: 1,
        createdDate: '09/01/2017',
        cStatus: 1,
        cVINCode: '1C4SDHCT2CC055294',
    },
    {
        id: 27,
        cModel: 'S60',
        cManufacture: 'Volvo',
        cModelYear: 2001,
        cMileage: 78963,
        // tslint:disable-next-line:max-line-length
        cDescription: `First introduced in 2004, Volvo's S60 R used a Haldex all-wheel-drive system mated to a 300 PS (221 kW; 296 hp) / 400 N⋅m (300 lbf⋅ft) inline-5. The 2004–2005 cModels came with a 6-speed manual transmission, or an available 5-speed automatic which allowed only 258 lb⋅ft (350 N⋅m) torque in 1st and 2nd gears. The 2006–2007 cModels came with a 6-speed manual or 6-speed automatic transmission (which was no longer torque-restricted)`,
        cColor: 'Goldenrod',
        cPrice: 9440,
        cCondition: 0,
        createdDate: '11/06/2017',
        cStatus: 0,
        cVINCode: '3C6TD5CT5CG316067',
    },
    {
        id: 28,
        cModel: 'Grand Marquis',
        cManufacture: 'Mercury',
        cModelYear: 1984,
        cMileage: 153027,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Mercury Grand Marquis is an automobile that was sold by the Mercury division of Ford Motor Company from 1975 to 2011. From 1975 to 1982, it was the premium cModel of the Mercury Marquis cModel line, becoming a standalone cModel line in 1983. For its entire production run, the Grand Marquis served as the flagship of the Mercury line, with the Ford (LTD) Crown Victoria serving as its Ford counterpart. In addition, from 1979 to 2011, the Grand Marquis shared the rear-wheel drive Panther platform alongside the Lincoln Town Car`,
        cColor: 'Goldenrod',
        cPrice: 76027,
        cCondition: 0,
        createdDate: '12/16/2017',
        cStatus: 1,
        cVINCode: '3C3CFFJH2DT871398',
    },
    {
        id: 29,
        cModel: 'Talon',
        cManufacture: 'Eagle',
        cModelYear: 1991,
        cMileage: 111234,
        // tslint:disable-next-line:max-line-length
        cDescription: `Cosmetically, differences between the three were found in wheels, availability of cColors, tail lights, front and rear bumpers, and spoilers. The Talon featured two-tone body cColor with a black 'greenhouse' (roof, pillars, door-mounted mirrors) regardless of the body cColor. The variants featured 5-speed manual or 4-speed automatic transmissions and a hood bulge on the left-hand side of the car in order for camshaft clearance on the 4G63 engine. The base cModel DL did not use this engine but still had a bulge as evident in the 1992 Talon brochure. 2nd Generation cars all had such a bulge, even with the inclusion of the 420A engine`,
        cColor: 'Teal',
        cPrice: 157216,
        cCondition: 0,
        createdDate: '05/08/2017',
        cStatus: 1,
        cVINCode: 'YV1902FH1D2957659',
    },
    {
        id: 30,
        cModel: 'Passport',
        cManufacture: 'Honda',
        cModelYear: 2002,
        cMileage: 3812,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Passport was a part of a partnership between Isuzu and Honda in the 1990s, which saw an exchange of passenger vehicles from Honda to Isuzu, such as the Isuzu Oasis, and trucks from Isuzu to Honda, such as the Passport and Acura SLX. This arrangement was convenient for both companies, as Isuzu discontinued passenger car production in 1993 after a corporate restructuring, and Honda was in desperate need a SUV, a segment that was growing in popularity in North America as well as Japan during the 1990s. The partnership ended in 2002 with the discontinuation of the Passport in favor of the Honda-engineered Pilot`,
        cColor: 'Puce',
        cPrice: 41299,
        cCondition: 1,
        createdDate: '03/08/2018',
        cStatus: 0,
        cVINCode: 'WVWEU9AN4AE524071',
    },
    {
        id: 31,
        cModel: 'H3',
        cManufacture: 'Hummer',
        cModelYear: 2006,
        cMileage: 196321,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Hummer H3 is a sport utility vehicle/off-road vehicle from Hummer that was produced from 2005 to 2010. Introduced for the 2006 cModel year, it was based on a highly modified GMT355 underpinning the Chevrolet cColorado/GMC Canyon compact pickup trucks that were also built at GM's Shreveport Operations in Shreveport, Louisiana and the Port Elizabeth plant in South Africa. The H3 was actually the smallest among the Hummer cModels. It was available either as a traditional midsize SUV or as a midsize pickup known as the H3T`,
        cColor: 'Pink',
        cPrice: 186964,
        cCondition: 1,
        createdDate: '06/04/2017',
        cStatus: 1,
        cVINCode: '4T1BF1FK4FU746230',
    },
    {
        id: 32,
        cModel: 'Comanche',
        cManufacture: 'Jeep',
        cModelYear: 1992,
        cMileage: 72285,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Jeep Comanche (designated MJ) is a pickup truck variant of the Cherokee compact SUV (1984–2001)[3] cManufactured and marketed by Jeep for cModel years 1986-1992 in rear wheel (RWD) and four-wheel drive (4WD) cModels as well as two cargo bed lengths: six-feet (1.83 metres) and seven-feet (2.13 metres)`,
        cColor: 'Mauv',
        cPrice: 145971,
        cCondition: 1,
        createdDate: '09/01/2017',
        cStatus: 0,
        cVINCode: '1J4PN2GK1BW745045',
    },
    {
        id: 33,
        cModel: 'Blazer',
        cManufacture: 'Chevrolet',
        cModelYear: 1993,
        cMileage: 189804,
        // tslint:disable-next-line:max-line-length
        cDescription: `The 2014 – 2nd generation, MY14 Duramax 2.8L diesel engines have several new parts, namely a new water-cooled variable-geometry turbocharger, a new high-pressure common-rail fuel delivery system, a new exhaust gas recirculation (EGR) system, a new intake manifold, a new cylinder head, a new cylinder block, a new balance shaft unit and a new Engine Control Module (ECM). and now produce 197 hp and 369 Ft/Lbs of torque`,
        cColor: 'Indigo',
        cPrice: 154594,
        cCondition: 0,
        createdDate: '09/13/2017',
        cStatus: 0,
        cVINCode: '1G6KD57Y43U482896',
    },
    {
        id: 34,
        cModel: 'Envoy XUV',
        cManufacture: 'GMC',
        cModelYear: 2004,
        cMileage: 187960,
        // tslint:disable-next-line:max-line-length
        cDescription: `The GMC Envoy is a mid-size SUV that was produced by General Motors. It was introduced for the 1998 cModel year. After the first generation Envoy was discontinued after the 2000 cModel year, but the Envoy was reintroduced and redesigned for the 2002 cModel year, and it was available in the GMC line of vehicles from the 2002 to 2009 cModel years`,
        cColor: 'Turquoise',
        cPrice: 185103,
        cCondition: 1,
        createdDate: '12/07/2017',
        cStatus: 0,
        cVINCode: '5GAER23D09J658030',
    },
];


/***/ }),

/***/ "./src/app/_helpers/fake/fake-db/users.table.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/fake/fake-db/users.table.ts ***!
  \******************************************************/
/*! exports provided: UsersTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTable", function() { return UsersTable; });
class UsersTable {
}
UsersTable.users = [
    {
        id: 1,
        username: 'admin',
        password: 'demo',
        email: 'admin@demo.com',
        accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
        refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
        roles: [1],
        pic: './assets/media/users/300_25.jpg',
        fullname: 'Sean',
        occupation: 'CEO',
        companyName: 'Keenthemes',
        phone: '456669067890',
        address: {
            addressLine: 'L-12-20 Vertex, Cybersquare',
            city: 'San Francisco',
            state: 'California',
            postCode: '45000',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/admin',
            facebook: 'https://facebook.com/admin',
            twitter: 'https://twitter.com/admin',
            instagram: 'https://instagram.com/admin',
        },
    },
    {
        id: 2,
        username: 'user',
        password: 'demo',
        email: 'user@demo.com',
        accessToken: 'access-token-6829bba69dd3421d8762-991e9e806dbf',
        refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e55',
        roles: [2],
        pic: './assets/media/users/100_2.jpg',
        fullname: 'Megan',
        occupation: 'Deputy Head of Keenthemes in New York office',
        companyName: 'Keenthemes',
        phone: '456669067891',
        address: {
            addressLine: '3487  Ingram Road',
            city: 'Greensboro',
            state: 'North Carolina',
            postCode: '27409',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/user',
            facebook: 'https://facebook.com/user',
            twitter: 'https://twitter.com/user',
            instagram: 'https://instagram.com/user',
        },
    },
    {
        id: 3,
        username: 'guest',
        password: 'demo',
        email: 'guest@demo.com',
        accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
        refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
        roles: [3],
        pic: './assets/media/users/default.jpg',
        fullname: 'Ginobili Maccari',
        occupation: 'CFO',
        companyName: 'Keenthemes',
        phone: '456669067892',
        address: {
            addressLine: '1467  Griffin Street',
            city: 'Phoenix',
            state: 'Arizona',
            postCode: '85012',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/guest',
            facebook: 'https://facebook.com/guest',
            twitter: 'https://twitter.com/guest',
            instagram: 'https://instagram.com/guest',
        },
    },
];
UsersTable.tokens = [
    {
        id: 1,
        accessToken: 'access-token-' + Math.random(),
        refreshToken: 'access-token-' + Math.random(),
    },
];


/***/ }),

/***/ "./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts ***!
  \************************************************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen.service */ "./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts");



const _c0 = ["splashScreen"];
class SplashScreenComponent {
    constructor(el, splashScreenService) {
        this.el = el;
        this.splashScreenService = splashScreenService;
    }
    ngOnInit() {
        this.splashScreenService.init(this.splashScreen);
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"])); };
SplashScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], viewQuery: function SplashScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splashScreen = _t.first);
    } }, decls: 5, vars: 0, consts: [["id", "splash-screen"], ["splashScreen", ""], ["src", "./assets/media/logos/logo-dark.png", "alt", "Logo"], ["viewBox", "0 0 50 50", 1, "splash-spinner"], ["cx", "25", "cy", "25", "r", "20", "fill", "none", "stroke-width", "5", 1, "path"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#splash-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #f2f3f8;\n}\n\n#splash-screen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: calc(100vw - 100%);\n  margin-bottom: 30px;\n}\n\n#splash-screen.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.splash-spinner[_ngcontent-%COMP%] {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  margin-left: calc(100vw - 100%);\n  width: 50px;\n  height: 50px;\n}\n\n.splash-spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke: #5d78ff;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21ldHJvbmljL3BhcnRpYWxzL2xheW91dC9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBQTtFQUNGO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQUFGO0VBR0E7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUFGRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VBQUY7RUFHQTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7RUFERjtFQUlBO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9fbWV0cm9uaWMvcGFydGlhbHMvbGF5b3V0L3NwbGFzaC1zY3JlZW4vc3BsYXNoLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGxhc2gtc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmODtcclxufVxyXG5cclxuI3NwbGFzaC1zY3JlZW4gaW1nIHtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNzcGxhc2gtc2NyZWVuLmhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zcGxhc2gtc3Bpbm5lciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3BsYXNoLXNwaW5uZXIgLnBhdGgge1xyXG4gIHN0cm9rZTogIzVkNzhmZjtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-splash-screen',
                templateUrl: './splash-screen.component.html',
                styleUrls: ['./splash-screen.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"] }]; }, { splashScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['splashScreen', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SplashScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenModule", function() { return SplashScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.component */ "./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts");




class SplashScreenModule {
}
SplashScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SplashScreenModule });
SplashScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SplashScreenModule_Factory(t) { return new (t || SplashScreenModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplashScreenModule, { declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts ***!
  \**********************************************************************************/
/*! exports provided: SplashScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenService", function() { return SplashScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");




class SplashScreenService {
    /**
     * Service constructor
     *
     * @param animationBuilder: AnimationBuilder
     */
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
    }
    /**
     * Init
     *
     * @param element: ElementRef
     */
    init(element) {
        this.el = element;
    }
    /**
     * Hide
     */
    hide() {
        if (this.stopped || !this.el) {
            return;
        }
        const player = this.animationBuilder
            .build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(800, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))])
            .create(this.el.nativeElement);
        player.onDone(() => {
            if (typeof this.el.nativeElement.remove === 'function') {
                this.el.nativeElement.remove();
            }
            else {
                this.el.nativeElement.style.display = 'none !important';
            }
            this.stopped = true;
        });
        setTimeout(() => player.play(), 100);
    }
}
SplashScreenService.ɵfac = function SplashScreenService_Factory(t) { return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"])); };
SplashScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SplashScreenService, factory: SplashScreenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | modules-auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then((m) => m.AuthModule),
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-errors-errors-module */ "modules-errors-errors-module").then(__webpack_require__.bind(null, /*! ./modules/errors/errors.module */ "./src/app/modules/errors/errors.module.ts")).then((m) => m.ErrorsModule),
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | pages-layout-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-layout-module")]).then(__webpack_require__.bind(null, /*! ./pages/layout.module */ "./src/app/pages/layout.module.ts")).then((m) => m.LayoutModule),
    },
    { path: '**', redirectTo: 'errors/404', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/i18n/vocabs/en */ "./src/app/modules/i18n/vocabs/en.ts");
/* harmony import */ var _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/i18n/vocabs/ch */ "./src/app/modules/i18n/vocabs/ch.ts");
/* harmony import */ var _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/i18n/vocabs/es */ "./src/app/modules/i18n/vocabs/es.ts");
/* harmony import */ var _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/i18n/vocabs/jp */ "./src/app/modules/i18n/vocabs/jp.ts");
/* harmony import */ var _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/i18n/vocabs/de */ "./src/app/modules/i18n/vocabs/de.ts");
/* harmony import */ var _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/i18n/vocabs/fr */ "./src/app/modules/i18n/vocabs/fr.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/i18n/translation.service */ "./src/app/modules/i18n/translation.service.ts");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.service */ "./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.component */ "./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts");

// language list












const _c0 = ["root", ""];
class AppComponent {
    constructor(translationService, splashScreenService, router) {
        this.translationService = translationService;
        this.splashScreenService = splashScreenService;
        this.router = router;
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register translations
        this.translationService.loadTranslations(_modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_2__["locale"], _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_3__["locale"], _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_4__["locale"], _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_5__["locale"], _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_6__["locale"]);
    }
    ngOnInit() {
        const routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                // hide splash screen
                this.splashScreenService.hide();
                // scroll to top on every route change
                window.scrollTo(0, 0);
                // to display back the body content
                setTimeout(() => {
                    document.body.classList.add('page-loaded');
                }, 500);
            }
        });
        this.unsubscribe.push(routerSubscription);
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["body", "root", ""]], attrs: _c0, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-splash-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_metronic_partials_layout_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_10__["SplashScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFNBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'body[root]',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"] }, { type: _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getHighlightLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighlightLanguages", function() { return getHighlightLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/auth/_services/auth.service */ "./src/app/modules/auth/_services/auth.service.ts");
/* harmony import */ var _helpers_fake_fake_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/fake/fake-api.service */ "./src/app/_helpers/fake/fake-api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! highlight.js/lib/languages/json */ "./node_modules/highlight.js/lib/languages/json.js");
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.module */ "./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts");














// Highlight JS










function appInitializer(authService) {
    return () => {
        return new Promise((resolve) => {
            authService.getUserByToken().subscribe().add(resolve);
        });
    };
}
/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
function getHighlightLanguages() {
    return [
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18___default.a },
        { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_17___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_15___default.a },
        { name: 'json', func: highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_16___default.a },
    ];
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: appInitializer,
            multi: true,
            deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]],
        },
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HIGHLIGHT_OPTIONS"],
            useValue: {
                languages: getHighlightLanguages,
            },
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_19__["SplashScreenModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HighlightModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
            src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].isMockEnabled
                ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_helpers_fake_fake_api_service__WEBPACK_IMPORTED_MODULE_12__["FakeAPIService"], {
                    passThruUnknownUrl: true,
                    dataEncapsulation: false,
                })
                : [],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_19__["SplashScreenModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HighlightModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_19__["SplashScreenModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HighlightModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].isMockEnabled
                        ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_helpers_fake_fake_api_service__WEBPACK_IMPORTED_MODULE_12__["FakeAPIService"], {
                            passThruUnknownUrl: true,
                            dataEncapsulation: false,
                        })
                        : [],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_7__["InlineSVGModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ],
                providers: [
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                        useFactory: appInitializer,
                        multi: true,
                        deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]],
                    },
                    {
                        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_14__["HIGHLIGHT_OPTIONS"],
                        useValue: {
                            languages: getHighlightLanguages,
                        },
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/auth/_models/auth.model.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/auth.model.ts ***!
  \****************************************************/
/*! exports provided: AuthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModel", function() { return AuthModel; });
class AuthModel {
    setAuth(auth) {
        this.accessToken = auth.accessToken;
        this.refreshToken = auth.refreshToken;
        this.expiresIn = auth.expiresIn;
    }
}


/***/ }),

/***/ "./src/app/modules/auth/_services/auth-http/auth-fake-http.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/auth-fake-http.service.ts ***!
  \****************************************************************************/
/*! exports provided: AuthHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function() { return AuthHTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_models/auth.model */ "./src/app/modules/auth/_models/auth.model.ts");
/* harmony import */ var _helpers_fake_fake_db_users_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_helpers/fake/fake-db/users.table */ "./src/app/_helpers/fake/fake-db/users.table.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








const API_USERS_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/users`;
class AuthHTTPService {
    constructor(http) {
        this.http = http;
    }
    // public methods
    login(email, password) {
        const notFoundError = new Error('Not Found');
        if (!email || !password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(notFoundError);
        }
        return this.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            if (result.length <= 0) {
                return notFoundError;
            }
            const user = result.find((u) => {
                return (u.email.toLowerCase() === email.toLowerCase() &&
                    u.password === password);
            });
            if (!user) {
                return notFoundError;
            }
            const auth = new _models_auth_model__WEBPACK_IMPORTED_MODULE_3__["AuthModel"]();
            auth.accessToken = user.accessToken;
            auth.refreshToken = user.refreshToken;
            auth.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
            return auth;
        }));
    }
    createUser(user) {
        user.roles = [2]; // Manager
        user.accessToken = 'access-token-' + Math.random();
        user.refreshToken = 'access-token-' + Math.random();
        user.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
        user.pic = './assets/media/users/default.jpg';
        return this.http.post(API_USERS_URL, user);
    }
    forgotPassword(email) {
        return this.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            const user = result.find((u) => u.email.toLowerCase() === email.toLowerCase());
            return user !== undefined;
        }));
    }
    getUserByToken(token) {
        const user = _helpers_fake_fake_db_users_table__WEBPACK_IMPORTED_MODULE_4__["UsersTable"].users.find((u) => {
            return u.accessToken === token;
        });
        if (!user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user);
    }
    getAllUsers() {
        return this.http.get(API_USERS_URL);
    }
}
AuthHTTPService.ɵfac = function AuthHTTPService_Factory(t) { return new (t || AuthHTTPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
AuthHTTPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthHTTPService, factory: AuthHTTPService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHTTPService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/auth/_services/auth-http/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/index.ts ***!
  \***********************************************************/
/*! exports provided: AuthHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_fake_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-fake-http.service */ "./src/app/modules/auth/_services/auth-http/auth-fake-http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function() { return _auth_fake_http_service__WEBPACK_IMPORTED_MODULE_0__["AuthHTTPService"]; });

 // You have to comment this, when your real back-end is done
// export { AuthHTTPService } from './auth-http.service'; // You have to uncomment this, when your real back-end is done


/***/ }),

/***/ "./src/app/modules/auth/_services/auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-http */ "./src/app/modules/auth/_services/auth-http/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AuthService {
    constructor(authHttpService, router) {
        this.authHttpService = authHttpService;
        this.router = router;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.authLocalStorageToken = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion}-${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USERDATA_KEY}`;
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        const subscr = this.getUserByToken().subscribe();
        this.unsubscribe.push(subscr);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    // public methods
    login(email, password) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((auth) => {
            const result = this.setAuthFromLocalStorage(auth);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.getUserByToken()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    logout() {
        localStorage.removeItem(this.authLocalStorageToken);
        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }
    getUserByToken() {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.accessToken) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        this.isLoadingSubject.next(true);
        return this.authHttpService.getUserByToken(auth.accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            if (user) {
                this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](user);
            }
            else {
                this.logout();
            }
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    // need create new user then login
    registration(user) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.createUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            this.isLoadingSubject.next(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.login(user.email, user.password)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    forgotPassword(email) {
        this.isLoadingSubject.next(true);
        return this.authHttpService
            .forgotPassword(email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    // private methods
    setAuthFromLocalStorage(auth) {
        // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
        if (auth && auth.accessToken) {
            localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
            return true;
        }
        return false;
    }
    getAuthFromLocalStorage() {
        try {
            const authData = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
            return authData;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/i18n/translation.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/i18n/translation.service.ts ***!
  \*****************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
// Localization is based on '@ngx-translate/core';
// Please be familiar with official documentations first => https://github.com/ngx-translate/core



const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';
class TranslationService {
    constructor(translate) {
        this.translate = translate;
        // Private properties
        this.langIds = [];
        // add new langIds to the list
        this.translate.addLangs(['en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
    }
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translate.setTranslation(locale.lang, locale.data, true);
            this.langIds.push(locale.lang);
        });
        // add new languages to the list
        this.translate.addLangs(this.langIds);
    }
    setLanguage(lang) {
        if (lang) {
            this.translate.use(this.translate.getDefaultLang());
            this.translate.use(lang);
            localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
        }
    }
    /**
     * Returns selected language
     */
    getSelectedLanguage() {
        return (localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) ||
            this.translate.getDefaultLang());
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationService, factory: TranslationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/i18n/vocabs/ch.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/ch.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// China
const locale = {
    lang: 'ch',
    data: {
        TRANSLATOR: {
            SELECT: '选择你的语言',
        },
        MENU: {
            NEW: '新',
            ACTIONS: '行动',
            CREATE_POST: '创建新帖子',
            PAGES: 'Pages',
            FEATURES: '特征',
            APPS: '应用',
            DASHBOARD: '仪表板',
        },
        AUTH: {
            GENERAL: {
                OR: '要么',
                SUBMIT_BUTTON: '提交',
                NO_ACCOUNT: '没有账号？',
                SIGNUP_BUTTON: '注册',
                FORGOT_BUTTON: '忘记密码',
                BACK_BUTTON: '背部',
                PRIVACY: '隐私',
                LEGAL: '法律',
                CONTACT: '联系',
            },
            LOGIN: {
                TITLE: '创建帐号',
                BUTTON: '签到',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: '用戶名'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: '顾客',
                CUSTOMERS_LIST: '客户名单',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "./src/app/modules/i18n/vocabs/de.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/de.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Germany
const locale = {
    lang: 'de',
    data: {
        TRANSLATOR: {
            SELECT: 'Wähle deine Sprache',
        },
        MENU: {
            NEW: 'Neu',
            ACTIONS: 'Aktionen',
            CREATE_POST: 'Erstellen Sie einen neuen Beitrag',
            PAGES: 'Pages',
            FEATURES: 'Eigenschaften',
            APPS: 'Apps',
            DASHBOARD: 'Instrumententafel'
        },
        AUTH: {
            GENERAL: {
                OR: 'Oder',
                SUBMIT_BUTTON: 'einreichen',
                NO_ACCOUNT: 'Hast du kein Konto?',
                SIGNUP_BUTTON: 'Anmelden',
                FORGOT_BUTTON: 'Passwort vergessen',
                BACK_BUTTON: 'Zurück',
                PRIVACY: 'Privatsphäre',
                LEGAL: 'Legal',
                CONTACT: 'Kontakt',
            },
            LOGIN: {
                TITLE: 'Create Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Nutzername'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "./src/app/modules/i18n/vocabs/en.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/en.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// USA
const locale = {
    lang: 'en',
    data: {
        TRANSLATOR: {
            SELECT: 'Select your language',
        },
        MENU: {
            NEW: 'new',
            ACTIONS: 'Actions',
            CREATE_POST: 'Create New Post',
            PAGES: 'Pages',
            FEATURES: 'Features',
            APPS: 'Apps',
            DASHBOARD: 'Dashboard',
        },
        AUTH: {
            GENERAL: {
                OR: 'Or',
                SUBMIT_BUTTON: 'Submit',
                NO_ACCOUNT: 'Don\'t have an account?',
                SIGNUP_BUTTON: 'Sign Up',
                FORGOT_BUTTON: 'Forgot Password',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Login Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Username'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "./src/app/modules/i18n/vocabs/es.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/es.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Spain
const locale = {
    lang: 'es',
    data: {
        TRANSLATOR: {
            SELECT: 'Elige tu idioma',
        },
        MENU: {
            NEW: 'nuevo',
            ACTIONS: 'Comportamiento',
            CREATE_POST: 'Crear nueva publicación',
            PAGES: 'Pages',
            FEATURES: 'Caracteristicas',
            APPS: 'Aplicaciones',
            DASHBOARD: 'Tablero'
        },
        AUTH: {
            GENERAL: {
                OR: 'O',
                SUBMIT_BUTTON: 'Enviar',
                NO_ACCOUNT: 'No tienes una cuenta?',
                SIGNUP_BUTTON: 'Regístrate',
                FORGOT_BUTTON: 'Se te olvidó tu contraseña',
                BACK_BUTTON: 'Espalda',
                PRIVACY: 'Intimidad',
                LEGAL: 'Legal',
                CONTACT: 'Contacto',
            },
            LOGIN: {
                TITLE: 'Crear una cuenta',
                BUTTON: 'Registrarse',
            },
            FORGOT: {
                TITLE: 'Contraseña olvidada?',
                DESC: 'Ingrese su correo electrónico para restablecer su contraseña',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Usuario'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "./src/app/modules/i18n/vocabs/fr.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/fr.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// France
const locale = {
    lang: 'fr',
    data: {
        TRANSLATOR: {
            SELECT: 'choisissez votre langue',
        },
        MENU: {
            NEW: 'Nouveau',
            ACTIONS: 'Actes',
            CREATE_POST: 'Créer un nouveau Post',
            PAGES: 'Pages',
            FEATURES: 'Fonctionnalités',
            APPS: 'Applications',
            DASHBOARD: 'Tableau de Bord',
        },
        AUTH: {
            GENERAL: {
                OR: 'Ou',
                SUBMIT_BUTTON: 'Soumettre',
                NO_ACCOUNT: 'Ne pas avoir de compte?',
                SIGNUP_BUTTON: 'Registre',
                FORGOT_BUTTON: 'Mot de passe oublié',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Créer un compte',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Mot de passe',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Nom d\'utilisateur'
            },
            VALIDATION: {
                INVALID: '{{name}} n\'est pas valide',
                REQUIRED: '{{name}} est requis',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Nombre d\'enregistrements sélectionnés: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'éCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Les clients',
                CUSTOMERS_LIST: 'Liste des clients',
                NEW_CUSTOMER: 'Nouveau client',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Suppression du client',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement ce client?',
                    WAIT_DESCRIPTION: 'Le client est en train de supprimer ...',
                    MESSAGE: 'Le client a été supprimé'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Supprimer les clients',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement les clients sélectionnés?',
                    WAIT_DESCRIPTION: 'Les clients suppriment ...',
                    MESSAGE: 'Les clients sélectionnés ont été supprimés'
                },
                UPDATE_STATUS: {
                    TITLE: 'Le statut a été mis à jour pour les clients sélectionnés',
                    MESSAGE: 'Le statut des clients sélectionnés a été mis à jour avec succès'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Le client a été mis à jour',
                    ADD_MESSAGE: 'Le client a été créé'
                }
            }
        }
    }
};


/***/ }),

/***/ "./src/app/modules/i18n/vocabs/jp.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/jp.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Japan
const locale = {
    lang: 'jp',
    data: {
        TRANSLATOR: {
            SELECT: 'あなたが使う言語を選んでください',
        },
        MENU: {
            NEW: '新しい',
            ACTIONS: '行動',
            CREATE_POST: '新しい投稿を作成',
            PAGES: 'Pages',
            FEATURES: '特徴',
            APPS: 'アプリ',
            DASHBOARD: 'ダッシュボード',
        },
        AUTH: {
            GENERAL: {
                OR: 'または',
                SUBMIT_BUTTON: '提出する',
                NO_ACCOUNT: 'アカウントを持っていない？',
                SIGNUP_BUTTON: 'サインアップ',
                FORGOT_BUTTON: 'パスワードをお忘れですか',
                BACK_BUTTON: 'バック',
                PRIVACY: 'プライバシー',
                LEGAL: '法的',
                CONTACT: '接触',
            },
            LOGIN: {
                TITLE: 'Create Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'ユーザー名'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    appVersion: "v711demo1",
    USERDATA_KEY: "authf649fc9a5f55",
    isMockEnabled: true,
    apiUrl: "https://localhost:44322",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pepsm\Desktop\orange-next-monitoring\src\RuuviTest.WebSpa\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map