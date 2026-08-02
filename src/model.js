import * as THREE from 'three';

const texture = new THREE.TextureLoader().load( 'earth.jpg' );
texture.colorSpace = THREE.SRGBColorSpace;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { map: texture } );

const mesh = new THREE.Mesh( geometry, material );

export default mesh;