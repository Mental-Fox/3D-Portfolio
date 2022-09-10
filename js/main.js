import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';


const renderer = new THREE.WebGLRenderer({
	canvas: document.getElementById('bg'),
	antialias: false,
	powerPreference: "high-performance",
	antialias: false,
	stencil: false,
	depth: true
});





renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.autoClear = false;

renderer.gammaInput = true;
//renderer.gammaOutput = true;
renderer.autoClear = false;




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(30);
camera.position.setX(-3);

// var controls = new OrbitControls(camera, renderer.domElement);



const geometry = new THREE.TorusGeometry(10, 3, 25, 100);
const material = new THREE.MeshStandardMaterial({
	color: 0xffffff,
	wireframe: true,
	ireframeLinecap: 1,
	wireframeLinewidth: 24,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// const geometry_t = new THREE.TorusGeometry(10, 3, 16, 100);
// const material_t = new THREE.MeshStandardMaterial({
// 	color: 0xffffff,
// 	wireframe: true,
// 	ireframeLinecap: 1,
// 	wireframeLinewidth: 24,
// });
// const torus2 = new THREE.Mesh(geometry_t, material_t);
// scene.add(torus2);

var pointLight = new THREE.PointLight(0x674EA7, 4);
pointLight.position.set(5, 5, 5);

const ambienTLight = new THREE.AmbientLight(0x404040);
scene.add(pointLight, ambienTLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);

// const gridHelper = new THREE.GridHelper(200);
// scene.add(lightHelper, gridHelper);



function addStar() {
	const geometry = new THREE.SphereGeometry(0.4, 12, 12);
	const material = new THREE.MeshStandardMaterial({
		color: 0x54111c, 

		wireframe: true
	});
	const star = new THREE.Mesh(geometry, material);

	const [x, y, z] = Array(6)
		.fill()
		.map(() => THREE.MathUtils.randFloatSpread(60));

	star.position.set(x, y, z);
	scene.add(star);
}
Array(380).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('img/planet/space.jpg');
scene.background = spaceTexture;

//avatar
const myTexture = new THREE.TextureLoader().load('img/planet/my.jpg');

const my = new THREE.Mesh(
	new THREE.BoxGeometry(3, 3, 3),
	new THREE.MeshBasicMaterial({ map: myTexture })
);
scene.add(my);

//Earth
const ERTexture = new THREE.TextureLoader().load('img/planet/earht.jpg');
const BMTexture = new THREE.TextureLoader().load('img/planet/bump.jpg');

const myEarht = new THREE.Mesh(
	new THREE.SphereGeometry(4, 32,32),
	new THREE.MeshStandardMaterial({
		map: ERTexture,
		bumpMap: BMTexture,
		bumpScale: 0.5,
	})
);
scene.add(myEarht);
myEarht.position.z = 30;
myEarht.position.setX(-6);

//mars
const MTexture = new THREE.TextureLoader().load('/img/planet/mars.jpg');
const myMars = new THREE.Mesh(
	new THREE.SphereGeometry(6, 32, 32),
	new THREE.MeshStandardMaterial({
		map: MTexture,
	})
);
scene.add(myMars);
myMars.position.z = 65;
myMars.position.setX(8);

my.position.z = -6;
my.position.x = 2.5;




function moveCamera() {
	const t = document.body.getBoundingClientRect().top;
	myEarht.rotation.x += 0.05;
	myEarht.rotation.y += 0.075;
	myEarht.rotation.z += 0.05;

	myMars.rotation.x += 0.05;
	myMars.rotation.y += 0.075;
	myMars.rotation.z += 0.05;

	my.rotation.y += 0.01;
	my.rotation.z += 0.01;

	camera.position.z = t * -0.013;
	camera.position.x = t * -0.0002;
	camera.position.y = t * 0.0002;


}
document.body.onscroll = moveCamera;
moveCamera();

function animate() {
	requestAnimationFrame(animate);

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.01;

	my.rotation.y += 0.0005;
	my.rotation.z += 0.0005;

	myEarht.rotation.y += 0.001;
	myMars.rotation.y += 0.001;

	// controls.update();
	renderer.render(scene, camera);

}
animate();












