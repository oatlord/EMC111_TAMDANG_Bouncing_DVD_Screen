import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );

document.body.appendChild( renderer.domElement );

let planeWidth = 1;
let planeHeight = 1;

const planeGeometry = new THREE.PlaneGeometry(planeWidth,planeHeight);
const planeMaterial = new THREE.MeshBasicMaterial({color:0xff4d4d});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
scene.add(plane);

plane.position.set(0,0,0);
camera.position.z = 25;

let x_increment = 0.09;
let y_increment = 0.09;

let bounce = 0;

function collision() {
	if (plane.position.x > 39 || plane.position.x < -39) {
		x_increment = -x_increment;
		planeWidth -= 0.07;
		planeHeight -= 0.07;
		plane.scale.set(planeWidth,planeHeight);
		randomColor();
		bounce++;
	}
	if (plane.position.y > 19 || plane.position.y < -19) {
		y_increment = -y_increment;
		planeWidth -= 0.07;
		planeHeight -= 0.07;
		plane.scale.set(planeWidth,planeHeight);
		randomColor();
		bounce++;
	}
}

function randomColor() {
	const color = THREE.MathUtils.randInt(0, 0xffffff);
	plane.material.color.set(color);
}

function animate() {
	requestAnimationFrame(animate);
	collision();
	plane.position.x += x_increment;
	plane.position.y += y_increment;

	if (bounce > 8) {
		scene.remove(plane);
	}
	renderer.render( scene, camera );
}

animate();

