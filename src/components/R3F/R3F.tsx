import React from 'react';
import { Canvas } from '@react-three/fiber';

const R3F = () => {
  return (
    <div className="R3F">
      <Canvas>
        <mesh>
          <boxBufferGeometry />
          <meshPhongMaterial />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default R3F;
