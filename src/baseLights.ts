import * as THREE from 'three'
import { Scene } from 'three';
const initLights = (scene:Scene) => {
  const lights = []
  lights.push(new THREE.AmbientLight(0xffffff, 0.5))
  lights.push(new THREE.PointLight(0xffffff, 0.5))
  lights.forEach(lig => scene.add(lig))
}
export default initLights