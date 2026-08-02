import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const gui = new GUI();
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';

import * as THREE from 'three';
import { OrbitControls} from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const stats = new Stats();
document.body.appendChild(stats.domElement);

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(50, 50, 50);
const meterial = new THREE.MeshLambertMaterial({
  color: 0x0000ff,
  transparent: true,
  opacity: 0.5
})

const mesh = new THREE.Mesh(geometry, meterial);
mesh.position.set(0, 0, 0);
scene.add(mesh);

const obj = {
  x: 30,
  color: 0x00ffff,
  scale: 0,
  bool: false
}
gui.add(obj, 'x', 0, 200).onChange(function(value){
  mesh.position.x = value
});

gui.addColor(obj, 'color').onChange(function(value){
  console.log(value, mesh.material)
  mesh.material.color.set(value);
})

gui.add(obj, 'scale', [-100, 0, 100])
.name('y左标')
.onChange(function(value){
  mesh.position.y = value
});

gui.add(obj, 'scale', {
  left: -100,
  center: 0,
  right: 100
})
.name('方位选择')
.onChange(function(value){
  mesh.position.x = value
});
gui.add(obj, 'bool')
.name('是否旋转')

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const pointLight = new THREE.PointLight(0xffffff, 10.0);
pointLight.decay = 0.0;
pointLight.position.set(400, 200,300);
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
scene.add(pointLightHelper);

const ambient = new THREE.AmbientLight('0xffffff', 0.4);
scene.add(ambient);
gui.add(ambient, 'intensity', 0, 20)
.name('环境光强度')
.step(0.1);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(50, 100, 60);
// directionalLight.target = mesh;
scene.add(directionalLight);

const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(1400, 200, 200);
camera.lookAt(1000, 0, 1000);

const renderer = new THREE.WebGLRenderer(
  {
    antialias: true
  }
);
renderer.setSize(width, height);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setClearColor(0x00ffff);

const clock = new THREE.Clock();
function render(){
  // const spt = clock.getDelta()*1000;
  // stats.update();
  if(obj.bool) mesh.rotateY(0.01);
  renderer.render(scene, camera);
  requestAnimationFrame(render)
}
render();

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(1000, 0, 1000);
controls.addEventListener('change', function(){
  renderer.render(scene, camera);
})

window.onresize = function(){
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
}