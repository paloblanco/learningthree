## Intro for js stuff

Threejs is a Jslibrary for drawing 3D visuals on canvas in a browser. It is possible to just grab the three.js file and drop it into your project, but this is a pretty unsustainable way to develop things. If you want to take advantage of multiple JS files with imports, autocomplete in whatever editor you are using, and other useful build tools, it is beneficial to set up a development environment.

This post will go over how to set up a "project" for threejs. It can be transferred easily enough to any type of front-end development.

## Requirements 

Must have Node.js and NPM installed (NPM should come with node). You will need to be able to call npm via the commandline, so whether you do a system or user install is up to you, but make sure your env. Variables are set such that you can call "npm" on the commandline.

## Getting started:

Create a folder for your project (threeproj). This will be your root directory.
Create a folder "js", and create an empty file "main.js". This will be your main file for any JS visuals you are producing.
On the commandline, cd to "threeproj" and run "npm init". This will set up a package.json file, which sort-of defines your environment. You can choose the default options for all the options it gives you.
You now need to import modules. On commandline, do "npm install --save three".  The "--save" makes sure that three is associated with anything you export.
There are separete npm utilities that will help you with the project, but will not actually get exported with the project. Run the command "npm install --save-dev browserify watchify uglify-js"
We want to build commandline scripts that take advantage of the utilities we just built. Navigate to "package.json" and past the following lines into "scripts" :

"build": "browserify js/main.js | uglifyjs -mc > app.js",

"dev": "watchify js/main.js -v -o app.js"

"build" will take any JS you made and condense it into a single js file. This will enable you to develop your app using import statements but have them all condensed into a single file when it is time to deploy. "uglify" obfuscates your code so it is no longer human readable.
"dev" will actively watch your files and save changes to "app.js" in real time so that you can test your application. The JS will not get uglified via this process, so you can better debug.
You are pretty much ready to go at this point. Create a index.html file to contain your app and start with the placeholder text below:

<!DOCTYPE html>

<html>

    <head>

        <meta charset=utf-8>

        <title>My first three.js app</title>

        <style>

            body { margin: 0; }

            canvas { width: 100%; height: 100% }

        </style>

    </head>

    <body>

        <script src="app.js"></script>

    </body>

</html>

 

You can also use a templater or something fancier to hold your app.
The following "hello world" of threejs can be pasted into main.js. Try running "npm run dev" to set up the watcher, paste the text below, save main.js, then open index.html.


    var THREE = require('three')

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    var cube = new THREE.Mesh( geometry, material );

    scene.add( cube );

    camera.position.z = 5;

    function animate() {

    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;

    cube.rotation.y += 0.01;

        renderer.render( scene, camera );

    }

    animate();