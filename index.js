import * as Three from 'three';

const width = window.innerWidth, height = window.innerHeight;

// init

const camera = new Three.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new Three.Scene();

const geometry = new Three.BoxGeometry( 0.4, 0.4, 0.4 );
const material = new Three.MeshNormalMaterial();

const mesh = new Three.Mesh( geometry, material );
scene.add( mesh );

const renderer = new Three.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}