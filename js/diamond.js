//function init() {
//	const scene2 = new THREE.Scene();

//	const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 10, 1000);



//	renderer = new THREE.WebGLRenderer({
//		canvas: document.getElementById('dimond'),
//		alpha:true, 
//		antialias:true,
//		powerPreference: "high-performance",
//		antialias: false,
//		stencil: false,
//		depth: true
//	});
//	renderer.setClearColor(0x000000,0);
//	renderer.setSize(1280,720);

//	document.body.insertBefore(renderer.domElement, document.body.firstChild);

//	const aLight = new THREE.AmbientLight(0x404040,1.2);
//	scene2.add(aLight);

//	const pLight = new THREE.PointLight(0xffffff,1.2);
//	pLight.position.set(0,-3,7)
//	scene2.add(pLight);

//	const helper = new THREE.PointLightHelper(pLight);
//	scene2.add(helper);

//	let loader = new THREE.GLTFLoader();
//	let obj = null;

//	loader.load('img/model/dimond.gltf', function(gltf){
//		obj = gltf;
//		obj.scene2.scale.set(1.3,1.3,1.3);
//		scene2.add(obj);
//		animate();
//	});

//	obj.renderOrder = zindex || 999;
//	obj.material.depthTest = false;
//	obj.material.depthWrite = false;
//	obj.onBeforeRender = function (renderer) { renderer.clearDepth(); };

//	function animate(){
//		requestAnimationFrame(animate);

//		if (obj)
//			obj.scene2.rotation.y += 0.03;

//		renderer.render(scene2,camera);
//	}
//	animate();
//}
//init();