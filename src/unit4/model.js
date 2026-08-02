import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(20, 20, 20);
const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
})

material.visible = true
const mesh = new THREE.Mesh(geometry, material);

const group = new THREE.Group();
group.add(mesh);
group.position.x = 100;

geometry.translate(50/2, 0, 0);

export default group;