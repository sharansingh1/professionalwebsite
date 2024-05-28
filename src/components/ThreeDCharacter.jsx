// ThreeDCharacter.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/scene.gltf');
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return <primitive object={scene} ref={ref} {...props} />;
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
