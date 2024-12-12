// @ts-nocheck
import { useGLTF } from '@react-three/drei';
import React from 'react';

const basePath = import.meta.env.BASE_URL || '/'; // Adjusts for Vite's base setting

export default function Model(props) {
  const { nodes, materials } = useGLTF(`${basePath}models/earth.gltf`); // Use dynamic base path
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={3} />
    </group>
  );
}

useGLTF.preload(`${basePath}models/earth.gltf`); // Preload with correct path
