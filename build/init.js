"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
function init(obj, objParameters, material, materialParameters, scene) {
    const o = new THREE[obj](objParameters);
    return o;
}
exports.default = init;
