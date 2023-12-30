import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scenery = ({ scale, width, height }) => {
  const sceneRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    let renderer, camera, scene, cube;

    const init = () => {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      sceneRef.current.replaceChildren(renderer.domElement);

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      scene = new THREE.Scene();

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      const handleMouseDown = (event) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      };

      const handleMouseMove = (event) => {
        const deltaX = event.clientX - mouseX.current;
        const deltaY = event.clientY - mouseY.current;

        cube.rotation.y += deltaX * 0.01;
        cube.rotation.x += deltaY * 0.01;

        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      renderer.domElement.addEventListener('mousedown', handleMouseDown);

      animate();
    };

    const animate = () => {
      cube.scale.set(scale, scale, scale);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    init();

    return () => {
      renderer.dispose();
    };
  }, [scale, width, height]);

  return <div ref={sceneRef} style={{ flex: '1', width: `${width}px`, height: `${height}px` }}></div>;
};

export default Scenery;
