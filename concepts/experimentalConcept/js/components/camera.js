import * as THREE from "../threeJS/three.module.js";

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  

export default camera