import { getAssetPath } from '../../../utils/getAssetPath'
import { useRef } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';
//import { OrbitControls } from '@react-three/drei';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
(GLTFLoader.prototype as unknown as { setDRACOLoader: (loader: DRACOLoader) => void }).setDRACOLoader(dracoLoader);

interface BadgeIconsProps {
    badge3DURL: string;
    positionXYZ: { x: number, y: number , z: number};
    rotationXYZ: { x: number, y: number , z: number};
    animationXYZ: { x: number, y:number, z: number};
}

export default function BadgeIcon({badge3DURL, positionXYZ, rotationXYZ, animationXYZ}: BadgeIconsProps) {

    function Model({badge3DURL, positionXYZ, rotationXYZ, animationXYZ}: BadgeIconsProps) {
        useGLTF.preload(getAssetPath(badge3DURL));
        const badge = useGLTF(getAssetPath(badge3DURL));
        const ref = useRef<THREE.Object3D>(null!);
    
        const time = useRef(0);
    
        useFrame((_, delta) => {
          time.current += delta;
      
          if (ref.current) {
            ref.current.rotation.x += animationXYZ.x;
            ref.current.rotation.y += animationXYZ.y;
            ref.current.rotation.z += animationXYZ.z;
          }
        });
    
    
        return (
            <primitive 
                ref={ref}
                object={badge.scene}
                position={[positionXYZ.x || 0, positionXYZ.y || 0, positionXYZ.z || 0]}
                rotation={[rotationXYZ.x || 0, rotationXYZ.y || 0, rotationXYZ.z || 0]}
            />
        );
    }

    return (
        <figure className="h-[100%]">
        <Canvas camera={{position: [0, 0, 5], fov: 45}}>
            <ambientLight intensity={1} color="#988ad4" />
            <directionalLight position={[5, 5, 5]} intensity={5}/>
            <directionalLight position={[-5, 5, -5]} intensity={5} />
           
            {/*
            <OrbitControls 
                enablePan={false} 
                minDistance={5} 
                maxDistance={2000}
                enableZoom={true}
                zoomSpeed={1}       
            />
            */}

            <Model badge3DURL={badge3DURL} positionXYZ={positionXYZ} rotationXYZ={rotationXYZ} animationXYZ={animationXYZ} />

        </Canvas>
        </figure>
    );
}