import * as THREE from "../../threeJS/three.module.js";

const geometry = new THREE.PlaneGeometry( 15, 15 );
const material = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );

plane.rotation.x += Math.PI *.5
plane.position.y = -1
export default plane