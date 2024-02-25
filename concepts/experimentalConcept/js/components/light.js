import * as THREE from "../threeJS/three.module.js";

const light = new THREE.AmbientLight( 0x404040 ); // soft white light

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(-10,10,10)

light.add( directionalLight );

export default light
