import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BackgroundSphere() {
  const { scene } = useGLTF("/models/backgrounds/galaxy-sphere.glb");
  const ref = useRef<THREE.Object3D>(null!);;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0002;
      ref.current.rotation.y += 0.0003; 
    }
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={[-1, 1, 1]} 
      position={[0, 0, 0]} 
    />
  );
}
