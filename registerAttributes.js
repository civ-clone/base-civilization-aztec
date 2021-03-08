"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aztec_1 = require("./Aztec");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Aztec',
    nation: 'Aztec',
    colors: ['#A1DAB5', '#EA6B76'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Aztec_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map