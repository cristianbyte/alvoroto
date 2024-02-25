import * as THREE from "../threeJS/three.module.js";
import {OrbitControls} from "../threeJS/orbitcontrols.js"

const controls = new OrbitControls(camera, renderer.domElement)
//controls.enableZoom = false;
controls.minDistance = 1;
controls.maxDistance = 15
controls.screenSpacePanning = false
controls.enableDamping = true
controls.dampingFactor = 0.1;


export default controls






