var THREE = require('three')
var OrbitControls = require('~/js/external/OrbitControls.js')
var uv_test = require('~/textures/uv_test_bw.png')


// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let controls;
let renderer;
let scene;
let mesh;

function init() {
    
    container = document.querySelector( '#container' );
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color("skyblue");

    initCamera();
    initControls();
    initLights();
    initMeshes();
    initRenderer();

}

function initCamera() {
    const fov = 35; // AKA Field of View
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane
    camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

    camera.position.set( -4, 4, 10 );
}

function initControls() {
    controls = new OrbitControls( camera, container );
}

function initLights() {
    //add a light to the scene
    const frontLight = new THREE.DirectionalLight(0xffffff, 1.0);
    const backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);

    //move the light, since its default position is 000
    frontLight.position.set(10,10,10);
    backLight.position.set(-10,10,-10);

    //add the light to the scene
    scene.add(frontLight);
    scene.add(backLight);
    scene.add(ambientLight);
}

function initMeshes() {
    // create a geometry
    const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

    // create our texture loader
    const textureLoader = new THREE.TextureLoader();
    texture = textureLoader.load(uv_test);
    texture.anisotropy = 16;

    // create a purple Basic material
    const material = new THREE.MeshStandardMaterial( { map: texture } );
    const material2 = new THREE.MeshBasicMaterial( { color: 0x800080 } );

    // create a Mesh containing the geometry and material
    mesh = new THREE.Mesh( geometry, material );
    mesh2 = new THREE.Mesh( geometry, material2 );

    // add the mesh to the scene
    scene.add( mesh );
    // scene.add( mesh2 );
    // mesh2.position.set(3,0,0);

}

function initRenderer() {
    // create a renderer
    renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize( container.clientWidth, container.clientHeight );
    renderer.setPixelRatio( window.devicePixelRatio );

    // add the automatically created <canvas> element to the page
    container.appendChild( renderer.domElement );

}

function update() {
    // animate our cube a little bit
    // mesh.rotation.z += 0.01;
    // mesh.rotation.y += 0.01;
    // mesh.rotation.x += 0.01;

    // mesh2.rotation.z += 0.01;
    // mesh2.rotation.y += 0.01;
    // mesh2.rotation.x += 0.01;

}

function render() {
    
    renderer.render( scene, camera );

}

// handle window resizing
function onWindowResize() {
    
    // set the aspect ratio to match the new browser window aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;


    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize( container.clientWidth, container.clientHeight );
  
    }

  
window.addEventListener( 'resize', onWindowResize );


// this is our play button - it will make the app go!
play = function() {
    renderer.setAnimationLoop( () => {
        update();
        render();
    }) 
}

init();

module.exports = play;
