// THREE.Object3D.DefaultUp.set(0, 0, 1);

// import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
// camera.position.setZ(10);
// camera.position.setX(-35);


// const renderer = new THREE.WebGLRenderer({
// 	canvas: document.getElementById('model'),
// 	antialias: false,
// 	alpha: false,

// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// // renderer.setSize(100, 400);

// renderer.autoClear = true;


// const myGeo = new THREE.Mesh(
// 	new THREE.SphereGeometry(10, 3, 2),
// 	new THREE.MeshStandardMaterial({
// 		color: 0xffffff,
// 	})
// );
// scene.add(myGeo);
// myGeo.position.z = -60;
// myGeo.position.setX(10);

// var pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);

// const ambienTLight = new THREE.AmbientLight(0x404040);
// scene.add(pointLight, ambienTLight);

// function moveCamera() {
// 	const t = document.body.getBoundingClientRect().top;
// 	myGeo.rotation.x += 0.01;
// 	myGeo.rotation.y += 0.01;

// 	// camera.position.z = t * -0.013;
// 	// camera.position.x = t * -0.0002;
// 	// camera.position.y = t * 0.0002;
// }
// document.body.onscroll = moveCamera;
// moveCamera();

// const animate = function () {
// 	requestAnimationFrame(animate);

// 	myGeo.rotation.x += 0.01;
// 	myGeo.rotation.y += 0.01;

// 	renderer.render(scene, camera);
// };

// animate();