import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Aztec from '../Aztec';

export class MoctezumaII extends Leader {
  static civilization(): typeof Civilization {
    return Aztec;
  }

  name(): string {
    return 'Moctezuma II';
  }
}

export default MoctezumaII;
