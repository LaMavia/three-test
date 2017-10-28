// add styles
import './style.css'
// three.js
import * as THREE from 'three'
import {
  Material
} from 'three';
import initLights from './baseLights'
let W = window.innerWidth,
  H = window.innerHeight
window.addEventListener('resize', (e: any) => {
  W = window.innerWidth
  H = window.innerHeight
})
const canvas = document.querySelector('#view'),
  color = '#1b1b1b'
const rend = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  } as object)
rend.setClearColor(color)
rend.setSize(W, H)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)
camera.position.set(0, 0, 0)
function Box(x, y, z, s,color) {
  const cube = new THREE.BoxGeometry(s, s, s)
  const mat = new THREE.MeshLambertMaterial({
		color: color,
		opacity: 0.5
  })
  const mesh = new THREE.Mesh(cube, mat)
  mesh.position.set(x, y, z)
	scene.add(mesh)
	return mesh
}
Box.prototype = THREE.Mesh.prototype
console.log(THREE.Mesh.prototype)
initLights(scene)
const boxes = [],
	gridCount = 10
for(let i = 0;i < gridCount;i++){
	const ran = (n) => Math.floor(Math.random() * n) 
	const size = 10,
				base = -size * gridCount / 1.5
	let y = base + size * (i+1),
			z = -150
	for(let j = 0;j < gridCount;j++){
		let x = base + size * (j+1),
				b = j%256 * 10,
				c = new THREE.Color(`rgb(${b * (b%(i+1))},${b * 2},${Math.floor(Math.PI * b)})`)
		console.log(j%256)
		boxes.push(Box(x,y,z,size,c))
	}
}
let a = 0
console.log(boxes)
function animate(): void {
	requestAnimationFrame(animate)
	boxes.forEach((box:THREE.Mesh) => {
		box.rotation.set(a,a,a)
	})
	a += 0.01
  render()
}
function render(): void {

  rend.render(scene, camera)
}
requestAnimationFrame(animate)