var THREE = require('three')
// import THREE from 'three';

// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let renderer;
let scene;
let mesh;

function init() {
    // Get a reference to the container element that will hold our scene
    container = document.querySelector( '#container' );
    // container = document.querySelector( '#container' );

    // create a Scene
    scene = new THREE.Scene();
    // set the background color
    scene.background = new THREE.Color("skyblue");

    //make the camera
    // Create a Camera
    const fov = 35; // AKA Field of View
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane
    camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

    // every object is initially created at ( 0, 0, 0 )
    // we'll move the camera back a bit so that we can view the scene
    camera.position.set( 0, 0, 10 );
    // the above line is equivalent to doing the following:
    // camera.position.x = 0;
    // camera.position.y = 0;
    // camera.position.z = 10;

    // create a geometry
    const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

    // create a purple Basic material
    const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );
    const material2 = new THREE.MeshBasicMaterial( { color: 0x800080 } );

    // create a Mesh containing the geometry and material
    mesh = new THREE.Mesh( geometry, material );
    mesh2 = new THREE.Mesh( geometry, material2 );

    // add the mesh to the scene
    scene.add( mesh );
    scene.add( mesh2 );
    mesh2.position.set(3,0,0);

    //add a light to the scene
    const light = new THREE.DirectionalLight(0xffffff, 5.0);

    //move the light, since its default position is 000
    light.position.set(0,3,3);

    //add the light to the scene
    scene.add(light);

    // create a renderer
    renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize( container.clientWidth, container.clientHeight );
    renderer.setPixelRatio( window.devicePixelRatio );

    // add the automatically created <canvas> element to the page
    container.appendChild( renderer.domElement );
}

animate = function() {
    // call animate recursively
    requestAnimationFrame( animate );

    // animate our cube a little bit
    mesh.rotation.z += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.01;

    mesh2.rotation.z += 0.01;
    mesh2.rotation.y += 0.01;
    mesh2.rotation.x += 0.01;

    // render, or 'create a still image', of the scene
    // this will create one still image / frame each time the animate
    // function calls itself
    renderer.render( scene, camera );
}

init();

module.exports = animate;



