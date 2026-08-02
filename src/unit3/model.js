import * as THREE from 'three';

// 创建一个空的几何体顶对象
const geometry = new THREE.BoxGeometry(50, 50, 50);
const meterial = new THREE.MeshLambertMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.5,
})

const mesh = new THREE.Mesh(geometry, meterial);

// const v3 = new THREE.Vector3(100, 100, 100);
// v3.set(50, 50, 50);

// mesh.position.x = 100;
// mesh.translateX(100);

// const v = new THREE.Vector3(1, 1, 1);
// v.normalize();
// mesh.translateOnAxis(v, 100);

// mesh.rotateZ(Math.PI/8);

// const color = new THREE.Color();
// color.setRGB(0,1,0);
// color.setHex(0x00ff00);
// color.setStyle('#00ff00');
// meterial.color = color;

const mesh2 = mesh.clone();
mesh2.position.x = 200;
mesh2.material = mesh.material.clone();
mesh2.material.color.set(0xffffff);

mesh.position.copy(mesh2.position);
mesh.position.y += 100;

export { mesh, mesh2 };