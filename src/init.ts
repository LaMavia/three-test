import { Scene, Material, MaterialParameters } from "three";
import * as THREE from "three";

export default function init(obj:any, objParameters:object, material: Material, materialParameters:MaterialParameters, scene: Scene){
  const o = new THREE[obj](objParameters) 

  return o
}