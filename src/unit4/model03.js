import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(20, 20, 20);
const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
})
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 50;

const group = new THREE.Group();
group.add(mesh);
group.position.x = 50;

const v3 = new THREE.Vector3();
mesh.getWorldPosition(v3);
console.log('v3', v3);

const meshAxesHelper = new THREE.AxesHelper(50);
mesh.add(meshAxesHelper)

export default group;