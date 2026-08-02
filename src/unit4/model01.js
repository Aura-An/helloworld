import * as THREE from 'three';

// 创建一个空的几何体顶对象
const geometry = new THREE.BoxGeometry(50, 50, 50);
const meterial = new THREE.MeshLambertMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.5,
})

const mesh1 = new THREE.Mesh(geometry, meterial);
const mesh2 = new THREE.Mesh(geometry, meterial);
mesh2.translateX(150);

const group = new THREE.Group();
// const group = new THREE.Object3D();
group.add(mesh1);
group.add(mesh2);
group.translateY(50);

export default group;