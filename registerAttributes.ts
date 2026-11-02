import Aztec from './Aztec';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Aztec',
  nation: 'Aztec',
  colors: ['#A1DAB5', '#A91825'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Aztec, name, value))
);
