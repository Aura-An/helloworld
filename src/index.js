
import * as THREE from 'three';
import mesh from './model.js'

let camera, scene, renderer;

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;

  renderer.render( scene, camera );

}