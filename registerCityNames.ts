import Aztec from './Aztec';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

([
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
] as string[]).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Aztec, i === 0))
);
