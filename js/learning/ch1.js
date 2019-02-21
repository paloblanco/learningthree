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

    camera.position.set( -5, 5, 7 );
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
    // used to build a train in section 1.6
    const train = new THREE.Group();
    scene.add( train );

    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0xff3333,
        flatShading: true,
    });

    const detailMaterial = new THREE.MeshStandardMaterial({
        color: 0x333333,
        flatShading: true,
    });

    const noseGeometry = new THREE.CylinderBufferGeometry( 0.75, 0.75, 3, 12 );
    const nose = new THREE.Mesh( noseGeometry, bodyMaterial );

    nose.rotation.z = Math.PI / 2;
    nose.position.x = -1;

    const cabinGeometry = new THREE.BoxBufferGeometry( 2, 2.25, 1.5 );
    const cabin = new THREE.Mesh( cabinGeometry, bodyMaterial );
    cabin.position.set( 1.5, 0.4, 0 );

    const wheelGeo = new THREE.CylinderBufferGeometry( 0.4, 0.4, 1.75, 16 );
    wheelGeo.rotateX( Math.PI / 2 );
  
  
    const smallWheelRear = new THREE.Mesh( wheelGeo, detailMaterial );
    smallWheelRear.position.set( 0, -0.5, 0 );
  
    const smallWheelCenter = smallWheelRear.clone();
    smallWheelCenter.position.x = -1;
  
    const smallWheelFront = smallWheelRear.clone();
    smallWheelFront.position.x = -2;
  
    const bigWheel = smallWheelRear.clone();
    bigWheel.scale.set( 2, 2, 1.25 );
    bigWheel.position.set( 1.5, -0.1, 0 );
  
    const chimneyGeometry = new THREE.CylinderBufferGeometry( 0.3, 0.1, 0.5 );
    const chimney = new THREE.Mesh( chimneyGeometry, detailMaterial );
    chimney.position.set( -2, 0.9, 0 );

    train.add( chimney );
    train.add( nose, cabin );
    train.add( smallWheelRear, smallWheelCenter, smallWheelFront, bigWheel );

}

function initMeshesOld() {
    //this is used in sections 1.1-1.5 of lewyblues tutorial
    
    // create a geometry
    const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

    // create our texture loader
    const textureLoader = new THREE.TextureLoader();
    texture = textureLoader.load(uv_test);
    texture.anisotropy = 16;

    // create a purple Basic material
    const material = new THREE.MeshStandardMaterial( { 
        map: texture,
        // normalMap: texture,    
    } );
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
