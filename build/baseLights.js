"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
const initLights = (scene) => {
    const lights = [];
    lights.push(new THREE.AmbientLight(0xffffff, 0.5));
    lights.push(new THREE.PointLight(0xffffff, 0.5));
    lights.forEach(lig => scene.add(lig));
};
exports.default = initLights;
