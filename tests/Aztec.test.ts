import Aztec from '../Aztec';
import { MoctezumaII } from '../Leaders';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Aztec', (): void => {
  it('has its people, nation and colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Aztec)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Aztec');
    expect(attributes.nation).to.equal('Aztec');
    expect(attributes.colors).to.eql(['#A1DAB5', '#A91825']);
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Aztec);

    expect(cityNames.length).to.be.at.least(30);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Tenochtitlan']);
  });

  it('has a leader of the Aztecs', (): void => {
    expect(MoctezumaII.civilization()).to.equal(Aztec);
    expect(new MoctezumaII().name()).to.equal('Moctezuma II');
  });
});
