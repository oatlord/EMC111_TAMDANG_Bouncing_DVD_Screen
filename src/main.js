import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800,800 );
document.body.appendChild( renderer.domElement );

const planeGeometry = new THREE.PlaneGeometry(1,1);
const planeMaterial = new THREE.MeshBasicMaterial({color:0xff4d4d});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);

scene.add(plane);

camera.position.z = 5;

function animate() {
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );