
import * as THREE from 'three';
import mesh from './model.js'

let camera, scene, renderer;
init();


function init() {
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
  camera.position.z = 2;
  //222222222222222222222222222
  scene = new THREE.Scene();
  scene.add( mesh ); // 2232

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );
  document.body.appendChild( renderer.domElement );


  window.addEventListener( 'resize', onWindowResize );

}

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