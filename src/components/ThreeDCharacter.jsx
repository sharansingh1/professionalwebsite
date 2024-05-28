// ThreeDCharacter.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF('/scene.gltf');  // Ensure the path is correct
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;  // Adjust rotation speed here
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

const ThreeDCharacter = () => {
  return (
    <Canvas style={{ height: '50vh', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model scale={2} position={[0, -1, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDCharacter;
