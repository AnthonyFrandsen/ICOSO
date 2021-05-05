var diceMaterial;

document.addEventListener('DOMContentLoaded', function(event) {
    let colorSelector = document.getElementById("color-selector");
    console.log(colorSelector);

    //change the material view a drop-down selector
    colorSelector.addEventListener("change", function(event){
        diceMaterial.color = new THREE.Color(
            colorSelector.options[colorSelector.selectedIndex].text
        );
    });
    var container = document.getElementById('container');
    var renderer = new THREE.WebGLRenderer({antialias: true});
    var camera = new THREE.PerspectiveCamera(80,1,0.1,10000);
    var scene = new THREE.Scene();

    scene.add(camera);
    renderer.setSize(400, 400);
    container.append(renderer.domElement);

    camera.position.z = 200;

    diceMaterial = new THREE.MeshStandardMaterial( { color: 0xff0051 })

    var L1 = new THREE.PointLight( 0xffffff, 0.8);
    L1.position.z = 100;
    L1.position.y = 100;
    L1.position.x = 100;
    scene.add(L1);

    var L2 = new THREE.PointLight( 0xffffff, 0.8);
    L2.position.z = 200;
    L2.position.y = 50;
    L2.position.x = -100;
    scene.add(L2);

    // IcoSphere -> THREE.IcosahedronGeometry(80, 1) 1-4
    var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(50,0), diceMaterial);
    scene.add(Ico);
    diceMaterial.color = new THREE.Color("rgb(255,230,193)")
    function update(){
        Ico.rotation.x+=2/100;
        Ico.rotation.y+=2/100;
    }

    // Render
    function render() {
        requestAnimationFrame(render);			
        renderer.render(scene, camera);	
        update();
    }

    render();
});