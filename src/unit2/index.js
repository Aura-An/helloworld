import * as THREE from 'three';
import { OrbitControls} from 'three/addons/controls/OrbitControls.js'
import model from './model.js';


const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const pointLight = new THREE.PointLight(0xffffff, 10.0);
pointLight.decay = 0.0;
pointLight.position.set(400, 200,300);
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
scene.add(pointLightHelper);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

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

function render(){
  renderer.render(scene, camera);
  requestAnimationFrame(render)
}
render();
