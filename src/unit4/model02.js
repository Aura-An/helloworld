import * as THREE from 'three';

const group1 = new THREE.Group();
for(let i = 0; i < 5;i++){
  const geometry = new THREE.BoxGeometry(20, 100, 10);
  const material = new THREE.MeshLambertMaterial({
    color: 0xffff00,
  })
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 100;
  mesh.name = i+'号楼';
  group1.add(mesh);
}
group1.position.z = 0;
group1.position.y = 15;

const group2 = new THREE.Group();
for(let i = 0; i < 5;i++){
  const geometry = new THREE.BoxGeometry(20, 50, 10);
  const material = new THREE.MeshLambertMaterial({
    color: 0xffff00,
  })
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 100;
  mesh.name = i+6+'号楼';
  group2.add(mesh);
}
group2.position.z = 50;
group2.position.y = 15;

const model = new THREE.Group();
model.name = '小区房子';
model.add(group1, group2);
model.position.set(-50, 0, -25);

model.traverse(function(obj){
  if(obj.isMesh){
    console.log(obj)
    obj.material.color.set(0xff0000);
  }
})

const obj = model.getObjectByName('4号楼');
obj.material.color.set(0xff00ff);

export default model;