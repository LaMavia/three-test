"use strict";
exports.__esModule = true;
// add styles
require("./style.css");
// three.js
var THREE = require("three");
var W = window.innerWidth, H = window.innerHeight;
window.addEventListener('resize', function (e) {
    W = window.innerWidth;
    H = window.innerHeight;
});
var canvas = document.querySelector('#view'), color = '#1b1b1b';
var rend = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
rend.setClearColor(color);
rend.setSize(W, H);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 0, 0);
var light = new THREE.AmbientLight(0xffffff, 0.5);
//light.position.set(0,0,-1000)
//light.rotateX(90)
var light1 = new THREE.PointLight(0xffffff, 0.5);
//light.position.set(0,0,-1000)
//light.rotateX(90)
scene.add(light, light1);
var cube = new THREE.BoxGeometry(100, 100, 100);
var mat = new THREE.MeshLambertMaterial({ color: 0xfde432 });
//mat.wireframe = true
//mat.color.setRGB(100,255,100)
var mesh = new THREE.Mesh(cube, mat);
mesh.position.set(0, 0, -510);
var a = 0.01;
scene.add(mesh);
function animate() {
    requestAnimationFrame(animate);
    var _a = [Math.random(), Math.random(), Math.random()], r1 = _a[0], r2 = _a[1], r3 = _a[2];
    mesh.rotateX(a / 1.2);
    mesh.rotateY(a / 1.01);
    mesh.rotateZ(a / 1.11);
    render();
}
function render() {
    rend.render(scene, camera);
}
requestAnimationFrame(animate);
