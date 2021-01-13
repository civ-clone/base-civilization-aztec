import Aztec from './Aztec';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Aztec',
  nation: 'Aztec',
  colors: ['#63e367', '#2f7b00', '#fff'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Aztec, name, value))
);
