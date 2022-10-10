import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';


const renderer = new THREE.WebGLRenderer({
	canvas: document.getElementById('bg'),
	antialias: true,
	powerPreference: "high-performance",
	antialias: false,
	stencil: false,
	alpha: true,
	depth: true
});



renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.autoClear = true;

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
})

renderer.gammaInput = true;
//renderer.gammaOutput = true;
renderer.autoClear = false;
renderer.gammaFactor = 2.2;



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);



// TorusGeometry
const geometry = new THREE.TorusGeometry(10, 3, 25, 100);
const material = new THREE.MeshStandardMaterial({
	color: 'darkslategray',
	wireframe: true,
	ireframeLinecap: 1,
	wireframeLinewidth: 24,
	flatShading: false,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Lights
const lights = []; // Storage for lights
const lightHelpers = []; // Storage for light helpers
const pointLight = new THREE.PointLight({
	colour: "white",
	intensity: 85,
	dist: 12,
	x: 1,
	y: 3,
	z: 0
});

// Properties for each light
const lightValues = [{
		colour: 0x38e000,
		intensity: 10,
		dist: 12,
		x: 1,
		y: 0,
		z: 8
	},
	{
		colour: 0xc56cef,
		intensity: 16,
		dist: 12,
		x: -2,
		y: 1,
		z: -10
	},
	{
		colour: 0x000078,
		intensity: 26,
		dist: 10,
		x: 0,
		y: 100,
		z: 1
	},
	{
		colour: 0x00ffdd,
		intensity: 36,
		dist: 12,
		x: 50,
		y: -10,
		z: -1
	},
	{
		colour: 0x16a7f5,
		intensity: 46,
		dist: 12,
		x: 10,
		y: 30,
		z: 0
	},
	{
		colour: 0x000078,
		intensity: 100,
		dist: 102,
		x: -100,
		y: -1,
		z: 0
	},
	{
		colour: 0x000057,
		intensity: 100,
		dist: 102,
		x: -100,
		y: -100,
		z: 0
	}
];

for (let i = 0; i < 4; i++) {
	// Loop 6 times to add each light to lights array
	// using the lightValues array to input properties
	lights[i] = new THREE.PointLight(
		lightValues[i]["colour"],
		lightValues[i]["intensity"],
		lightValues[i]["dist"]
	);

	lights[i].position.set(
		lightValues[i]["x"],
		lightValues[i]["y"],
		lightValues[i]["z"]
	);

	scene.add(lights[i]);

	// Add light helpers for each light
	lightHelpers[i] = new THREE.PointLightHelper(lights[i]);
	scene.add(lightHelpers[i]);
}

// addStar
function addStar() {
	const geometry = new THREE.SphereGeometry(0.4, 12, 12);
	const material = new THREE.MeshStandardMaterial({
		color: 'darkslategray',
		flatShading: true,
	});
	const star = new THREE.Mesh(geometry, material);

	const [x, y, z] = Array(6)
		.fill()
		.map(() => THREE.MathUtils.randFloatSpread(120));

	star.position.set(x, y, z);

	scene.add(star);
}
Array(850).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('img/planet/space.jpg');
scene.background = spaceTexture;

//avatar
const myTexture = new THREE.TextureLoader().load('img/planet/my.jpg');
const my = new THREE.Mesh(
	new THREE.BoxGeometry(3, 3, 3),
	new THREE.MeshBasicMaterial({
		map: myTexture,
		flatShading: true,
	})
);
scene.add(my);

// planet earht
const ERTexture = new THREE.TextureLoader().load('img/planet/earht.jpg');
const BMTexture = new THREE.TextureLoader().load('img/planet/bump.jpg');

const myEarht = new THREE.Mesh(
	new THREE.SphereGeometry(4, 60, 60),
	new THREE.MeshStandardMaterial({
		map: ERTexture,
		bumpMap: BMTexture,
		bumpScale: 0.5,
	})
);
scene.add(myEarht);
myEarht.position.z = 30;
myEarht.position.setX(-6);

// planet mars
const MTexture = new THREE.TextureLoader().load('/img/planet/mars.jpg');
const myMars = new THREE.Mesh(
	new THREE.SphereGeometry(6, 60, 60),
	new THREE.MeshStandardMaterial({
		map: MTexture,
		bumpMap: MTexture,
		bumpScale: 0.5,
	})
);
scene.add(myMars);
myMars.position.z = 65;
myMars.position.setX(10);

// planet jupiter
const Jupitertexture = new THREE.TextureLoader().load('img/planet/jupiter.jpg');
const JupiterbumpMap = new THREE.TextureLoader().load('img/planet/Jupiter_Bump.jpg');

const myJupiter = new THREE.Mesh(
	new THREE.SphereGeometry(6, 60, 60),
	new THREE.MeshStandardMaterial({
		map: Jupitertexture,
		bumpMap: JupiterbumpMap,
		bumpScale: 0.15,
	})
);
scene.add(myJupiter);
myJupiter.position.z = 95;
myJupiter.position.setX(-12);

// Create spheres:
const sphereMeshes = [];
const sphereGeometry = new THREE.SphereGeometry(0.2, 10, 0); // Define geometry
const sphereMaterial = new THREE.MeshStandardMaterial({
	color: 0xc56cef,
	flatShading: true,
	// wireframe: true
}); // Define material
for (let i = 0; i < 8; i++) {
	sphereMeshes[i] = new THREE.Mesh(sphereGeometry, sphereMaterial); // Build sphere
	//   sphereMeshes[i].position.set(0,0,250);
	scene.position.z = -6;
	scene.position.x = 3;
	scene.add(sphereMeshes[i]); // Add sphere to canvas
}
var ssLight = new THREE.PointLight(0x9A3F5C, 3);
ssLight.position.set(5, 5, 5);
const ambienTLight = new THREE.AmbientLight(0x9A3F5C);
scene.add(ssLight, ambienTLight);


function moveCamera() {
	const t = document.body.getBoundingClientRect().top;
	// myEarht.rotation.x += 0.05;
	// myEarht.rotation.y += 0.075;
	// myEarht.rotation.z += 0.05;

	// myMars.rotation.x += 0.05;
	// myMars.rotation.y += 0.075;
	// myMars.rotation.z += 0.05;

	// myJupiter.rotation.x += 0.05;
	// myJupiter.rotation.y += 0.075;
	// myJupiter.rotation.z += 0.05;

	torus.rotation.x += 0.03;
	torus.rotation.y += 0.03;
	torus.rotation.z += 0.03;

	my.rotation.y += 0.013;
	my.rotation.z += 0.013;

	camera.position.z = t * -0.013;
	camera.position.x = t * -0.0002;
	camera.position.y = t * 0.0002;
}
document.body.onscroll = moveCamera;
moveCamera();
// Trigonometry Constants for Orbital Paths
let theta = 0; // Current angle
// Angle increment on each render (100 = increments to complete revolution)
const dTheta = (0.3 * Math.PI) / 50;

function animate() {
	requestAnimationFrame(animate);





	torus.rotation.x += 0.01;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.01;

	my.rotation.y += 0.0005;
	my.rotation.z += 0.0005;

	myEarht.rotation.y += 0.001;
	myMars.rotation.y += 0.001;
	myJupiter.rotation.y += 0.001;
	theta += dTheta;

	const trigs = [{
			x: Math.cos(theta * 1.05),
			y: Math.sin(theta * 1.05),
			z: Math.cos(theta * 1.05),
			r: 2
		},
		{
			x: Math.cos(theta * 0.8),
			y: Math.sin(theta * 0.8),
			z: Math.sin(theta * 0.8),
			r: 2.25
		},
		{
			x: Math.cos(theta * 1.25),
			y: Math.cos(theta * 1.25),
			z: Math.sin(theta * 1.25),
			r: 2.5
		},
		{
			x: Math.sin(theta * 0.6),
			y: Math.cos(theta * 0.6),
			z: Math.sin(theta * 0),
			r: 2.75
		}
	];

	// Loop 4 times (for each sphere), updating the position
	for (let i = 0; i < 4; i++) {
		sphereMeshes[i].position.x = trigs[i]["r"] * trigs[i]["x"];
		sphereMeshes[i].position.y = trigs[i]["r"] * trigs[i]["y"];
		sphereMeshes[i].position.z = trigs[i]["r"] * trigs[i]["z"];
	}
	// controls.update();
	renderer.render(scene, camera);

}
animate();
