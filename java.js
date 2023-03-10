var video = document.createElement('video');
video.src = 'Video/VideoVR.mp4';
video.autoplay = true;
video.muted = true;
video.loop = true;

var texture = new THREE.VideoTexture(video);
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.format = THREE.RGBFormat;

var geometry = new THREE.SphereGeometry(500, 60, 40);
var material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});

var sphere = new THREE.Mesh(geometry, material);
sphere.rotation.x = Math.PI / 2;

var scene = new THREE.Scene();
scene.add(sphere);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 0.1);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('video').appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();
