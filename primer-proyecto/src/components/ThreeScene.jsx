import { useEffect, useRef } from "react";
//importar three.js al componente 
import * as THREE from "three";

// importar las dependencias 
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";


export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    //  crear la escena
    const scene = new THREE.Scene();

    // crear la  Cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 3. Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 4. Cubo
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    //loader para las fuentes 
    const loader = new FontLoader();
    loader.load("/fonts/helvetiker_regular.typeface.json",(font)=>{
        const textGeometry = new TextGeometry("Hola Lucy!!",{
            font: font,
            size:0.8, // tamaño dl texto
            heiht:0.2, // profundidad del texto
            curveSegments:12, // suavizado de las curvas
            bevelEnabled:true, // habilitar bisel
            bevelThickness:0.02, // grosor del bisel
            bevelSize:0.02, // tamaño del bisel
            bevelSegments:5, // segmentos del bisel
        });

        const textMaterial = new THREE.MeshStandardMaterial({color:0xff0055});
        const textMesh = new THREE.Mesh(textGeometry,textMaterial);
        textMesh.position.set (-2, 0, 0);
        textMesh.castShadow = true;
        scene.add(textMesh);
    });

    // 5. Animación
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // 6. Ajuste al redimensionar
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Limpieza
    return () => {
      window.removeEventListener("resize", handleResize);
        renderer.dispose();
      
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
}
