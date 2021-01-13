"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aztec_1 = require("./Aztec");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
[
    'Tenochtitlan',
    'Teotihuacan',
    'Tlatelolco',
    'Texcoco',
    'Tlaxcala',
    'Calixtlahuaca',
    'Xochicalco',
    'Tlacopan',
    'Atzcapotzalco',
    'Tzintzuntzan',
    'Malinalco',
    'Tula',
    'Tamuin',
    'Teayo',
    'Cempoala',
    'Chalco',
    'Tlalmanalco',
    'Ixtapaluca',
    'Huexotla',
    'Tepexpan',
    'Tepetlaoxtoc',
    'Chiconautla',
    'Zitlaltepec',
    'Coyotepec',
    'Tequixquiac',
    'Jilotzingo',
    'Tlapanaloya',
    'Tultitan',
    'Ecatepec',
    'Coatepec',
    'Chalchiuites',
    'Chiauhita',
    'Chapultepec',
    'Itzapalapa',
    'Ayotzinco',
    'Iztapam',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Aztec_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map